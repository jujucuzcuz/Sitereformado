import { ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { openCheckout } from "@/lib/checkout";

export const GuaranteeSection = () => {
  return (
    <section className="bg-secondary py-16 border-t">
      <div className="container px-4 max-w-4xl mx-auto">
        {/* Guarantee Box - Enhanced */}
        <div className="bg-card border-2 border-primary/30 rounded-3xl p-8 md:p-10 text-center shadow-lg mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
          <ShieldCheck className="w-20 h-20 text-primary mx-auto mb-5" />
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">
            Garantia Incondicional de 30 Dias
          </h2>
          <p className="text-muted-foreground mb-2 text-lg leading-relaxed max-w-xl mx-auto">
            Se você não ficar <strong className="text-foreground">100% satisfeita</strong> e segura na introdução alimentar, devolvemos{" "}
            <strong className="text-foreground">todo o seu dinheiro na hora</strong>.
          </p>
          <p className="text-foreground font-bold text-lg mb-8">
            O risco é todo nosso. A decisão é toda sua.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-bold text-foreground">
            <div className="flex items-center justify-center gap-2 bg-primary/5 rounded-xl py-3 px-4">
              <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" /> Sem perguntas
            </div>
            <div className="flex items-center justify-center gap-2 bg-primary/5 rounded-xl py-3 px-4">
              <Clock className="text-primary w-5 h-5 flex-shrink-0" /> Reembolso em 24h
            </div>
            <div className="flex items-center justify-center gap-2 bg-primary/5 rounded-xl py-3 px-4">
              <ShieldCheck className="text-primary w-5 h-5 flex-shrink-0" /> Compra 100% Segura
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-black mb-6 text-foreground">
            Pronta para começar a introdução alimentar com segurança?
          </h3>
          <button
            onClick={openCheckout}
            className="animate-cta-pulse w-full max-w-md text-cta-foreground font-black py-5 px-8 rounded-2xl hover:scale-105 transition-transform text-lg inline-flex items-center justify-center gap-2 mx-auto"
            style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
          >
            QUERO PROTEGER MEU BEBÊ AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-4 text-xs text-muted-foreground italic">
            🔒 Compra segura · Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
