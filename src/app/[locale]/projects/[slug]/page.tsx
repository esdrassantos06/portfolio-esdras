import { projetos } from "@/data/projects";
import { notFound } from "next/navigation";
import { Locale } from "next-intl";
import GridBackground from "@/components/ui/GridBackground";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import TechnologiesProject from "@/components/TechnologiesProject";
import ShinyButtonProject from "@/components/ui/ShinyButtonProject";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

type metadataProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateMetadata({ params }: metadataProps) {
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

  const metadata: Metadata = {
    title: t("title"),
    description: t("description"),
  };

  if (t.has("keywords")) metadata.keywords = t("keywords");
  if (t.has("robots")) metadata.robots = t("robots");
  if (t.has("creator")) metadata.creator = t("creator");

  return metadata;
}

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;
  const projeto = projetos[slug as keyof typeof projetos];

  if (!projeto) {
    notFound();
  }

  const t = await getTranslations(projeto.namespace);

  return (
    <>
      <Navbar />
      <main className="w-full pt-20">
        <GridBackground />
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <ScrollAnimation delayIndex={1}>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <h1 className="text-6xl font-extrabold max-md:text-center md:text-7xl/tight">
                {projeto.slug.toUpperCase()}
              </h1>
              <p className="w-fit text-center text-5xl font-normal uppercase sm:text-6xl md:w-300 md:text-7xl">
                {t("title")}
              </p>
            </div>
          </ScrollAnimation>
          <div className="arrow-down mt-20 flex w-full items-center justify-center">
            <ScrollAnimation delayIndex={2}>
              <ArrowDownIcon />
            </ScrollAnimation>
          </div>
        </div>
        <div className="bg-fundo mx-auto mt-20 flex w-4/5 flex-col items-center justify-center">
          <ScrollAnimation delayIndex={3}>
            <Image
              id="image"
              src={projeto.image}
              alt={t("title")}
              width={1400}
              height={1400}
              className="mx-auto w-4/5 max-w-full rounded-lg object-cover select-none"
            />
          </ScrollAnimation>
          <div className="mx-auto mt-12 flex flex-col items-center justify-between gap-10 pt-10 pb-20 sm:flex-row">
            <div className="flex flex-col gap-8">
              <ScrollAnimation delayIndex={4}>
                <h1 className="text-5xl font-light">{t("overview")}</h1>
              </ScrollAnimation>
              <ScrollAnimation delayIndex={5}>
                <TechnologiesProject
                  technologies={projeto.technologies.map((tech) => ({
                    name: tech,
                  }))}
                />
              </ScrollAnimation>
              <ScrollAnimation delayIndex={6}>
                <ShinyButtonProject demo={projeto.demo} code={projeto.code} />
              </ScrollAnimation>
            </div>
            <div className="md:w-1/2">
              <ScrollAnimation delayIndex={7}>
                <p>{t("description")}</p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
