import veggiesCut from "@/assets/veggies-cut.jpg";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    emoji: "🛡️",
    title: "Cortes Seguros",
    description: "Fotos passo a passo para eliminar o risco de engasgos.",
  },
  {
    emoji: "🍲",
    title: "50 Receitas Nutritivas",
    description: "Pratos que os bebês amam, prontos em 15 minutos.",
  },
  {
    emoji: "✅",
    title: "Lista Proibida",
    description: "Saiba exatamente o que evitar antes de 1 ano.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container">
        <AnimatedSection animation="up">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tudo o que você precisa para uma{" "}
              <span className="text-primary">Introdução Alimentar tranquila</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} animation="up" delay={index * 100}>
              <div className="card-benefit flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">{benefit.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bloco: Não é curso */}
        <AnimatedSection animation="up" delay={400}>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 max-w-3xl mx-auto mb-12 lg:mb-16">
            <p className="text-sm font-bold text-foreground mb-2">
              📱 Aplicativo Prático (Acesso Vitalício — Sem Mensalidades)
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Isso <strong className="text-foreground">NÃO é um curso</strong> com videoaulas longas que você não tem tempo de assistir. O NutriBebê Pro é um aplicativo direto ao ponto: você abre, escolhe a idade do seu bebê e vê na hora o cardápio, os cortes seguros e as receitas do dia. Pago uma única vez, seu para sempre.
            </p>
          </div>
        </AnimatedSection>

        {/* Veggies Image */}
        <AnimatedSection animation="scale">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl" />
            <img
              src={veggiesCut}
              alt="Legumes cortados em palitos seguros para bebês"
              className="relative w-full rounded-3xl shadow-card object-cover aspect-video"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BenefitsSection;
