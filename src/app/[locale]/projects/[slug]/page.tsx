import { allProjects, getProject, nextProject } from "@/data/projects";
import { notFound } from "next/navigation";
import { Locale } from "next-intl";
import { FadeIn } from "@/components/ui/ScrollAnimation";
import HeroDive from "@/components/motion/HeroDive";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteUrl, localizedUrl, localeAlternates } from "@/i18n/url";
import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CodeIcon,
  GlobeIcon,
} from "@phosphor-icons/react/dist/ssr";
import JsonLd from "@/components/JsonLd";
import {
  graph,
  breadcrumbSchema,
  PERSON_ID,
  WEBSITE_ID,
  SITE_NAME,
} from "@/lib/schema";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const projeto = getProject(slug);
  if (!projeto) return {};

  const t = await getTranslations({ locale, namespace: projeto.namespace });
  const url = localizedUrl(locale, `/projects/${slug}`);
  const title = `${t("Metadata.title")} | ${SITE_NAME}`;
  const description = t("Metadata.description");
  const image = {
    url: `${siteUrl}${projeto.image.src}`,
    width: projeto.image.width,
    height: projeto.image.height,
    alt: t("title"),
  };

  return {
    title: t("Metadata.title"),
    description,
    keywords: t("Metadata.keywords").split(", "),
    openGraph: {
      type: "website",
      locale,
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
      creator: "@esdrasprft",
    },
    alternates: {
      canonical: url,
      languages: localeAlternates(`/projects/${slug}`),
    },
  };
}

const externalLinkClass =
  "inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 text-base transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-link focus-visible:outline-none";

export default async function ProjetoPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const projeto = getProject(slug);
  if (!projeto) notFound();

  const next = nextProject(slug);
  const [t, nextT, allT, ctaT, rootT] = await Promise.all([
    getTranslations(projeto.namespace),
    getTranslations(next.namespace),
    getTranslations("AllProjects"),
    getTranslations("ProjectCTA"),
    getTranslations(),
  ]);

  const newTab = rootT("OpensInNewTab");
  const paragraphs = t("description").split(/\n{2,}/);

  const url = localizedUrl(locale, `/projects/${slug}`);
  const imageUrl = `${siteUrl}${projeto.image.src}`;
  const structuredData = graph(
    {
      "@type": "SoftwareApplication",
      "@id": `${url}#software`,
      name: projeto.name,
      description: t("Metadata.description"),
      url: projeto.demo ?? projeto.code,
      sameAs: projeto.code ? [projeto.code] : undefined,
      codeRepository: projeto.code,
      author: { "@id": PERSON_ID },
      image: imageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: projeto.name,
      description: t("Metadata.description"),
      inLanguage: locale,
      isPartOf: { "@id": WEBSITE_ID },
      primaryImageOfPage: imageUrl,
    },
    breadcrumbSchema(locale, [
      { name: allT("title"), path: "/projects" },
      { name: projeto.name, path: `/projects/${slug}` },
    ]),
  );

  return (
    <>
      <JsonLd data={structuredData} />

      <div className="shell pt-32 pb-24 sm:pt-40">
        <section className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16 xl:gap-20">
          <div className="max-lg:contents">
            <HeroDive className="@container order-1 min-w-0">
              <Link
                href="/projects"
                className="hero-dive text-principal/60 hover:text-principal mb-8 inline-flex w-fit items-center gap-2 text-sm transition-colors duration-300"
              >
                <ArrowLeftIcon size={16} aria-hidden="true" />
                {allT("title")}
              </Link>

              <h1 className="hero-dive text-[clamp(2.5rem,12cqi,5rem)] leading-[0.95] font-bold tracking-[-0.035em] text-balance">
                {projeto.name}
              </h1>

              <p className="hero-dive text-secundaria mt-4 text-xl font-medium text-balance sm:text-2xl">
                {t("title")}
              </p>

              {(projeto.demo || projeto.code) && (
                <div className="hero-dive mt-8 flex flex-wrap gap-3">
                  {projeto.demo && (
                    <a
                      href={projeto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${ctaT("viewDemo")} (${newTab})`}
                      className={`${externalLinkClass} bg-secundaria hover:bg-secundariahover font-semibold text-white`}
                    >
                      <GlobeIcon size={20} aria-hidden="true" />
                      {ctaT("viewDemo")}
                    </a>
                  )}
                  {projeto.code && (
                    <a
                      href={projeto.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${ctaT("sourceCode")} (${newTab})`}
                      className={`${externalLinkClass} hover:border-secundaria/50 border border-white/15 bg-white/3 hover:bg-white/7`}
                    >
                      <CodeIcon size={20} aria-hidden="true" />
                      {ctaT("sourceCode")}
                    </a>
                  )}
                </div>
              )}
            </HeroDive>

            {projeto.metrics && (
              <dl className="order-3 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-4 lg:mt-10 lg:grid-cols-2">
                {projeto.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="text-principal/60 text-sm">
                      {t(`metrics.${metric.label}`)}
                    </dt>
                    <dd className="mt-1 text-[clamp(1.75rem,3vw,2.25rem)] leading-none font-bold tracking-[-0.03em] tabular-nums">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <HeroDive className="order-2">
            <figure className="hero-dive relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_80px_-40px_rgba(169,39,191,0.45)]">
              <Image
                src={projeto.image}
                alt={t("title")}
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="object-cover select-none"
                placeholder="blur"
                preload
              />
            </figure>
          </HeroDive>
        </section>

        <section className="mt-20 grid grid-cols-1 items-start gap-12 border-t border-white/10 pt-12 sm:mt-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-20">
          <aside className="order-2 lg:sticky lg:top-28 lg:order-1 lg:self-start">
            <h2 className="text-principal text-lg font-semibold">
              {ctaT("stack")}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2" role="list">
              {projeto.technologies.map((tech) => (
                <li
                  key={tech}
                  className="text-principal/80 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </aside>

          <FadeIn
            direction="up"
            once
            staggerChildren={0.06}
            className="order-1 lg:order-2"
          >
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-principal max-w-[68ch] text-lg leading-[1.75] text-pretty sm:text-xl"
                    : "text-principal/80 mt-6 max-w-[68ch] text-lg leading-[1.8] text-pretty"
                }
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </section>

        <nav aria-label={ctaT("nextProject")} className="mt-24 sm:mt-32">
          <Link
            href={`/projects/${next.slug}`}
            className="group hover:border-secundaria/40 flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/3 p-6 transition-colors duration-300 hover:bg-white/6 sm:p-8"
          >
            <span className="min-w-0">
              <span className="text-principal/60 block text-sm">
                {ctaT("nextProject")}
              </span>
              <span className="mt-1 block text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-bold tracking-[-0.03em]">
                {next.name}
              </span>
              <span className="text-principal/70 mt-1 block text-pretty">
                {nextT("title")}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="border-secundaria/50 group-hover:bg-secundaria flex size-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 sm:size-14"
            >
              <ArrowRightIcon
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </nav>
      </div>
    </>
  );
}
