"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeLabels, supportedLocales, switchLocalePath } from "@/lib/locales";

export function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm text-white/70">
      {supportedLocales.map((locale) => {
        const href = switchLocalePath(pathname || "/", locale);

        return (
          <Link
            key={locale}
            href={href}
            className="rounded-full border border-white/15 px-3 py-1 hover:border-rose-300 hover:text-white"
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
