import { useState, type FormEvent } from "react";
import { Calendar, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { useT } from "../../i18n/LanguageContext";
import { useReveal } from "../../hooks/useReveal";
import { contactChannels } from "../../data/contact";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", message: "" };

export function Contacto() {
  const t = useT();
  const headerRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();

  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire-up real backend (Resend / Supabase / webhook)
    setSent(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSent(false);
  };

  return (
    <section
      id="contacto"
      className="relative bg-base-100 py-24 lg:py-32 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 50% 100%, rgba(139, 92, 246, 0.18), transparent 65%), radial-gradient(ellipse 500px 400px at 80% 20%, rgba(233, 30, 140, 0.12), transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-14 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t.contact.eyebrow}
          </p>
          <h2 className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            {t.contact.title}{" "}
            <span className="text-praxia-gradient">{t.contact.titleAccent}</span>
          </h2>
          <p className="mt-6 text-base-content/70 text-lg leading-relaxed max-w-2xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div
          ref={bodyRef}
          className="reveal grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start"
        >
          {/* Form */}
          <div className="bg-base-200 border border-base-content/10 rounded-3xl p-6 sm:p-8 lg:p-10">
            {sent ? (
              <div className="member-in text-center py-6">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 text-primary mb-5">
                  <CheckCircle2 className="w-7 h-7" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight mb-3">
                  {t.contact.form.sentTitle}
                </h3>
                <p className="text-base-content/65 leading-relaxed max-w-md mx-auto mb-6">
                  {t.contact.form.sentBody}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm font-medium text-base-content/60 hover:text-primary transition-colors"
                >
                  {t.contact.form.sentReset}
                  <span aria-hidden className="ml-1">→</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-base-content/55 mb-2"
                  >
                    {t.contact.form.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full bg-base-100 border border-base-content/15 rounded-lg px-4 py-3 text-base-content placeholder:text-base-content/35 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-base-content/55 mb-2"
                  >
                    {t.contact.form.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full bg-base-100 border border-base-content/15 rounded-lg px-4 py-3 text-base-content placeholder:text-base-content/35 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-base-content/55 mb-2"
                  >
                    {t.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full bg-base-100 border border-base-content/15 rounded-lg px-4 py-3 text-base-content placeholder:text-base-content/35 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-content font-medium hover:scale-[1.02] hover:shadow-praxia-glow active:scale-[0.98] transition-all duration-300 group"
                >
                  {t.contact.form.submit}
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Alternative channels */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-base-content/45 mb-4">
              {t.contact.alternativesLabel}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${contactChannels.email}`}
                className="group flex items-center gap-4 bg-base-200/60 border border-base-content/10 rounded-2xl p-4 lg:p-5 hover:border-primary/40 hover:bg-base-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-sm text-base-content">
                    {t.contact.alternatives.email.label}
                  </span>
                  <span className="block text-xs text-base-content/55 truncate">
                    {contactChannels.email}
                  </span>
                  <span className="block text-[11px] text-base-content/40 mt-0.5">
                    {t.contact.alternatives.email.hint}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-base-content/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                >
                  →
                </span>
              </a>

              <a
                href={contactChannels.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-base-200/60 border border-base-content/10 rounded-2xl p-4 lg:p-5 hover:border-primary/40 hover:bg-base-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-success/15 text-success group-hover:bg-success/25 transition-colors">
                  <MessageCircle className="w-5 h-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-sm text-base-content">
                    {t.contact.alternatives.whatsapp.label}
                  </span>
                  <span className="block text-xs text-base-content/55 truncate">
                    {contactChannels.whatsappNumber}
                  </span>
                  <span className="block text-[11px] text-base-content/40 mt-0.5">
                    {t.contact.alternatives.whatsapp.hint}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-base-content/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                >
                  →
                </span>
              </a>

              <a
                href={contactChannels.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-base-200/60 border border-base-content/10 rounded-2xl p-4 lg:p-5 hover:border-primary/40 hover:bg-base-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/15 text-secondary group-hover:bg-secondary/25 transition-colors">
                  <Calendar className="w-5 h-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-sm text-base-content">
                    {t.contact.alternatives.calendar.label}
                  </span>
                  <span className="block text-[11px] text-base-content/40 mt-0.5">
                    {t.contact.alternatives.calendar.hint}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-base-content/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
