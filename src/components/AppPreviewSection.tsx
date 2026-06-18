import { useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import screenCardapio from "@/assets/app-screen-cardapio.png";
import screenPrato from "@/assets/app-screen-prato.png";
import screenSemana from "@/assets/app-screen-semana.png";
import screenLista from "@/assets/app-screen-lista.png";
import screenVideos from "@/assets/app-screen-videos.png";
import screenRotina from "@/assets/app-screen-rotina.png";
import screenNutris from "@/assets/app-screen-nutris.png";

const screens = [
  { title: "Cardápio do Dia", description: "Saiba exatamente o que oferecer em cada refeição", image: screenCardapio },
  { title: "Monte o Prato", description: "Montador de prato saudável por grupo alimentar", image: screenPrato },
  { title: "Calendário Semanal", description: "Planejamento completo da semana", image: screenSemana },
  { title: "Lista de Compras", description: "Organize tudo o que o bebê precisa", image: screenLista },
  { title: "Guia em Vídeo", description: "Vídeos práticos sobre cortes, receitas e mais", image: screenVideos },
  { title: "Rotina Sem Caos", description: "Dicas reais para simplificar a introdução alimentar", image: screenRotina },
  { title: "Encontrar Nutri", description: "Nutricionistas especializados perto de você", image: screenNutris },
];

const AppPreviewSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? screens.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screens.length - 1 ? 0 : c + 1));

  const screen = screens[current];

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container px-4 max-w-5xl mx-auto">
        <AnimatedSection animation="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-5 py-2 rounded-full mb-4">
              <Smartphone className="w-5 h-5" />
              <span>CONHEÇA O APP</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-3">
              Veja o app <span className="text-primary">por dentro</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Um app completo, bonito e fácil de usar — feito por nutricionistas para mães reais.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale">
          <div className="relative max-w-[260px] sm:max-w-lg lg:max-w-xl mx-auto">
            {/* Phone/Tablet frame */}
            <div className="relative bg-foreground rounded-[2.5rem] sm:rounded-[1.5rem] p-3 sm:p-2.5 shadow-2xl">
              <div className="bg-card rounded-[2rem] sm:rounded-[1.2rem] overflow-hidden">
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Caption */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold text-foreground">{screen.title}</h3>
              <p className="text-sm text-muted-foreground">{screen.description}</p>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 sm:-translate-x-14 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 sm:translate-x-14 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AppPreviewSection;
