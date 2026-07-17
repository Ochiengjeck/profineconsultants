"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, services } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // mobile submenu
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "bg-paper/90 backdrop-blur border-b border-line"
          : "bg-paper border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="Profine Consultants — home">
          <Image
            src="/profine-logo.png"
            alt="Profine Consultants"
            width={620}
            height={304}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-orange"
                      : "text-ink/80 hover:text-navy"
                  }`}
                >
                  {item.label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    className="mt-0.5 transition-transform group-hover:rotate-180"
                    aria-hidden
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-line bg-paper shadow-xl shadow-navy-deep/10">
                    {services.map((s, i) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="flex items-baseline gap-3 border-b border-line px-4 py-3 last:border-b-0 hover:bg-paper-2"
                      >
                        <span className="font-mono text-[0.65rem] text-orange">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-navy">{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-orange" : "text-ink/80 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact-us"
            className="ml-3 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Book A Consultation
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav className="border-t border-line bg-paper lg:hidden">
          <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
            {nav.map((item) =>
              "children" in item && item.children ? (
                <div key={item.href} className="border-b border-line py-1">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-navy"
                    aria-expanded={servicesOpen}
                  >
                    Our Services
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 10 6"
                      className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      aria-hidden
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="pb-2 pl-4">
                      <Link
                        href="/our-services"
                        className="block py-2 text-sm text-muted hover:text-orange"
                      >
                        All Services
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${s.slug}`}
                          className="block py-2 text-sm text-muted hover:text-orange"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block border-b border-line py-3 text-base font-medium ${
                    isActive(item.href) ? "text-orange" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact-us"
              className="mt-4 block rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book A Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
