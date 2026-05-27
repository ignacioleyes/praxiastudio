interface PraxiaMarkProps {
  className?: string;
  title?: string;
  /** Si es true, usa una versión monocromática (blanca). Default: gradient brand. */
  mono?: boolean;
}

/**
 * Iso placeholder de Praxia Studio.
 *
 * Concepto: tres triángulos apuntando hacia arriba, escalonados de mayor a
 * menor opacidad — sugiere acción ascendente, capas que se construyen, transformación.
 *
 * Este iso es PLACEHOLDER. Reemplazar por el diseño final cuando esté listo
 * (ver Apéndice B del lineamiento).
 */
export function PraxiaMark({
  className,
  title = "Praxia Studio",
  mono = false,
}: PraxiaMarkProps) {
  const gradId = "praxia-iso-grad";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title}
    >
      {!mono && (
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#e91e8c" />
          </linearGradient>
        </defs>
      )}
      {/* Triángulo superior (chico) */}
      <polygon
        points="50,18 35,38 65,38"
        fill={mono ? "currentColor" : `url(#${gradId})`}
        opacity={mono ? 0.85 : 1}
      />
      {/* Triángulo medio */}
      <polygon
        points="50,42 28,72 72,72"
        fill={mono ? "currentColor" : `url(#${gradId})`}
        opacity={mono ? 0.55 : 0.7}
      />
      {/* Triángulo inferior (más grande, base) */}
      <polygon
        points="50,68 18,98 82,98"
        fill={mono ? "currentColor" : `url(#${gradId})`}
        opacity={mono ? 0.3 : 0.4}
      />
    </svg>
  );
}
