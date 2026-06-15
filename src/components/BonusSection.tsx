import { Gift, Scissors, CalendarDays, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { openCheckout } from "@/lib/checkout";

const bonuses = [
  {
    icon: Scissors,
    title: "Guia de Cortes Seguros (PDF)",
    description:
      "Manual visual de como oferecer cada alimento com segurança para evitar engasgos.",
    value: "R$ 47,00",
  },
  {
    icon: CalendarDays,
    title: "Planner Semanal de Refeições",
    description:
      "Tabela para organizar o menu do bebê e economizar tempo na cozinha.",
    value: "R$ 67,00",
  },
  {
    icon: BookOpen,
    title: "Livro Digital: 50 Receitas de 15 Min",
    description:
      "Pratos nutritivos e ultra rápidos para mães que não têm tempo a perder.",
    value: "R$ 83,00",
  },
];

const BonusSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-4 max-w-5xl mx-auto">
        <AnimatedSection animation="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-5 py-2 rounded-full mb-4">
              <Gift className="w-5 h-5" />
              <span>BÔNUS EXCLUSIVOS</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">
              Leve tudo isso{" "}
              <span className="text-primary">de presente</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ao garantir seu acesso ao App NutriBebê Pro hoje, você recebe
              estes 3 bônus sem pagar nada a mais.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <AnimatedSection key={index} animation="up" delay={index * 120}>
              <div className="card-benefit flex flex-col items-center text-center h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-bl-xl">
                  GRÁTIS
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                  <bonus.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {bonus.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {bonus.description}
                </p>
                <p className="mt-auto">
                  <span className="line-through text-muted-foreground text-sm">
                    {bonus.value}
                  </span>
                  <span className="ml-2 text-primary font-black text-lg">
                    R$ 0,00
                  </span>
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale">
          <div className="text-center bg-card rounded-3xl p-8 shadow-card max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm mb-1">
              Valor total dos bônus
            </p>
            <p className="text-2xl font-black text-foreground line-through mb-1">
              R$ 197,00
            </p>
            <p className="text-4xl font-black text-primary mb-4">
              GRÁTIS
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Apenas para quem finalizar a inscrição agora!
            </p>
            <button
              onClick={openCheckout}
              className="inline-block w-full max-w-md text-white font-black py-5 px-10 rounded-2xl hover:scale-105 transition-transform text-xl"
              style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-cta)' }}
            >
              QUERO ACESSO IMEDIATO AO APP
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BonusSection;
