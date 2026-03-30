import { projetos } from "@/data/projects";
import { notFound } from "next/navigation";
import { Locale } from "next-intl";
import GridBackground from "@/components/ui/GridBackground";
import { FadeIn } from "@/components/ui/ScrollAnimation";
import TechnologiesProject from "@/components/TechnologiesProject";
import ShinyButtonProject from "@/components/ui/ShinyButtonProject";
import Image from "next/image";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

type metadataProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateMetadata({
  params,
}: metadataProps): Promise<Metadata> {
  const { locale, slug } = await params;

  const projeto = projetos[slug as keyof typeof projetos];

  if (!projeto) {
    return {
      title: "Not Found",
    };
  }

  const t = await getTranslations({
    locale,
    namespace: `${projeto.namespace}.Metadata`,
  });

  const projectT = await getTranslations({
    locale,
    namespace: projeto.namespace,
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://portfolioesdras.com";
  const url = `${baseUrl}/${locale}/projects/${slug}`;
  const imageUrl = `${baseUrl}${projeto.image}`;

  const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
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
      languages: {
        "x-default": `${baseUrl}/en/projects/${slug}`,
        en: `${baseUrl}/en/projects/${slug}`,
        pt: `${baseUrl}/pt/projects/${slug}`,
        es: `${baseUrl}/es/projects/${slug}`,
        fr: `${baseUrl}/fr/projects/${slug}`,
        de: `${baseUrl}/de/projects/${slug}`,
      },
    },
  };

  return metadata;
}

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;
  const projeto = projetos[slug as keyof typeof projetos];

  if (!projeto) {
    notFound();
  }

  const t = await getTranslations(projeto.namespace);
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://portfolioesdras.com";
  const url = `${baseUrl}/projects/${slug}`;

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
    image: `${baseUrl}${projeto.image}`,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full">
        <GridBackground />

        <header className="flex min-h-screen w-full flex-col items-center justify-center">
          <FadeIn direction="up" once>
            <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-4xl font-extrabold sm:text-6xl md:text-7xl/tight">
                {projeto.name.toUpperCase()}
              </h1>
              <p className="text-principal/70 max-w-2xl text-xl font-normal uppercase sm:text-2xl md:text-3xl">
                {t("title")}
              </p>
            </div>
          </FadeIn>
          <div className="mt-10 flex w-full items-center justify-center sm:mt-20">
            <FadeIn direction="up" once>
              <ArrowDownIcon />
            </FadeIn>
          </div>
        </header>

        <article className="bg-fundo w-full pt-16 pb-24">
          <div className="mx-auto w-3/4">
            <FadeIn direction="up" once>
              <div className="mx-auto w-full overflow-hidden rounded-2xl bg-[#141414] sm:w-3/4 md:w-2/3">
                <Image
                  id="image"
                  src={projeto.image}
                  alt={t("title")}
                  width={1400}
                  height={1400}
                  className="w-full rounded-2xl object-contain select-none"
                  priority
                />
              </div>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <aside>
                <FadeIn
                  className="flex flex-col gap-8"
                  direction="up"
                  once
                  staggerChildren={0.1}
                >
                  <h2 className="text-4xl font-light">{t("overview")}</h2>
                  <TechnologiesProject
                    technologies={projeto.technologies.map((tech) => ({
                      name: tech,
                    }))}
                  />
                  <ShinyButtonProject demo={projeto.demo} code={projeto.code} />
                </FadeIn>
              </aside>

              <section>
                <FadeIn direction="up" once>
                  <p className="text-principal/90 text-justify text-lg leading-relaxed">
                    {t("description")}
                  </p>
                </FadeIn>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
