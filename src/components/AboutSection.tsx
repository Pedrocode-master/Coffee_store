import { motion } from "framer-motion";
import menuBg from "@/assets/menu-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
            <img
              src={menuBg}
              alt="Café e croissants artesanais"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-2">Nossa História</p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Tradição e paixão em cada xícara
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Desde 2010, a Café & Sabor é referência em cafés especiais. Trabalhamos diretamente com
                produtores de Minas Gerais e do Sul de Minas para trazer os melhores grãos até a sua mesa.
              </p>
              <p>
                Nosso espaço foi pensado para ser uma extensão da sua casa — acolhedor, tranquilo e com
                aquele aroma irresistível de café fresco que acompanha boas conversas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "15+", label: "Anos" },
                { value: "50k+", label: "Clientes" },
                { value: "20+", label: "Blends" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
