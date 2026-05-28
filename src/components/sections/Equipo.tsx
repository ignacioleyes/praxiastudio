import { useState } from "react";
import { useT } from "../../i18n/LanguageContext";
import { useReveal } from "../../hooks/useReveal";
import { team, type MemberId } from "../../data/team";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Equipo() {
  const t = useT();
  const headerRef = useReveal<HTMLDivElement>();
  const containerRef = useReveal<HTMLDivElement>();

  const [selectedId, setSelectedId] = useState<MemberId>("ignacio");
  const selected = team.find((m) => m.id === selectedId)!;
  const selectedCopy = t.team.members[selectedId];

  return (
    <section
      id="equipo"
      className="relative bg-base-200/40 py-24 lg:py-32 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 20% 50%, rgba(139, 92, 246, 0.12), transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-14 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t.team.eyebrow}
          </p>
          <h2 className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            {t.team.title}
          </h2>
          <p className="mt-6 text-base-content/70 text-lg leading-relaxed max-w-2xl">
            {t.team.subtitle}
          </p>
        </div>

        <div ref={containerRef} className="reveal max-w-5xl">
          {/* Thumbnails — selector de miembro */}
          <div
            role="tablist"
            aria-label={t.team.title}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
          >
            {team.map((member) => {
              const copy = t.team.members[member.id];
              const isActive = member.id === selectedId;
              return (
                <button
                  key={member.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedId(member.id)}
                  className={`group flex items-center gap-3 text-left rounded-2xl p-3.5 border transition-all duration-300 ${
                    isActive
                      ? "border-primary/60 bg-base-200 shadow-praxia-glow"
                      : "border-base-content/10 bg-base-200/60 hover:border-primary/30 hover:bg-base-200 hover:-translate-y-0.5"
                  }`}
                >
                  {/* Avatar mini */}
                  <span
                    className={`relative shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm tracking-tight text-white transition-transform ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, #8b5cf6 0%, #e91e8c 100%)"
                        : "linear-gradient(135deg, rgba(139,92,246,0.7) 0%, rgba(233,30,140,0.7) 100%)",
                    }}
                  >
                    {member.initials}
                  </span>

                  {/* Nombre + rol mini */}
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-semibold text-sm leading-tight truncate transition-colors ${
                        isActive ? "text-base-content" : "text-base-content/85"
                      }`}
                    >
                      {copy.name}
                    </span>
                    <span
                      className={`block text-[11px] leading-snug truncate mt-0.5 transition-colors ${
                        isActive ? "text-secondary" : "text-base-content/50"
                      }`}
                    >
                      {member.isFounder ? t.team.founderBadge : copy.role.split(" · ")[0]}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Card grande del seleccionado */}
          <article
            key={selectedId}
            className="member-in grid md:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center bg-base-200 border border-base-content/10 rounded-3xl p-8 lg:p-12"
          >
            {/* Avatar grande — gradient + iniciales */}
            <div className="relative mx-auto md:mx-0">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #e91e8c 100%)",
                }}
                aria-hidden
              />
              <div
                className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center font-display font-bold text-4xl lg:text-5xl text-white tracking-tight"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #e91e8c 100%)",
                }}
              >
                {selected.initials}
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              {selected.isFounder && (
                <div className="flex items-center justify-center md:justify-start gap-2.5 mb-3">
                  <span className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-md bg-praxia-gradient text-white">
                    {t.team.founderBadge}
                  </span>
                </div>
              )}

              <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight mb-1">
                {selectedCopy.name}
              </h3>
              <p className="text-secondary font-medium text-sm mb-5">
                {selectedCopy.role}
              </p>

              <p className="text-base-content/70 leading-relaxed mb-6 max-w-lg">
                {selectedCopy.bio}
              </p>

              <a
                href={selected.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                {t.team.linkedinLabel}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
