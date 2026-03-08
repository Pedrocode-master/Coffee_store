import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Clock } from "lucide-react";
import { toast } from "sonner";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const ReservationSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reserva enviada com sucesso! Entraremos em contato para confirmar.");
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "" });
  };

  return (
    <section id="reservas" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-2">Reservas</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Reserve sua mesa
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Garanta seu lugar e desfrute de uma experiência especial.
          </p>
        </motion.div>

        <motion.form
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-background rounded-2xl p-8 md:p-10 shadow-lg border border-border"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="(11) 99999-0000"
              />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-1.5">
                <Users className="w-4 h-4 inline mr-1" />
                Pessoas
              </label>
              <select
                id="guests"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "pessoa" : "pessoas"}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1.5">
                <CalendarDays className="w-4 h-4 inline mr-1" />
                Data
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-foreground mb-1.5">
                <Clock className="w-4 h-4 inline mr-1" />
                Horário
              </label>
              <input
                id="time"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Observações</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Alguma preferência ou necessidade especial?"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Confirmar Reserva
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
