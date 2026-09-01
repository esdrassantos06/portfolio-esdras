"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { sendContact } from "@/app/actions/contact";
import { contactSchema } from "@/lib/contact-schema";

type Status = "idle" | "sending" | "sent" | "error" | "rateLimited";
type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const FIELDS: Field[] = ["name", "email", "message"];

const inputClass =
  "placeholder:text-principal/50 focus:border-secundaria/60 focus:bg-white/6 w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3.5 text-base transition-all duration-300 outline-none focus:ring-2 focus:ring-secundaria/30";
const invalidClass =
  "border-red-400/60 focus:border-red-400/60 focus:ring-red-400/30";

type FieldElement = HTMLInputElement | HTMLTextAreaElement;

/**
 * Returns the translation key for a field's current value, or null when valid.
 */
function errorKey(element: FieldElement): string | null {
  const field = element.name as Field;
  if (!element.value.trim()) return `${field}Required`;

  const result = contactSchema.shape[field].safeParse(element.value);
  if (result.success) return null;

  return result.error.issues[0].code === "too_small"
    ? `${field}TooShort`
    : `${field}Invalid`;
}

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validateField(element: FieldElement) {
    const key = errorKey(element);
    setErrors((prev) => {
      const next = { ...prev };
      if (key) next[element.name as Field] = key;
      else delete next[element.name as Field];
      return next;
    });
  }

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Errors = {};
    for (const field of FIELDS) {
      const element = form.elements.namedItem(field) as FieldElement | null;
      const key = element && errorKey(element);
      if (key) nextErrors[field] = key;
    }
    setErrors(nextErrors);

    const firstInvalid = FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as FieldElement | null)?.focus();
      return;
    }

    setStatus("sending");

    try {
      const result = await sendContact({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
        company: String(data.get("company") ?? ""),
      });
      if (!result.ok) {
        setStatus(result.error === "rate_limited" ? "rateLimited" : "error");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldProps = (field: Field) => ({
    id: field,
    name: field,
    required: true,
    "aria-invalid": errors[field] ? (true as const) : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    onBlur: (event: React.FocusEvent<FieldElement>) =>
      validateField(event.currentTarget),
    onChange: (event: React.ChangeEvent<FieldElement>) => {
      if (errors[field]) validateField(event.currentTarget);
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "sending"}
      className="flex w-full max-w-2xl flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-principal/80 text-sm font-medium">
          {t("name")}
        </label>
        <input
          {...fieldProps("name")}
          type="text"
          minLength={2}
          maxLength={120}
          autoComplete="name"
          placeholder={t("namePlaceholder")}
          className={`${inputClass} ${errors.name ? invalidClass : ""}`}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-red-400">
            {t(`validation.${errors.name}`)}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-principal/80 text-sm font-medium"
        >
          {t("email")}
        </label>
        <input
          {...fieldProps("email")}
          type="email"
          maxLength={254}
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          className={`${inputClass} ${errors.email ? invalidClass : ""}`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-red-400">
            {t(`validation.${errors.email}`)}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-principal/80 text-sm font-medium"
        >
          {t("message")}
        </label>
        <textarea
          {...fieldProps("message")}
          rows={6}
          minLength={10}
          maxLength={5000}
          placeholder={t("messagePlaceholder")}
          className={`${inputClass} resize-y ${errors.message ? invalidClass : ""}`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-red-400">
            {t(`validation.${errors.message}`)}
          </p>
        )}
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
        className="bg-secundaria hover:bg-link focus-visible:ring-link mt-2 flex h-14 items-center justify-center rounded-full text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(169,39,191,0.7)] focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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
        {status === "rateLimited" && (
          <span className="text-amber-400">{t("rateLimited")}</span>
        )}
      </p>
    </form>
  );
}
