"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#inicio" aria-label="Devix - Inicio">
          <Image
            src="/logo.png"
            alt="Devix — Software Development"
            width={1024}
            height={245}
            priority
            className="h-8 w-auto"
          />
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-zinc-950">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="border-t border-zinc-200 bg-white px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-medium text-zinc-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
