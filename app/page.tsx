import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-white px-6 text-center">
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
        <span className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm text-zinc-500">
          Sitio en construcción
        </span>
      </div>
      <footer className="absolute bottom-6 text-sm text-zinc-400">
        devix.com.ar — Mendoza, Argentina
      </footer>
    </main>
  );
}
