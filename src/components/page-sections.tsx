import Link from "next/link";
import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:gap-10 md:px-6 md:py-14">
      <section className="relative overflow-hidden rounded-[1.5rem] border border-[#3d171f] bg-[#12090b] px-5 py-8 text-white shadow-[0_24px_80px_rgba(20,12,13,0.18)] md:rounded-[2rem] md:px-8 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(190,24,93,0.28),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_62%)]" />
        <div className="absolute -right-10 top-12 h-40 w-40 rounded-full border border-white/8" />
        <div className="relative z-10">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-200">{eyebrow}</p>
          ) : null}
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/75 md:text-lg md:leading-8">{description}</p>
        </div>
      </section>
      {children}
    </div>
  );
}

export function EditorialHero({
  eyebrow,
  title,
  description,
  badges,
  actions,
  stats,
  cards,
}: {
  eyebrow: string;
  title: string;
  description: string;
  badges: string[];
  actions: ReactNode;
  stats: Array<{ label: string; value: string; description: string }>;
  cards: Array<{ eyebrow: string; title: string; description: string; href: string; hrefLabel: string }>;
}) {
  return (
    <section className="relative overflow-visible rounded-[1.5rem] border border-[#3d171f] bg-[#12090b] px-5 py-8 text-white shadow-[0_24px_80px_rgba(20,12,13,0.2)] md:rounded-[2rem] md:px-10 md:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(190,24,93,0.32),transparent_28%),linear-gradient(125deg,rgba(255,255,255,0.06),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_60%)]" />
      <div className="absolute -right-16 top-10 h-52 w-52 rounded-full border border-white/8" />
      <div className="absolute right-20 top-20 h-28 w-28 rounded-full border border-white/8" />
      <div className="absolute left-[-8%] top-[-18%] h-80 w-80 rounded-full bg-rose-700/18 blur-3xl" />
      <div className="relative z-10">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/75 md:text-lg md:leading-8">{description}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/6 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-rose-100"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8">{actions}</div>
        <div className="mt-8 grid gap-4 md:max-w-5xl md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/6 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm">
              <p className="text-3xl font-semibold tracking-tight text-white">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-rose-100">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:mb-[-4.5rem] md:grid-cols-5 md:translate-y-8">
          {cards.map((card, index) => {
            const featured = index === 2;

            return (
            <Link
              key={`${card.eyebrow}-${card.title}`}
              href={card.href}
              className={
                featured
                  ? "flex min-h-[14rem] h-full flex-col rounded-2xl border border-rose-300 bg-gradient-to-b from-[#7f1d1d] to-[#3b0a10] px-5 py-5 text-white shadow-[0_24px_50px_rgba(20,12,13,0.26)] transition hover:-translate-y-0.5 md:min-h-[20rem]"
                  : "flex min-h-[14rem] h-full flex-col rounded-2xl border border-[#e7d6d8] bg-[#fff8f8] px-5 py-5 text-slate-900 shadow-[0_20px_40px_rgba(20,12,13,0.14)] transition hover:-translate-y-0.5 hover:border-rose-300 md:min-h-[20rem]"
              }
            >
              <p className={featured ? "text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-100" : "text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-700"}>
                {card.eyebrow}
              </p>
              <h3 className={featured ? "mt-3 text-base font-semibold text-white" : "mt-3 text-base font-semibold text-slate-950"}>
                {card.title}
              </h3>
              <p className={featured ? "mt-2 flex-1 text-sm leading-6 text-white/70" : "mt-2 flex-1 text-sm leading-6 text-slate-600"}>
                {card.description}
              </p>
              <p className={featured ? "mt-6 text-sm font-semibold text-white" : "mt-6 text-sm font-semibold text-rose-700"}>
                {card.hrefLabel}
              </p>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BreadcrumbTrail({
  items,
}: {
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
            {index > 0 ? <span className="text-slate-300">/</span> : null}
            <Link href={item.href} className="hover:text-slate-800">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ActionRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-4">{children}</div>;
}

export function BadgeRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold tracking-wide text-amber-800"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function StatGrid({
  items,
}: {
  items: Array<{ label: string; value: string; description: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5">
          <p className="text-3xl font-semibold tracking-tight text-slate-950">{item.value}</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">{item.label}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const sectionClassName =
    tone === "dark"
      ? "rounded-[1.5rem] border border-[#3d171f] bg-[#12090b] px-5 py-6 text-white shadow-[0_24px_80px_rgba(20,12,13,0.16)] md:rounded-3xl md:px-8 md:py-8"
      : "rounded-[1.5rem] border border-rose-100 bg-white px-5 py-6 shadow-[0_14px_40px_rgba(74,22,33,0.05)] md:rounded-3xl md:px-8 md:py-8";
  const titleClassName = tone === "dark" ? "text-2xl font-semibold text-white" : "text-2xl font-semibold text-slate-950";
  const introClassName = tone === "dark" ? "mt-3 max-w-3xl text-white/70" : "mt-3 max-w-3xl text-slate-700";

  return (
    <section className={sectionClassName}>
      {eyebrow ? (
        <p
          className={
            tone === "dark"
              ? "text-xs font-semibold uppercase tracking-[0.18em] text-rose-200"
              : "text-xs font-semibold uppercase tracking-[0.18em] text-rose-700"
          }
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={eyebrow ? `${titleClassName} mt-3` : titleClassName}>{title}</h2>
      {intro ? <p className={introClassName}>{intro}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function MiniStatGrid({
  items,
  tone = "light",
}: {
  items: Array<{ label: string; value: string; description: string }>;
  tone?: "light" | "dark";
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={`${item.label}-${item.value}`}
          className={
            tone === "dark"
              ? "rounded-2xl border border-white/10 bg-white/6 p-5 shadow-[0_16px_32px_rgba(0,0,0,0.14)]"
              : "rounded-2xl border border-rose-100 bg-[#fffafa] p-5 shadow-[0_12px_30px_rgba(74,22,33,0.04)]"
          }
        >
          <p className={tone === "dark" ? "text-2xl font-semibold text-white" : "text-2xl font-semibold text-slate-950"}>
            {item.value}
          </p>
          <p className={tone === "dark" ? "mt-2 text-sm font-semibold text-rose-100" : "mt-2 text-sm font-semibold text-rose-700"}>
            {item.label}
          </p>
          <p className={tone === "dark" ? "mt-2 text-sm leading-6 text-white/60" : "mt-2 text-sm leading-6 text-slate-600"}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{children}</div>;
}

export function LinkCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-rose-100 bg-[#fffafa] px-5 py-5 shadow-[0_12px_30px_rgba(74,22,33,0.04)] transition hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50"
    >
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-rose-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TextStack({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-slate-700">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export function Callout({
  title,
  body,
  tone = "light",
}: {
  title: string;
  body: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={
        tone === "dark"
          ? "rounded-2xl border border-white/10 bg-white/6 px-5 py-5 shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
          : "rounded-2xl border border-rose-100 bg-rose-50/60 px-5 py-5 shadow-[0_12px_30px_rgba(74,22,33,0.04)]"
      }
    >
      <p className={tone === "dark" ? "text-sm font-semibold uppercase tracking-[0.14em] text-rose-200" : "text-sm font-semibold uppercase tracking-[0.14em] text-rose-700"}>
        {title}
      </p>
      <p className={tone === "dark" ? "mt-3 text-white/70" : "mt-3 text-slate-700"}>{body}</p>
    </div>
  );
}

export function SpreadsheetPreview({
  title,
  description,
  rows,
}: {
  title: string;
  description: string;
  rows: Array<{
    keyword: string;
    intent: string;
    bestPage: string;
    nextStep: string;
  }>;
}) {
  return (
    <section className="rounded-[1.5rem] border border-rose-100 bg-white px-5 py-6 shadow-sm md:rounded-3xl md:px-8 md:py-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
          <p className="mt-2 max-w-3xl text-slate-700">{description}</p>
        </div>
        <div className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-rose-800">
          Quick View
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[42rem] overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] bg-[#12090b] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            <div>Search</div>
            <div>Need</div>
            <div>Open First</div>
            <div>Then Check</div>
          </div>
          <div className="divide-y divide-slate-200">
            {rows.map((row) => (
              <div
                key={`${row.keyword}-${row.bestPage}`}
                className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-4 bg-white px-5 py-4 text-sm text-slate-700"
              >
                <div className="font-semibold text-slate-950">{row.keyword}</div>
                <div>{row.intent}</div>
                <div>{row.bestPage}</div>
                <div>{row.nextStep}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HighlightCard({
  eyebrow,
  title,
  body,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  body: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={
        tone === "dark"
          ? "rounded-2xl border border-white/10 bg-white/6 px-5 py-5 shadow-sm"
          : "rounded-2xl border border-rose-100 bg-[#fffafa] px-5 py-5 shadow-sm"
      }
    >
      <p className={tone === "dark" ? "text-xs font-semibold uppercase tracking-[0.14em] text-rose-200" : "text-xs font-semibold uppercase tracking-[0.14em] text-rose-700"}>
        {eyebrow}
      </p>
      <h3 className={tone === "dark" ? "mt-3 text-lg font-semibold text-white" : "mt-3 text-lg font-semibold text-slate-950"}>{title}</h3>
      <p className={tone === "dark" ? "mt-2 text-sm leading-6 text-white/65" : "mt-2 text-sm leading-6 text-slate-600"}>{body}</p>
    </div>
  );
}

export function RouteActionCard({
  eyebrow,
  title,
  body,
  href,
  hrefLabel,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  hrefLabel: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href={href}
      className={
        tone === "dark"
          ? "rounded-2xl border border-white/10 bg-white/6 px-5 py-5 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-300"
          : "rounded-2xl border border-rose-100 bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-300"
      }
    >
      <p className={tone === "dark" ? "text-xs font-semibold uppercase tracking-[0.14em] text-rose-200" : "text-xs font-semibold uppercase tracking-[0.14em] text-rose-700"}>
        {eyebrow}
      </p>
      <h3 className={tone === "dark" ? "mt-3 text-lg font-semibold text-white" : "mt-3 text-lg font-semibold text-slate-950"}>{title}</h3>
      <p className={tone === "dark" ? "mt-2 text-sm leading-6 text-white/65" : "mt-2 text-sm leading-6 text-slate-600"}>{body}</p>
      <p className={tone === "dark" ? "mt-4 text-sm font-semibold text-white" : "mt-4 text-sm font-semibold text-slate-950"}>{hrefLabel}</p>
    </Link>
  );
}

export function FindsSurface({
  title,
  description,
  rows,
}: {
  title: string;
  description: string;
  rows: Array<{
    slot: string;
    category: string;
    angle: string;
    nextHref: string;
    nextLabel: string;
  }>;
}) {
  return (
    <section className="rounded-[1.5rem] border border-rose-100 bg-white px-5 py-6 shadow-sm md:rounded-3xl md:px-8 md:py-8">
      <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 max-w-3xl text-slate-700">{description}</p>
      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[38rem] overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-[.9fr_1fr_1.4fr_1fr] bg-rose-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-800">
            <div>Pick</div>
            <div>Type</div>
            <div>Why Open It</div>
            <div>Go To</div>
          </div>
          <div className="divide-y divide-slate-200">
            {rows.map((row) => (
              <div
                key={`${row.slot}-${row.category}-${row.nextHref}`}
                className="grid grid-cols-[.9fr_1fr_1.4fr_1fr] gap-4 px-5 py-4 text-sm text-slate-700 odd:bg-white even:bg-rose-50/30"
              >
                <div className="font-semibold text-slate-950">{row.slot}</div>
                <div>{row.category}</div>
                <div>{row.angle}</div>
                <div>
                  <Link href={row.nextHref} className="font-semibold text-slate-950 hover:text-rose-800">
                    {row.nextLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
