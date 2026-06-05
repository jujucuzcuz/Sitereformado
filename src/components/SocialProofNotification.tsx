import { useState, useEffect } from "react";
import { ShoppingCart, Baby, Sparkles, Salad } from "lucide-react";

const notifications = [
  { name: "Ana Paula", city: "São Paulo", action: "acabou de comprar", icon: ShoppingCart },
  { name: "Mariana Silva", city: "Curitiba", action: "adquiriu o App", icon: Baby },
  { name: "Beatriz Oliveira", city: "Salvador", action: "ativou o acesso Pro", icon: Sparkles },
  { name: "Juliana Costa", city: "Rio de Janeiro", action: "acabou de comprar", icon: Salad },
  { name: "Fernanda Santos", city: "Belo Horizonte", action: "adquiriu o App", icon: Baby },
  { name: "Camila Rodrigues", city: "Porto Alegre", action: "acabou de comprar", icon: ShoppingCart },
  { name: "Larissa Almeida", city: "Brasília", action: "ativou o acesso Pro", icon: Sparkles },
  { name: "Patrícia Lima", city: "Recife", action: "adquiriu o App", icon: Baby },
  { name: "Renata Souza", city: "Fortaleza", action: "acabou de comprar", icon: ShoppingCart },
  { name: "Carolina Pereira", city: "Florianópolis", action: "adquiriu o App", icon: Baby },
  { name: "Amanda Ferreira", city: "Goiânia", action: "acabou de comprar", icon: Salad },
  { name: "Gabriela Martins", city: "Manaus", action: "ativou o acesso Pro", icon: Sparkles },
];

const SocialProofNotification = () => {
  const [currentNotification, setCurrentNotification] = useState<typeof notifications[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotification(notifications[randomIndex]);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Then show every 15 seconds
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification) return null;

  const IconComponent = currentNotification.icon;

  return (
    <div
      className={`fixed bottom-20 md:bottom-4 left-4 z-40 max-w-xs transform transition-all duration-500 ease-out ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-lg border border-border">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">
            {currentNotification.name}
          </p>
          <p className="text-xs text-muted-foreground">
            de {currentNotification.city} {currentNotification.action}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
