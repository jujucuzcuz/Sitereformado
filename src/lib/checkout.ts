const KIWIFY_URL = "https://pay.kiwify.com.br/vrYjxFv";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src"];
function generateEventId() {
  const rand = (crypto as any)?.randomUUID?.() ?? `${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`;
  return `nb_${Date.now()}_${rand}`;
}
function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : "";
}
export function openCheckout() {
  const url = new URL(KIWIFY_URL);
  UTM_KEYS.forEach((key) => {
    const val = sessionStorage.getItem(`nb_${key}`) || localStorage.getItem(`nb_${key}`);
    if (val) {
      url.searchParams.set(key, val);
    }
  });
  // Gera event_id único compartilhado entre Pixel (client) e CAPI (server)
  const eventId = generateEventId();
  const fbc = localStorage.getItem("nb_fbc") || getCookie("_fbc") || "";
  const fbp = getCookie("_fbp") || "";
  // Repassa via parâmetros de tracking da Kiwify (s1/s2/s3) -> chegam no webhook em TrackingParameters
  url.searchParams.set("s1", eventId);
  if (fbc) url.searchParams.set("s2", fbc);
  if (fbp) url.searchParams.set("s3", fbp);
  // Dispara InitiateCheckout no Pixel com o MESMO event_id para deduplicação com a CAPI
  if (typeof window !== "undefined" && (window as any).fbq) {
    const fbqParams: Record<string, any> = {
      value: 29.9,
      currency: "BRL",
      content_name: "NutriBebê Pro",
    };
    if (fbc) fbqParams.fbc = fbc;
    if (fbp) fbqParams.fbp = fbp;

    (window as any).fbq(
      "track",
      "InitiateCheckout",
      fbqParams,
      { eventID: eventId }
    );
  }
  window.open(url.toString(), "_blank");
}
