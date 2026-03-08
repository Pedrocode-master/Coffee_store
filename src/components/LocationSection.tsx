import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-2">Onde Estamos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Venha nos visitar
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[350px]">
              <iframe
                title="Localização Café & Sabor"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976!2d-46.6546!3d-23.5617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQyLjEiUyA0NsKwMzknMTYuNiJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">Rua Augusta, 1234 — Consolação<br />São Paulo, SP — 01304-001</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground">
                  Seg — Sex: 7h às 21h<br />
                  Sáb — Dom: 8h às 20h
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Contato</h3>
                <p className="text-muted-foreground">
                  (11) 98765-4321<br />
                  contato@cafeesabor.com.br
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
