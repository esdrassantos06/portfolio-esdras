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
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <ScrollAnimation delayIndex={1}>
            <div className="flex flex-col w-full gap-2 items-center justify-center">
              <h1 className="font-extrabold text-6xl max-md:text-center md:text-7xl/tight">
                {projeto.slug.toUpperCase()}
              </h1>
              <p className="text-5xl sm:text-6xl md:text-7xl text-center uppercase font-normal w-fit md:w-300">
                {t("title")}
              </p>
            </div>
          </ScrollAnimation>
          <div className="arrow-down w-full mt-20 flex items-center justify-center">
            <ScrollAnimation delayIndex={2}>
              <ArrowDownIcon />
            </ScrollAnimation>
          </div>
        </div>
        <div className="flex flex-col mt-20 items-center justify-center w-4/5 mx-auto bg-fundo">
          <ScrollAnimation delayIndex={3}>
            <Image
              id="image"
              src={projeto.image}
              alt={t("title")}
              width={1400}
              height={1400}
              className="rounded-lg mx-auto select-none max-w-full w-4/5 object-cover"
            />
          </ScrollAnimation>
          <div className="pt-10 pb-20 mx-auto gap-10 mt-12 flex sm:flex-row flex-col items-center justify-between">
            <div className="flex flex-col gap-8">
              <ScrollAnimation delayIndex={4}>
                <h1 className="font-light text-5xl">{t("overview")}</h1>
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
