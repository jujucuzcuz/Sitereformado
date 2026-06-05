import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      q: "Como recebo o acesso?",
      a: "O acesso é imediato! Assim que o pagamento for aprovado, você recebe um e-mail da Kiwify com as instruções para acessar o app.",
    },
    {
      q: "Tem mensalidade?",
      a: "Não! O NutriBebê Pro é de pagamento único. Você paga apenas R$ 29,90 e tem acesso vitalício sem novas cobranças.",
    },
    {
      q: "Funciona em iPhone e Android?",
      a: "Sim! O app é compatível com todos os modelos de iPhone e Android, além de tablets e computadores.",
    },
    {
      q: "O que tem no app?",
      a: "Você encontrará o Guia Visual de Cortes Seguros (passo a passo), cardápios completos para cada fase e receitas exclusivas.",
    },
    {
      q: "Tem garantia?",
      a: "Com certeza! Oferecemos 30 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.",
    },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-2 text-foreground">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground">Tudo o que você precisa saber sobre o NutriBebê Pro</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white border rounded-xl px-4 shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
