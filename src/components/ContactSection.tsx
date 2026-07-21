"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

const iconClass = "h-5 w-5";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={iconClass}>
      <path d="M3 6.5h18v11H3z" strokeLinejoin="round" />
      <path d="m3 7 9 6.5L21 7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={iconClass}>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
      <path d="M12 2.1c-5.5 0-10 4.4-10 9.9 0 1.7.5 3.4 1.3 4.9L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.4 10-9.9s-4.5-9.8-10-9.8Zm0 18c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A7.9 7.9 0 0 1 4 12c0-4.4 3.6-7.9 8-7.9s8 3.5 8 7.9-3.6 8.1-8 8.1Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-1-1.1-1.4-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9 1-.9 2.1.1 3.3.2.2 1.6 2.5 4 3.5 2 .9 2 .6 2.3.6.4 0 1.2-.5 1.4-1 .2-.4.2-.8.1-.9-.1-.1-.2-.1-.4-.2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.6h4V21H3zM9.5 9.6H13v1.56h.05c.5-.9 1.7-1.86 3.5-1.86 3.75 0 4.45 2.35 4.45 5.4V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.44-2.2 2.96V21h-4z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={iconClass}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9Z" />
    </svg>
  );
}

export default function ContactSection() {
  const { t } = useLanguage();

  const rows = [
    { icon: <MailIcon />, label: t.contact.email, href: `mailto:${t.contact.email}`, ltr: true },
    { icon: <PhoneIcon />, label: t.contact.phone, href: `tel:${t.contact.phone.replace(/\s/g, "")}`, ltr: true },
    { icon: <WhatsAppIcon />, label: t.contact.whatsapp, href: t.contact.whatsappHref, ltr: false },
    { icon: <LinkedInIcon />, label: t.contact.linkedin, href: t.contact.linkedinHref, ltr: false },
    { icon: <GlobeIcon />, label: t.contact.website, href: t.contact.websiteHref, ltr: true },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <Reveal className="text-center">
          <p className="section-kicker mb-3 text-xs font-semibold uppercase text-accent">
            {t.connect.title}
          </p>
        </Reveal>

        <div className="mx-auto mt-6 max-w-xl space-y-4 text-center">
          {t.connect.paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.1 + i * 0.08}>
              <p className="leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35} className="mt-9 text-center">
          <a
            href={t.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
          >
            {t.connect.cta}
          </a>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 rounded-3xl border border-border bg-surface/60 p-8 sm:p-10">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-xl font-bold">{t.contact.name}</h3>
              <p className="text-sm text-accent">{t.contact.role}</p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {rows.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-black/[0.015] px-4 py-3 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-soft transition-colors group-hover:bg-accent/20">
                    {row.icon}
                  </span>
                  <span className={`text-sm text-foreground/90 ${row.ltr ? "ltr-nums" : ""}`}>
                    {row.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
