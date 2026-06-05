import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ValueAnchorSection from "@/components/ValueAnchorSection";
import FAQSection from "@/components/FAQSection";
import OfferSection from "@/components/OfferSection";
import BonusSection from "@/components/BonusSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import SocialProofNotification from "@/components/SocialProofNotification";
import StickyHeader from "@/components/StickyHeader";
import MobileStickyBuy from "@/components/MobileStickyBuy";

const Index = () => {
  useEffect(() => {
    // IMPORTANTE: preservar case do fbclid -> NÃO usar toLowerCase nem transformações.
    const rawSearch = window.location.search.startsWith("?")
      ? window.location.search.slice(1)
      : window.location.search;

    // Parse manual para preservar exatamente o valor original do fbclid (case-sensitive)
    let rawFbclid = "";
    rawSearch.split("&").forEach((pair) => {
      const eqIdx = pair.indexOf("=");
      if (eqIdx === -1) return;
      const k = decodeURIComponent(pair.slice(0, eqIdx));
      const v = pair.slice(eqIdx + 1); // sem decodeURIComponent para não alterar
      if (k === "fbclid" && v) rawFbclid = v;
    });

    const params = new URLSearchParams(rawSearch);

    // 1. PERSISTÊNCIA DE UTMs (sessionStorage + localStorage)
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src"];
    const savedParams: Record<string, string> = {};

    utmKeys.forEach((key) => {
      const val = params.get(key);
      if (val) {
        sessionStorage.setItem(`nb_${key}`, val);
        localStorage.setItem(`nb_${key}`, val);
      }
      savedParams[key] = sessionStorage.getItem(`nb_${key}`) || localStorage.getItem(`nb_${key}`) || "";
    });

    // 1b. CAPTURA fbclid -> fbc (preservando case original, sem truncar)
    if (rawFbclid) {
      const fbc = `fb.1.${Date.now()}.${rawFbclid}`;
      localStorage.setItem("nb_fbc", fbc);
      // grava cookie _fbc para o Pixel reaproveitar
      document.cookie = `_fbc=${fbc}; path=/; max-age=${60 * 60 * 24 * 90}`;
    }

    // 2. META PIXEL - PageView
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView", {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }


    // 3. SCROLL ENGAGEMENT - ViewContent ao atingir 50%
    let viewContentFired = false;
    const handleScroll = () => {
      if (viewContentFired) return;
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent >= 0.5) {
        viewContentFired = true;
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "ViewContent", {
            value: 29.90,
            currency: "BRL",
            content_name: "NutriBebê Pro",
          });
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 4. CARIMBAR UTMs NOS LINKS
    const carimbarBotoes = () => {
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        if (link.href.includes("pay.kiwify.com.br") || link.href.includes("kiwify.com.br") || link.href.includes("wa.me")) {
          try {
            const url = new URL(link.href);
            utmKeys.forEach((key) => {
              const val = savedParams[key];
              if (val) {
                url.searchParams.set(key, val);
              }
            });
            link.href = url.toString();
          } catch (e) {
            const cleanParams = utmKeys
              .filter((key) => savedParams[key])
              .map((key) => `${key}=${encodeURIComponent(savedParams[key])}`)
              .join("&");
            if (cleanParams) {
              const connector = link.href.includes("?") ? "&" : "?";
              link.href += `${connector}${cleanParams}`;
            }
          }
        }
      });
    };

    // 5. CLICK HANDLER - Pixel ClickToCheckout (sem enviar ao Supabase)
    const handleGlobalClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button");
      if (el) {
        const text = el.textContent?.toLowerCase() || "";
        const href = (el as HTMLAnchorElement).href || "";
        const isCheckout = href.includes("kiwify") || text.includes("comprar") || text.includes("acesso") || text.includes("proteger") || text.includes("quero");

        if (isCheckout && typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("trackCustom", "ClickToCheckout", { 
            value: 29.90, 
            currency: "BRL",
            button_text: text 
          });
        }
      }
    };

    carimbarBotoes();
    setTimeout(carimbarBotoes, 2000);
    window.addEventListener("click", handleGlobalClick);

    // 6. LEAD QUALIFICADO - 30s na página (apenas Pixel)
    const leadTimer = setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("trackCustom", "LeadQualificado");
      }
    }, 30000);

    return () => {
      window.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(leadTimer);
    };
  }, []);

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <StickyHeader />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <AppPreviewSection />
      <TestimonialsSection />
      <ValueAnchorSection />
      <OfferSection />
      <BonusSection />
      <FAQSection />
      <GuaranteeSection />
      <Footer />
      <WhatsAppButton />
      <SocialProofNotification />
      <MobileStickyBuy />
    </div>
  );
};

export default Index;
