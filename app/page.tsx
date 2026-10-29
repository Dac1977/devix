import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

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
    name: "Incluir Salud — Prestadores",
    description:
      "Plataforma web y app móvil de autogestión para los prestadores de Incluir Salud, con validación de prestaciones por geolocalización.",
    logo: "/projects/incluir.png",
  },
  {
    name: "QRPass",
    description:
      "Control de acceso inteligente mediante códigos QR, con plataforma web y tótem para barreras.",
    logo: "/projects/qrpass.png",
  },
  {
    name: "Combos QR",
    description:
      "Gestión y distribución de combos con saldo mediante vouchers QR escaneables.",
    logo: "/projects/comboqr.png",
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
            {projects.map((p) => (
              <div
                key={p.name}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="flex h-48 items-center justify-center bg-zinc-50 p-8">
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
        className="scroll-mt-16 border-t border-zinc-100 bg-zinc-50 px-6 py-24"
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
              className="font-medium text-zinc-700 underline-offset-4 hover:underline"
            >
              contacto@devix.com.ar
            </a>{" "}
            — Mendoza, Argentina
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-100 px-6 py-8 text-center text-sm text-zinc-400">
        © 2026 Devix — devix.com.ar — Mendoza, Argentina
      </footer>
    </div>
  );
}
