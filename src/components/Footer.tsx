import { Coffee, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold mb-4">
              <Coffee className="w-5 h-5 text-accent" />
              Café & Sabor
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Cafés especiais, doces artesanais e um ambiente acolhedor para seus melhores momentos.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="#cardapio" className="hover:text-accent transition-colors">Cardápio</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#reservas" className="hover:text-accent transition-colors">Reservas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Café & Sabor. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
