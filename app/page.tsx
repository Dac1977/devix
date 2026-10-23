import Image from "next/image";
import Header from "@/components/Header";

const services = [
  {
    title: "Desarrollo a medida",
    description:
      "Software diseñado y construido según las necesidades de tu negocio.",
  },
  {
    title: "Aplicaciones web",
    description:
      "Sitios, portales y sistemas web modernos, rápidos y escalables.",
  },
  {
    title: "Aplicaciones móviles",
    description: "Apps para iOS y Android, nativas o multiplataforma.",
  },
  {
    title: "Consultoría y soporte",
    description:
      "Acompañamiento técnico, mantenimiento y evolución de tus productos.",
  },
];

const projects = [
  {
    name: "Proyecto destacado",
    description: "Descripción breve del proyecto o del cliente.",
  },
  {
    name: "Proyecto destacado",
    description: "Descripción breve del proyecto o del cliente.",
  },
  {
    name: "Proyecto destacado",
    description: "Descripción breve del proyecto o del cliente.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-800">
      <Header />

      {/* Inicio */}
      <section
        id="inicio"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_60%)]"
        />
        <div className="relative flex flex-col items-center gap-10">
          <Image
            src="/logo.png"
            alt="Devix — Software Development"
            width={1024}
            height={245}
            priority
            className="h-auto w-[min(80vw,430px)]"
          />
          <p className="max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
            Somos una empresa de desarrollo de software de Mendoza, Argentina.
          </p>
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Contactanos
            </a>
            <span className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm text-zinc-500">
              Sitio en construcción
            </span>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section
        id="nosotros"
        className="scroll-mt-16 border-t border-zinc-100 px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Quiénes somos
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Devix es una empresa de desarrollo de software con base en Mendoza,
            Argentina. Trabajamos junto a empresas y emprendedores para
            transformar ideas en productos digitales, con foco en la calidad, la
            comunicación y los resultados.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="servicios"
        className="scroll-mt-16 border-t border-zinc-100 bg-zinc-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Servicios
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Esto es lo que podemos hacer por vos.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section
        id="proyectos"
        className="scroll-mt-16 border-t border-zinc-100 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Proyectos
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Algunos de los proyectos en los que participamos.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-cyan-50 to-zinc-100 text-zinc-300">
                  <svg
                    className="h-12 w-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="scroll-mt-16 border-t border-zinc-100 bg-zinc-50 px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            ¿Tenés una idea o un proyecto en mente? Escribinos y lo charlamos.
          </p>
          <a
            href="mailto:hola@devix.com.ar"
            className="mt-8 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            hola@devix.com.ar
          </a>
          <p className="mt-6 text-sm text-zinc-500">Mendoza, Argentina</p>
        </div>
      </section>

      <footer className="border-t border-zinc-100 px-6 py-8 text-center text-sm text-zinc-400">
        © 2026 Devix — devix.com.ar — Mendoza, Argentina
      </footer>
    </div>
  );
}
