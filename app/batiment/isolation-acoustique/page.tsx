"use client";

import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import ProductCard from "@/components/ProductCard";
import VibraProductSchema from "@/components/VibraProductSchema";
import { batimentProducts } from "@/data/products";
import ExploreMore from "@/components/ExploreMore";
import { motion } from "framer-motion";
import {
  Settings2,
  LineChart,
  Waves,
  Building2,
  Cog,
  Layers,
  Droplets,
  Footprints,
} from "lucide-react";
import isolationAcoustique from "@/assets/batiment/isolation-acoustique.jpg";

// 3 atouts techniques mis en avant. Repris du discours technique Kraiburg pour
// fiabilité des arguments, mais formulés en ton NPS pour parler à un BET / architecte.
const technicalStrengths = [
  {
    icon: Settings2,
    title: "Adaptation individuelle aux charges",
    description:
      "Densités, duretés et géométries multiples : chaque tapis de désolidarisation est calculé selon le poids et la nature de la pièce de construction à isoler.",
  },
  {
    icon: LineChart,
    title: "Calcul d'ingénierie",
    description:
      "Dimensionnement basé sur les fréquences d'excitation réelles et les charges statiques/dynamiques du projet. Nous accompagnons la phase d'études.",
  },
  {
    icon: Waves,
    title: "Optimisation des fréquences propres",
    description:
      "Le tapis est ajusté pour que sa fréquence propre absorbe exactement les fréquences d'excitation de la source (machine, structure, équipement).",
  },
];

// Applications concrètes : à quoi sert vraiment cette gamme dans un projet bâtiment / industrie.
// Aide le visiteur (BET, archi, maître d'œuvre) à se projeter immédiatement.
const concreteApplications = [
  {
    icon: Cog,
    title: "Fondations de machines lourdes",
    description: "Désolidarisation sous équipements industriels, presses, compresseurs, groupes électrogènes.",
  },
  {
    icon: Layers,
    title: "Désolidarisation de planchers et structures",
    description: "Planchers grands formats, dalles flottantes, isolation complète de bâtiments contre les transmissions vibratoires.",
  },
  {
    icon: Footprints,
    title: "Cages d'escalier et structures porteuses",
    description: "Désolidarisation des cages d'escalier, pieds de mur, points d'appui sensibles.",
  },
  {
    icon: Droplets,
    title: "Environnements humides ou immergés",
    description: "VIBRADYN (polyuréthane cellules fermées) reste performant en milieu humide ou immergé, là où d'autres élastomères se dégradent.",
  },
  {
    icon: Building2,
    title: "Isolation phonique complète de bâtiments",
    description: "Désolidarisation totale d'un bâtiment pour les projets sensibles (résidentiel haut de gamme, hôtellerie, studios d'enregistrement).",
  },
];

const IsolationAcoustique = () => {
  // Trois familles présentées séparément. Le visiteur comprend immédiatement la logique
  // de la gamme (caoutchouc recyclé / mousse PU cellulaire / PU cellules fermées) au lieu
  // de voir 9 produits empilés sans hiérarchie.
  const allInCategory = batimentProducts.filter(
    (p) => p.subcategory === "isolation-acoustique-antivibratoire",
  );
  const vibraProducts = allInCategory.filter((p) => p.slug.startsWith("damtec-vibra-"));
  const ultragymProducts = allInCategory.filter((p) => p.slug === "vibrafoam");
  const vibradynProducts = allInCategory.filter((p) => p.slug === "vibradyn");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BackButton
            label="Retour Bâtiment"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Isolation acoustique et anti-vibratoire
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Trois familles complémentaires pour répondre à toutes les configurations de
                désolidarisation, des micro-vibrations sous équipement aux fondations de
                machines extrêmement lourdes.
              </p>
              <p className="text-lg text-muted-foreground">
                Caoutchouc recyclé haute densité, mousse polyuréthane cellulaire ou polyuréthane à
                cellules fermées : à chaque charge et à chaque environnement, sa solution adaptée.
              </p>
            </div>
            <div className="aspect-square overflow-hidden rounded-3xl">
              <img
                src={isolationAcoustique.src}
                alt="Isolation acoustique et anti-vibratoire"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atouts techniques — 3 cards */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Atouts techniques
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Une gamme dimensionnée sur mesure
            </h2>
            <p className="text-muted-foreground">
              Nos solutions anti-vibratoires ne sont pas standardisées : elles s'adaptent à votre
              projet par calcul d'ingénierie, pas par catalogue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalStrengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications concrètes — 5 cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Applications
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Où nos produits sont mis en œuvre
            </h2>
            <p className="text-muted-foreground">
              De la machine industrielle au studio d'enregistrement : 5 cas d'usage concrets pour
              vous projeter dans votre propre projet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {concreteApplications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <app.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{app.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparateur de gamme VIBRA — existant, déjà très utile */}
      <VibraProductSchema />

      {/* Produits — sectionnés par famille */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Catalogue
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nos {allInCategory.length} produits anti-vibratoires
            </h2>
            <p className="text-muted-foreground">
              Trois familles complémentaires. Selon la charge, l'environnement et la fréquence
              cible, on combine ou on choisit la plus adaptée.
            </p>
          </motion.div>

          {/* DAMTEC VIBRA */}
          {vibraProducts.length > 0 && (
            <div className="mb-12">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  DAMTEC® VIBRA — caoutchouc recyclé
                </h3>
                <p className="text-sm text-muted-foreground max-w-3xl">
                  Sept densités graduées de 30 à 1500 pour couvrir toutes les plages de charge
                  statique, du léger anti-vibration à la fondation de machine très lourde.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {vibraProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* ULTRAGYM */}
          {ultragymProducts.length > 0 && (
            <div className="mb-12">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  ULTRAGYM — mousse polyuréthane cellulaire
                </h3>
                <p className="text-sm text-muted-foreground max-w-3xl">
                  Élastomère cellulaire en polyéther-uréthane spécial. 13 duretés disponibles
                  couvrant la plage 0,01 à 1,9 N/mm². Particulièrement adapté à la protection
                  contre les chocs et les vibrations à haute fréquence.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {ultragymProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* VIBRADYN */}
          {vibradynProducts.length > 0 && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  VIBRADYN — polyuréthane à cellules fermées
                </h3>
                <p className="text-sm text-muted-foreground max-w-3xl">
                  Fonctionne comme un ressort technique sans amortissement, idéal pour les milieux
                  humides ou immergés et l'isolation complète de bâtiments. Plage de charge 0,075
                  à 1,5 N/mm².
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {vibradynProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ExploreMore currentPath="/batiment/isolation-acoustique" />
    </Layout>
  );
};

export default IsolationAcoustique;
