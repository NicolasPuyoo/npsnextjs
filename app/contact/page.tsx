"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import ExploreMore from "@/components/ExploreMore";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Hero image - using batiment image as contact background
import heroImage from "@/assets/categories/batiment.jpg";

const Contact = () => {
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast.success("Votre message a été envoyé avec succès !");
      setFormData({ nom: "", prenom: "", email: "", telephone: "", projectType: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage.src}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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

export default Contact;