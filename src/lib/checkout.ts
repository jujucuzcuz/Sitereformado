# Correção final — src/lib/checkout.ts

## Código completo para copiar e colar (substitui o arquivo inteiro)

```ts
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
      content_name: "eBook Toalhas dos Sonhos",
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
```

## O que mudou em relação à versão anterior

- `content_name: "NutriBebê Pro"` → `content_name: "eBook Toalhas dos Sonhos"`
  (corrige o nome do produto, que estava com um placeholder de outro projeto)
- `fbc` e `fbp` continuam sendo adicionados condicionalmente ao objeto `fbqParams`
  antes do disparo do evento (essa parte já estava certa no commit anterior)

## Como aplicar

1. Abra `src/lib/checkout.ts` no GitHub
2. Clique no ícone de lápis (editar)
3. Selecione todo o conteúdo do arquivo e substitua pelo código acima
4. Commit direto na branch main (mensagem sugerida: "Corrige content_name e garante
   publicação de fbc/fbp no InitiateCheckout")
5. **Importante:** depois do commit, vá no painel do Lovable e confirme que o
   "Publish" foi feito — não basta o commit existir no GitHub, é preciso publicar
   de fato (foi isso que causou a confusão anterior)

## Como testar depois

1. Acesse `https://toalha-dos-sonhos.lovable.app/?fbclid=tesfinal000` com
   recarregamento forçado (Ctrl+Shift+R)
2. Abra o Console do navegador (F12 → Console) e cole:
   ```js
   const originalFbq = window.fbq;
   window.fbq = function(...args) {
     console.log('FBQ CHAMADO:', JSON.stringify(args));
     return originalFbq.apply(this, args);
   };
   ```
3. Clique no botão de comprar
4. No log que aparecer, confirme:
   - `content_name: "eBook Toalhas dos Sonhos"` (nome corrigido)
   - `fbc` e `fbp` presentes no objeto (não apenas `value` e `currency`)
5. Se tudo aparecer certo nesse log direto do navegador, a correção está completa
   e funcionando — não é mais necessário verificar no Gerenciador de Eventos do
   Meta para confirmar essa parte específica, já que o log mostra exatamente o
   que está sendo enviado.
