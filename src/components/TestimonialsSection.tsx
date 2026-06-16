import { Star } from "lucide-react";
import testimonialCamila from "@/assets/testimonial-camila.jpg";
import testimonialFernanda from "@/assets/testimonial-fernanda.jpg";
import testimonialJuliana from "@/assets/testimonial-juliana.jpg";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Camila Santos",
    babyAge: "Mãe da Sofia, 11 meses",
    before: "Eu tinha pavor de oferecer comida sólida. Ficava tremendo só de pensar no engasgo.",
    after: "Hoje a Sofia come banana, cenoura e até frango desfiado sozinha. Eu me sinto segura e tranquila!",
    image: testimonialCamila,
  },
  {
    name: "Fernanda Oliveira",
    babyAge: "Mãe do Pedro, 9 meses",
    before: "Eu não sabia nem por onde começar. Pesquisava no Google e ficava mais confusa ainda.",
    after: "Com o app, em 15 minutos preparo uma refeição nutritiva. O Pedro ama o bolinho de legumes!",
    image: testimonialFernanda,
  },
  {
    name: "Juliana Costa",
    babyAge: "Mãe da Luna, 8 meses",
    before: "Dava só papinha de potinho porque tinha medo de fazer errado com comida de verdade.",
    after: "Agora a Luna come comida caseira todos os dias. A lista de alimentos proibidos me salvou!",
    image: testimonialJuliana,
  },
  {
    name: "Mariana Rocha",
    babyAge: "Mãe do Léo, 7 meses",
    before: "Eu ficava horas na cozinha tentando planejar o que fazer e acabava jogando muita comida fora porque o Léo não aceitava. Ficava frustrada e exausta.",
    after: "O cronograma passo a passo mudou tudo. Em minutos eu já sei exatamente o que colocar no prato dele de forma nutritiva. O Léo limpou o prato hoje!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Beatriz Lima",
    babyAge: "Mãe do Arthur, 6 meses",
    before: "Tinha pânico de dar pedaços inteiros e o Arthur engasgar. Só de pensar meu coração disparava, então eu vivia presa nas papinhas batidas.",
    after: "O aplicativo me deu a segurança que eu precisava. Aprendi os cortes corretos e seguros. Ver ele pegando os alimentos sozinho e comendo sem medo é um alívio enorme!",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Amanda Vieira",
    babyAge: "Mãe da Manuela, 10 meses",
    before: "Todo mundo dava um palpite diferente: minha mãe dizia uma coisa, a sogra outra. Eu me sentia perdida e com medo de estar alimentando minha filha errado.",
    after: "Agora eu sigo o NutriBebê Pro e tenho uma direção clara e profissional. Não sigo mais palpites, sigo o método que funciona. Minha filha está super saudável!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="up">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              💬 Histórias Reais de Transformação
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              De medo a confiança total
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Veja como outras mães superaram o medo da introdução alimentar
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <AnimatedSection key={index} animation="up" delay={index * 150}>
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border h-full flex flex-col">
                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>

                <div className="mb-4 bg-destructive/5 rounded-xl p-4 border border-destructive/10">
                  <p className="text-xs font-bold text-destructive uppercase tracking-wider mb-1">Antes</p>
                  <p className="text-sm text-foreground italic">"{t.before}"</p>
                </div>

                <div className="mb-6 bg-primary/5 rounded-xl p-4 border border-primary/10">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Depois</p>
                  <p className="text-sm text-foreground italic">"{t.after}"</p>
                </div>

                <div className="mt-auto border-t border-border pt-4 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.babyAge}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
