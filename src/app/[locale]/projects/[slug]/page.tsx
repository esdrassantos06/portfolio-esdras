import Preloader from "@/components/motion/Preloader";
import { projetos } from "@/data/projects";
import { notFound } from "next/navigation";
import { Locale } from "next-intl";
import { FadeIn } from "@/components/ui/ScrollAnimation";
import HeroDive from "@/components/motion/HeroDive";
import TechnologiesProject from "@/components/TechnologiesProject";
import ShinyButtonProject from "@/components/ui/ShinyButtonProject";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteUrl, localizedUrl, localeAlternates } from "@/i18n/url";
import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

function toParagraphs(text: string, targetLength = 340) {
  const explicit = text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (explicit.length > 1) return explicit;

  const sentences = text.split(/(?<=\.)\s+(?=[A-ZÀ-Ý])/);
  const paragraphs: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    current = current ? `${current} ${sentence}` : sentence;
    if (current.length >= targetLength) {
      paragraphs.push(current);
      current = "";
    }
  }
  if (current) paragraphs.push(current);

  return paragraphs;
}

export function generateStaticParams() {
  return Object.keys(projetos).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const projeto = projetos[slug as keyof typeof projetos];

  if (!projeto) {
    return {
      title: "Not Found",
    };
  }

  const [t, projectT] = await Promise.all([
    getTranslations({
      locale,
      namespace: `${projeto.namespace}.Metadata`,
    }),
    getTranslations({
      locale,
      namespace: projeto.namespace,
    }),
  ]);

  const url = localizedUrl(locale, `/projects/${slug}`);
  const imageUrl = `${siteUrl}${projeto.image}`;

  const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    keywords: t.has("keywords") ? t("keywords").split(", ") : undefined,
    authors: [{ name: t.has("creator") ? t("creator") : "Esdras" }],
    creator: t.has("creator") ? t("creator") : "Esdras",
    robots: {
      index: t.has("robots") && t("robots").includes("index"),
      follow: t.has("robots") && t("robots").includes("follow"),
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("title"),
      description: t("description"),
      siteName: "Esdras Portfolio",
      images: [
        {
          url: imageUrl,
          width: 1400,
          height: 1400,
          alt: projectT("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [imageUrl],
      creator: "@esdrasprft",
    },
    alternates: {
      canonical: url,
      languages: localeAlternates(`/projects/${slug}`),
    },
  };

  return metadata;
}

export default async function ProjetoPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const projeto = projetos[slug as keyof typeof projetos];

  if (!projeto) {
    notFound();
  }

  const [t, allT, ctaT] = await Promise.all([
    getTranslations(projeto.namespace),
    getTranslations("AllProjects"),
    getTranslations("ProjectCTA"),
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: projeto.name,
    applicationCategory: "WebApplication",
    description: t("description"),
    url: projeto.demo,
    codeRepository: projeto.code,
    author: {
      "@type": "Person",
      name: "Esdras Santos",
    },
    image: `${siteUrl}${projeto.image}`,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <Preloader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="w-full pb-24">
        <HeroDive>
          <header className="mx-auto flex min-h-[85vh] w-3/4 flex-col justify-center pt-32 pb-12">
            <Link
              href="/projects"
              className="hero-dive text-principal/60 hover:text-principal focus-visible:outline-principal mb-10 inline-flex w-fit items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <ArrowLeftIcon size={14} aria-hidden="true" />
              {allT("title")}
            </Link>

            <h1 className="hero-dive text-[clamp(2.5rem,9vw,7rem)] leading-[0.92] font-bold tracking-[-0.035em] text-balance">
              {projeto.name}
            </h1>

            <p className="hero-dive text-secundaria mt-6 max-w-3xl text-xl font-medium sm:text-2xl md:text-3xl">
              {t("title")}
            </p>

            <div className="hero-dive mt-12 flex w-full flex-wrap items-center gap-x-12 gap-y-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-principal/50 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
                  {ctaT("stack")}
                </p>
                <p className="mt-1 text-base">
                  {ctaT("techCount", { count: projeto.technologies.length })}
                </p>
              </div>
              <div className="ml-auto">
                <ShinyButtonProject demo={projeto.demo} code={projeto.code} />
              </div>
            </div>
          </header>
        </HeroDive>

        <FadeIn direction="up" once>
          <figure className="mx-auto w-[92%] max-w-6xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-40px_rgba(169,39,191,0.5)]">
              <Image
                src={projeto.image}
                alt={t("title")}
                fill
                sizes="92vw"
                className="object-cover select-none"
                priority
              />
            </div>
          </figure>
        </FadeIn>

        <article className="mx-auto mt-24 grid w-3/4 grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <FadeIn direction="up" once staggerChildren={0.08}>
              <h2 className="text-principal/50 font-mono text-xs tracking-[0.25em] uppercase">
                {t("overview")}
              </h2>
              <div className="mt-6">
                <TechnologiesProject
                  technologies={projeto.technologies.map((tech) => ({
                    name: tech,
                  }))}
                />
              </div>
            </FadeIn>
          </aside>

          <section>
            <FadeIn direction="up" once staggerChildren={0.08}>
              {toParagraphs(t("description")).map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-principal/90 max-w-[68ch] text-lg leading-[1.85] text-pretty ${
                    index === 0
                      ? "sm:text-xl sm:leading-[1.8]"
                      : "mt-7 sm:leading-[1.85]"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </FadeIn>
          </section>
        </article>
      </div>
    </>
  );
}
