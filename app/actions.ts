"use server";

import { Resend } from "resend";

export type ContactState = { ok: boolean; error: string | null };

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("nombre") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("mensaje") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Completá todos los campos." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Ingresá un email válido." };
  }
  if (name.length > 100 || message.length > 4000) {
    return { ok: false, error: "El mensaje es demasiado largo." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Falta RESEND_API_KEY en el entorno");
    return { ok: false, error: "El servicio de contacto no está configurado." };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Devix Web <contacto@devix.com.ar>",
    to: process.env.CONTACT_TO ?? "contacto@devix.com.ar",
    replyTo: email,
    subject: `Contacto web — ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      ok: false,
      error: "No pudimos enviar el mensaje. Probá de nuevo más tarde.",
    };
  }

  return { ok: true, error: null };
}
