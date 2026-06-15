import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { openCheckout } from "@/lib/checkout";

const ValueAnchorSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection animation="up">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              💰 Comparação de Valor
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-6">
              Quanto custa a segurança do seu bebê?
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="up" delay={150}>
          <div className="space-y-4 mb-8">
            <div className="bg-background rounded-2xl p-5 border border-border flex items-center justify-between">
              <span className="text-foreground font-medium">Consulta com nutricionista infantil</span>
              <span className="text-muted-foreground font-bold text-lg line-through">R$ 150–300</span>
            </div>
            <div className="bg-background rounded-2xl p-5 border border-border flex items-center justify-between">
              <span className="text-foreground font-medium">Curso online de introdução alimentar</span>
              <span className="text-muted-foreground font-bold text-lg line-through">R$ 197</span>
            </div>
            <div className="bg-background rounded-2xl p-5 border border-border flex items-center justify-between">
              <span className="text-foreground font-medium">Livro especializado</span>
              <span className="text-muted-foreground font-bold text-lg line-through">R$ 89</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="up" delay={300}>
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-muted-foreground font-medium mb-2">Com o App NutriBebê Pro você investe apenas</p>
            <div className="text-5xl font-black text-primary mb-2">R$ 29,90</div>
            <p className="text-foreground font-bold text-lg mb-6">
              🍕 Menos que uma pizza.
            </p>
            <button
              onClick={openCheckout}
              className="inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-xl hover:scale-105 transition-transform text-lg"
              style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
            >
              QUERO ACESSO IMEDIATO AO APP
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ValueAnchorSection;
