"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import ExploreMore from "@/components/ExploreMore";
import { toast } from "sonner";
import { findProductBySlug } from "@/data/products";
import { trackEvent } from "@/lib/tracking";

// Hero image - using batiment image as contact background
import heroImage from "@/assets/categories/batiment.jpg";

// Map URL category param to projectType select option
const categoryToProjectType: Record<string, string> = {
  batiment: "batiment",
  sport: "sport",
  fitness: "sport",
  hotel: "hotel-commerce",
  "hotel-commerce": "hotel-commerce",
  commerce: "hotel-commerce",
  bricolage: "bricolage",
};

const ContactInner = () => {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    projectType: "",
    message: "",
  });

  // Pre-fill from URL params:
  //   ?produit=damtec-estra  → product name added to message
  //   ?type=batiment         → projectType select pre-selected
  // Both can be passed together from a "Demander un devis" CTA on
  // a product fiche to remove all friction from the user.
  useEffect(() => {
    const produitSlug = searchParams.get("produit");
    const typeParam = searchParams.get("type");
    let nextProjectType = "";
    let nextMessage = "";

    if (typeParam && categoryToProjectType[typeParam]) {
      nextProjectType = categoryToProjectType[typeParam];
    }

    if (produitSlug) {
      const product = findProductBySlug(produitSlug);
      if (product) {
        nextMessage = `Bonjour,\n\nJe souhaite un devis pour le produit ${product.name}.\n\nDétails du projet : `;
        if (!nextProjectType && product.category) {
          nextProjectType = categoryToProjectType[product.category] || "";
        }
      }
    }

    if (nextProjectType || nextMessage) {
      setFormData((prev) => ({
        ...prev,
        projectType: nextProjectType || prev.projectType,
        message: nextMessage || prev.message,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Lazy-load Supabase client only on submit (saves ~130 KB on first paint)
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      // Conversion principale tracking → Google Ads + GA4 via GTM.
      trackEvent("submit_quote", {
        form_source: "contact_page",
        project_type: formData.projectType || "non_specifie",
        value: formData.projectType === "batiment" ? 3000 : formData.projectType === "sport" ? 2000 : 500,
        currency: "EUR",
      });

      toast.success("Votre message a été envoyé avec succès !");
      setFormData({ nom: "", prenom: "", email: "", telephone: "", projectType: "", message: "" });
    } catch (error: unknown) {
      console.error("Error sending message:", error);
      // Fallback : if Supabase is unreachable, propose mailto so the user is never stuck
      const subject = encodeURIComponent(`Demande NPS Acoustique — ${formData.projectType || "à préciser"}`);
      const body = encodeURIComponent(
        `Bonjour,\n\nNom : ${formData.nom}\nPrénom : ${formData.prenom}\nEmail : ${formData.email}\nTéléphone : ${formData.telephone}\nType de projet : ${formData.projectType}\n\nMessage :\n${formData.message}`,
      );
      toast.error(
        "L'envoi automatique a échoué. Cliquez ici pour ouvrir votre messagerie.",
        {
          action: {
            label: "Ouvrir l'email",
            onClick: () => {
              window.location.href = `mailto:contact@nps-france.com?subject=${subject}&body=${body}`;
            },
          },
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Contact"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Une question, un projet ? Notre équipe est à votre disposition pour vous accompagner dans vos solutions acoustiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {/* Phone Card */}
            <div className="bg-card p-8 lg:p-10 rounded-3xl shadow-card border border-border hover:shadow-soft transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground text-2xl font-bold">T</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-muted-foreground mb-1">Téléphone</h4>
                  <a 
                    href="tel:0558775589" 
                    className="text-2xl lg:text-3xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    05 58 77 55 89
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-card p-8 lg:p-10 rounded-3xl shadow-card border border-border hover:shadow-soft transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground text-2xl font-bold">@</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-muted-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:contact@nps-france.com" 
                    className="text-2xl lg:text-3xl font-bold text-foreground hover:text-primary transition-colors break-all"
                  >
                    contact@nps-france.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-foreground mb-4">Envoyez-nous un message</h2>
              <p className="text-muted-foreground">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>

            <div className="bg-card p-8 md:p-10 lg:p-12 rounded-3xl shadow-card border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-foreground mb-3">Nom *</label>
                    <Input 
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom" 
                      required 
                      className="h-14 text-lg rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-foreground mb-3">Prénom *</label>
                    <Input 
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Votre prénom" 
                      required 
                      className="h-14 text-lg rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium text-foreground mb-3">Email *</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.fr" 
                      required 
                      className="h-14 text-lg rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-foreground mb-3">Téléphone</label>
                    <Input 
                      type="tel" 
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="05 58 77 55 89" 
                      className="h-14 text-lg rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-base font-medium text-foreground mb-3" htmlFor="projectType">
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full h-14 text-lg rounded-xl border border-border bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">— Choisir (facultatif) —</option>
                    <option value="batiment">Bâtiment / Industrie (architecte, BET, entrepreneur)</option>
                    <option value="sport">Sport / Fitness (gym, salle, terrain)</option>
                    <option value="hotel-commerce">Hôtel / Commerce / Collectivité</option>
                    <option value="bricolage">Bricolage / Particulier</option>
                    <option value="autre">Autre / je ne sais pas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-base font-medium text-foreground mb-3">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet : surface, contraintes, performance acoustique recherchée…"
                    rows={6}
                    required
                    className="text-lg rounded-xl resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold rounded-full shadow-soft hover:scale-[1.02] transition-transform" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ExploreMore currentPath="/contact" />
    </Layout>
  );
};

// useSearchParams() requires a Suspense boundary in App Router static rendering.
const Contact = () => (
  <Suspense fallback={null}>
    <ContactInner />
  </Suspense>
);

export default Contact;