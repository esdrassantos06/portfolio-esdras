import GridBackground from "@/components/ui/GridBackground";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import Image from "next/image";
import ShinyButtonProject from "@/components/ui/ShinyButtonProject";
import TechnologiesProject from "@/components/TechnologiesProject";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { getTranslations } from "next-intl/server";
import { Locale, useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale,
    namespace: "NovaHorizonte.Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    robots: t("robots"),
    creator: t("creator"),
  };
}

export default function Novahorizonte() {
  const t = useTranslations("NovaHorizonte");

  return (
    <main className="novahorizonte mb-20 w-full min-h-screen">
      <GridBackground />
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-col w-full gap-2 items-center justify-center">
          <ScrollAnimation delayIndex={0}>
            <h1 className="font-extrabold text-6xl max-md:text-center md:text-7xl/tight">
              NOVA HORIZONTE
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={1}>
            <p className="text-5xl sm:text-6xl md:text-7xl text-center uppercase font-normal w-fit md:w-300">
              {t("title")}
            </p>
          </ScrollAnimation>
        </div>
        <div className="arrow-down w-full mt-20 flex items-center justify-center">
          <ScrollAnimation delayIndex={2}>
            <ArrowDownIcon />
          </ScrollAnimation>
        </div>
      </div>
      <div className="flex flex-col mt-20 items-center justify-center w-4/5 mx-auto bg-fundo">
        <ScrollAnimation delayIndex={3} className="rounded-lg">
          <Image
            id="image"
            src={"/projects-mockup/novahorizonte.png"}
            alt="Nova Horizonte"
            width={1400}
            height={1400}
            className="rounded-lg select-none max-w-full box-border mx-auto bg-clip-border w-[80%] pointer-events-none -mt-20 sm:-mt-50 object-cover"
          />
        </ScrollAnimation>
        <div className="project-overview pt-10 w-3/4 gap-10 mt-12 flex sm:flex-row flex-col items-center justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <ScrollAnimation delayIndex={4}>
                <h1 className="font-light max-sm:text-center text-5xl">
                  {t("overview")}
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delayIndex={5}>
                <TechnologiesProject
                  technologies={[
                    { name: "React" },
                    { name: "TailwindCSS" },
                    { name: "shadcn/ui" },
                    { name: "Vite" },
                  ]}
                />
              </ScrollAnimation>
            </div>
            <ScrollAnimation delayIndex={6} className="max-sm:mb-10">
              <ShinyButtonProject
                demo="https://novahorizonte.vercel.app/"
                code="https://github.com/esdrassantos06/novahorizonte"
              />
            </ScrollAnimation>
          </div>
          <div className="md:w-1/2">
            <ScrollAnimation delayIndex={6}>
              <p>{t("description")}</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </main>
  );
}
