"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Slide = {
  video: string;
  title: React.ReactNode;
  description: string;
  ctaLabel: string;
  ctaTo: string;
};

const slides: Slide[] = [
  {
    video: "/videos/hero-batiment.mp4",
    title: (
      <>
        Acoustique des<br />bâtiments tertiaires
      </>
    ),
    description:
      "Solutions d'isolation phonique haute performance pour bureaux, immeubles et espaces de travail.",
    ctaLabel: "Solutions bâtiment",
    ctaTo: "/batiment/isolation-acoustique",
  },
  {
    video: "/videos/hero-piscine.mp4",
    title: (
      <>
        Plages de piscine<br />antidérapantes
      </>
    ),
    description:
      "Revêtements drainants, confortables et durables pour les abords de piscine.",
    ctaLabel: "Solutions piscine",
    ctaTo: "/sport/outdoor/piscine",
  },
  {
    video: "/videos/hero-yoga.mp4",
    title: (
      <>
        Sols pour le yoga<br />et le bien-être
      </>
    ),
    description:
      "Des revêtements souples et accueillants pour studios de yoga, pilates et fitness doux.",
    ctaLabel: "Solutions fitness",
    ctaTo: "/sport/fitness/yoga",
  },
  {
    video: "/videos/hero-exterieur.mp4",
    title: (
      <>
        Solutions extérieures<br />et infrastructures
      </>
    ),
    description:
      "Isolation et protection acoustique adaptées aux ouvrages d'art et environnements extérieurs.",
    ctaLabel: "Solutions extérieures",
    ctaTo: "/batiment/solutions-exterieures",
  },
  {
    video: "/videos/hero-hotellerie.mp4",
    title: (
      <>
        Confort acoustique<br />pour l'hôtellerie
      </>
    ),
    description:
      "Améliorez l'expérience de vos clients avec des solutions discrètes et performantes.",
    ctaLabel: "Solutions commerce",
    ctaTo: "/sport/commerce/salons-evenements",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          if (!video.src || video.src === "") {
            video.src = slides[index].video;
          }
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });

    const nextIndex = (currentSlide + 1) % slides.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo && (!nextVideo.src || nextVideo.src === "")) {
      nextVideo.src = slides[nextIndex].video;
      nextVideo.preload = "auto";
    }
  }, [currentSlide]);

  const active = slides[currentSlide];

  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden -mt-20 pt-20">
      {/* Video Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide && !isTransitioning
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <video
            ref={(el) => { videoRefs.current[index] = el; }}
            src={index === 0 ? slide.video : undefined}
            preload={index === 0 ? "auto" : "none"}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Static Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1
              key={`title-${currentSlide}`}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 ease-out ${
                isTransitioning
                  ? "opacity-0 translate-y-6"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {active.title}
            </h1>
            <p
              key={`desc-${currentSlide}`}
              className={`text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl transition-all duration-700 ease-out delay-150 ${
                isTransitioning
                  ? "opacity-0 translate-y-6"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {active.description}
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-300 ${
                isTransitioning
                  ? "opacity-0 translate-y-6"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <Button
                key={`cta-${currentSlide}`}
                asChild
                size="lg"
                className="bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary rounded-full transition-all duration-300 group"
              >
                <Link href={active.ctaTo}>
                  {active.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary rounded-full transition-all duration-300"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
