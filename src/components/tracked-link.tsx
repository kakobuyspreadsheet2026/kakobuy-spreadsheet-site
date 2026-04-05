"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

import { trackCtaClick } from "@/lib/analytics";

type TrackedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  trackingLabel: string;
  trackingLocation: string;
  children: ReactNode;
};

export function TrackedLink({
  href,
  trackingLabel,
  trackingLocation,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackCtaClick({
      href,
      label: trackingLabel,
      location: trackingLocation,
    });

    onClick?.(event);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
