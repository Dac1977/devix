"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions";

const initialState: ContactState = { ok: false, error: null };

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    initialState,
  );

  if (state.ok) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-8">
        <p className="text-lg font-medium text-emerald-800">
          ¡Mensaje enviado!
        </p>
        <p className="mt-2 text-sm text-emerald-700">
          Gracias por escribirnos. Te respondemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="mx-auto flex max-w-md flex-col gap-4 text-left"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nombre" className="text-sm font-medium text-zinc-700">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          maxLength={100}
          placeholder="Tu nombre"
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          placeholder="tu@email.com"
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensaje" className="text-sm font-medium text-zinc-700">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          maxLength={4000}
          rows={4}
          placeholder="Contanos sobre tu proyecto o consulta"
          className={`${inputClass} resize-none`}
        />
      </div>
      {state.error && (
        <p role="alert" className="text-sm text-red-600">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
