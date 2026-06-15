import { ArrowRight, Shield, Salad, Smartphone } from "lucide-react";
import heroMockup from "@/assets/hero-mockup-baby.png";
import { openCheckout } from "@/lib/checkout";

const securityFeatures = [
  { icon: Shield, label: "Método Seguro (BLW)" },
  { icon: Salad, label: "Cardápios Nutritivos" },
  { icon: Smartphone, label: "Acesso Offline" },
];

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0">
              {/* Badge */}
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                👶 +2.500 mães já confiam no NutriBebê
              </span>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black mb-5 text-foreground leading-[1.15]">
                O Guia Completo de Introdução Alimentar na Palma da Sua Mão
              </h1>

              <p className="text-lg text-muted-foreground mb-6 font-medium leading-relaxed">
                Garanta mais de 100 receitas saudáveis, menus diários e a segurança que você precisa para o seu bebê comer bem, direto no seu celular.
              </p>

              {/* Security Icons Grid */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {securityFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1.5 bg-card rounded-2xl p-3 text-center"
                    style={{ boxShadow: "var(--shadow-soft)" }}
                  >
                    <feat.icon className="w-6 h-6 text-primary" />
                    <span className="text-xs font-bold text-foreground leading-tight">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pulsing CTA Button */}
              <button
                onClick={openCheckout}
                className="animate-cta-pulse inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-cta-foreground font-black rounded-xl hover:scale-105 transition-transform text-lg"
                style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
              >
                QUERO ACESSO IMEDIATO AO APP
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              {/* Scarcity + Value */}
              <p className="mt-4 text-sm text-foreground font-semibold">
                🔥 Oferta válida apenas para os próximos 50 acessos{" "}
                <span className="text-primary">(Acesso Vitalício)</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground italic">
                🔒 Compra segura · Acesso imediato · Garantia de 30 dias
              </p>

              {/* Bloco: Não é curso */}
              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <p className="text-sm font-bold text-foreground mb-2">
                  📱 Aplicativo Prático (Acesso Vitalício — Sem Mensalidades)
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Isso <strong className="text-foreground">NÃO é um curso</strong> com videoaulas longas que você não tem tempo de assistir. O NutriBebê Pro é um aplicativo direto ao ponto: você abre, escolhe a idade do seu bebê e vê na hora o cardápio, os cortes seguros e as receitas do dia. Pago uma única vez, seu para sempre.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={heroMockup}
              alt="Aplicativo NutriBebê Pro no celular com receitas saudáveis para bebês"
              className="w-full max-w-[420px] lg:max-w-[580px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
