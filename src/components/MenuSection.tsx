import { motion } from "framer-motion";
import { Coffee, Croissant, IceCreamCone, Leaf } from "lucide-react";

const categories = [
  {
    icon: Coffee,
    title: "Cafés Especiais",
    items: [
      { name: "Espresso", desc: "Puro e intenso", price: "R$ 8,00" },
      { name: "Cappuccino Artesanal", desc: "Com canela e cacau", price: "R$ 14,00" },
      { name: "Latte Caramelo", desc: "Suave e adocicado", price: "R$ 16,00" },
      { name: "Café Coado Especial", desc: "Grãos single origin", price: "R$ 12,00" },
    ],
  },
  {
    icon: Leaf,
    title: "Chás & Infusões",
    items: [
      { name: "Chá Verde com Hortelã", desc: "Refrescante e leve", price: "R$ 10,00" },
      { name: "Chai Latte", desc: "Especiarias indianas", price: "R$ 14,00" },
      { name: "Camomila com Mel", desc: "Calmante natural", price: "R$ 9,00" },
    ],
  },
  {
    icon: Croissant,
    title: "Pães & Doces",
    items: [
      { name: "Croissant Francês", desc: "Crocante e amanteigado", price: "R$ 12,00" },
      { name: "Bolo de Cenoura", desc: "Cobertura de chocolate", price: "R$ 10,00" },
      { name: "Pão de Queijo Especial", desc: "Receita mineira", price: "R$ 8,00" },
      { name: "Torta de Limão", desc: "Base crocante", price: "R$ 14,00" },
    ],
  },
  {
    icon: IceCreamCone,
    title: "Bebidas Geladas",
    items: [
      { name: "Cold Brew", desc: "12h de infusão", price: "R$ 15,00" },
      { name: "Frappuccino Mocha", desc: "Cremoso e gelado", price: "R$ 18,00" },
      { name: "Suco Natural", desc: "Frutas da estação", price: "R$ 12,00" },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const MenuSection = () => {
  return (
    <section id="cardapio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-2">Nosso Cardápio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Sabores para cada momento
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-baseline justify-between gap-2">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="text-accent font-semibold whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
