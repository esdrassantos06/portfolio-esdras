"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "focus-visible:outline-principal bg-fundo2 w-full rounded-lg border border-gray-200/20 px-4 py-3 text-base transition-all duration-300 outline-none focus-visible:outline-2 focus-visible:outline-offset-2";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-principal/80 text-sm font-medium">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={t("namePlaceholder")}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-principal/80 text-sm font-medium"
        >
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-principal/80 text-sm font-medium"
        >
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder={t("messagePlaceholder")}
          className={`${inputClass} resize-y`}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-2499.75 h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="before:animate-shine bg-fundo2 hover:bg-fundo2/80 focus-visible:outline-principal relative flex h-12 items-center justify-center overflow-hidden rounded-lg border border-gray-200/50 text-lg transition-all duration-300 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? t("sending") : t("send")}
      </button>

      <p aria-live="polite" className="min-h-6 text-sm">
        {status === "sent" && (
          <span className="text-green-400">{t("success")}</span>
        )}
        {status === "error" && (
          <span className="text-red-400">{t("error")}</span>
        )}
      </p>
    </form>
  );
}
