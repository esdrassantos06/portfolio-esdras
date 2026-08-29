import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export default async function ContactClose() {
  const t = await getTranslations("Contact");
  return (
    <section
      id="contact-close"
      aria-label="Contact call to action"
      className="mx-auto flex min-h-[80vh] w-3/4 flex-col items-center justify-center gap-8 py-24 text-center"
    >
      <h2 className="max-w-4xl text-5xl font-bold text-balance sm:text-6xl md:text-7xl">
        {t("title")}
      </h2>
      <p className="text-principal/80 max-w-xl text-lg text-pretty">
        {t("subtitle")}
      </p>
      <Link
        href="/contact"
        className="bg-secundaria hover:bg-link focus-visible:ring-link group mt-4 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-none"
      >
        {t("title")}
        <ArrowUpRightIcon
          size={22}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:rotate-45"
        />
      </Link>
    </section>
  );
}
