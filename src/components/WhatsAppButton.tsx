import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5547991158519";
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre o NutriBebê."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact");
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="floating-button bottom-24 right-4 md:bottom-6 md:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C]"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
