import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

const serviceAccents = {
  cyan: "bg-cyan-100 text-cyan-700",
  indigo: "bg-indigo-100 text-indigo-700",
  violet: "bg-violet-100 text-violet-700",
  emerald: "bg-emerald-100 text-emerald-700",
} as const;

const serviceIcons = {
  code: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M12 18h.01" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
} as const;

const services = [
  {
    title: "Desarrollo a medida",
    description:
      "Software diseñado y construido según las necesidades de tu negocio.",
    icon: "code",
    accent: "cyan",
  },
  {
    title: "Aplicaciones web",
    description:
      "Sitios, portales y sistemas web modernos, rápidos y escalables.",
    icon: "globe",
    accent: "indigo",
  },
  {
    title: "Aplicaciones móviles",
    description: "Apps para iOS y Android, nativas o multiplataforma.",
    icon: "mobile",
    accent: "violet",
  },
  {
    title: "Consultoría y soporte",
    description:
      "Acompañamiento técnico, mantenimiento y evolución de tus productos.",
    icon: "wrench",
    accent: "emerald",
  },
] as const;

const projects = [
  {
    name: "Incluir Salud — Prestadores",
    description:
      "Plataforma web y app móvil de autogestión para los prestadores de Incluir Salud, con validación de prestaciones por geolocalización.",
    logo: "/projects/incluir.png",
    tint: "bg-amber-50",
  },
  {
    name: "QRPass",
    description:
      "Control de acceso inteligente mediante códigos QR, con plataforma web y tótem para barreras.",
    logo: "/projects/qrpass.png",
    tint: "bg-blue-50",
  },
  {
    name: "Combos QR",
    description:
      "Gestión y distribución de combos con saldo mediante vouchers QR escaneables.",
    logo: "/projects/comboqr.png",
    tint: "bg-sky-50",
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
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.22),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl"
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
            Somos una empresa de desarrollo de software de{" "}
            <span className="font-medium text-cyan-700">Mendoza, Argentina</span>
            .
          </p>
          <a
            href="#contacto"
            className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-600/25 transition-transform hover:scale-105"
          >
            Contactanos
          </a>
        </div>
      </section>

      {/* Quiénes somos */}
      <section
        id="nosotros"
        className="relative scroll-mt-16 overflow-hidden bg-[#0d2036] px-6 py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Quiénes somos
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Devix es una empresa de desarrollo de software con base en{" "}
            <span className="font-medium text-cyan-300">
              Mendoza, Argentina
            </span>
            . Trabajamos junto a empresas y emprendedores para transformar ideas
            en productos digitales, con foco en la calidad, la comunicación y
            los resultados.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="servicios"
        className="scroll-mt-16 bg-gradient-to-b from-cyan-50/70 to-white px-6 py-24"
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
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${serviceAccents[s.accent]}`}
                >
                  <svg
                    className="h-5.5 w-5.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {serviceIcons[s.icon]}
                  </svg>
                </div>
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
      <section id="proyectos" className="scroll-mt-16 px-6 py-24">
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
            {projects.map((p) => (
              <div
                key={p.name}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div
                  className={`flex h-48 items-center justify-center p-8 ${p.tint}`}
                >
                  <Image
                    src={p.logo}
                    alt={`Logo de ${p.name}`}
                    width={220}
                    height={220}
                    className="h-full w-auto object-contain"
                  />
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
        className="scroll-mt-16 bg-gradient-to-b from-white to-cyan-50/80 px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            ¿Tenés una idea o un proyecto en mente? Escribinos y lo charlamos.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            También podés escribirnos a{" "}
            <a
              href="mailto:contacto@devix.com.ar"
              className="font-medium text-cyan-700 underline-offset-4 hover:underline"
            >
              contacto@devix.com.ar
            </a>{" "}
            — Mendoza, Argentina
          </p>
        </div>
      </section>

      <footer className="bg-[#0d2036] px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Devix — devix.com.ar — Mendoza, Argentina
      </footer>
    </div>
  );
}
