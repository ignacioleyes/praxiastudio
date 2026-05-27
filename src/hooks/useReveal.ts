import { useEffect, useRef } from "react";

/**
 * Hook que agrega la clase `is-visible` a un elemento cuando entra al viewport.
 * Combinalo con la clase `.reveal` del index.css para fade-in + scale + blur.
 *
 * Uso:
 *   const ref = useReveal<HTMLDivElement>();
 *   return <div ref={ref} className="reveal">contenido</div>;
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
