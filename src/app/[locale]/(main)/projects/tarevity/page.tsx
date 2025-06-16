import GridBackground from "@/components/ui/GridBackground";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import Image from "next/image";
import ShinyButtonProject from "@/components/ui/ShinyButtonProject";
import TechnologiesProject from "@/components/TechnologiesProject";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

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
    robots: t("robots"),
    creator: t("creator"),
  };
}

export default function Tarevity() {
  const t = useTranslations("Tarevity");
  return (
    <main className="novahorizonte mb-20 w-full min-h-screen">
      <GridBackground />
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-col w-full gap-2 items-center justify-center">
          <ScrollAnimation delayIndex={0}>
            <h1 className="font-extrabold text-6xl uppercase max-md:text-center md:text-7xl/tight">
              TAREVITY
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={1}>
            <p className="text-5xl sm:text-6xl uppercase md:text-7xl text-center font-normal w-fit md:w-300">
              {t("title")}
            </p>
          </ScrollAnimation>
        </div>
        <div className="arrow-down w-full mt-20  flex items-center justify-center">
          <ScrollAnimation delayIndex={2}>
            <ArrowDownIcon />
          </ScrollAnimation>
        </div>
      </div>
      <div className="flex flex-col mt-20 items-center justify-center w-4/5 mx-auto bg-fundo">
        <ScrollAnimation delayIndex={3} className="rounded-lg">
          <Image
            id="image"
            src={"/projects-mockup/tarevity.png"}
            alt="Tarevity"
            width={1400}
            height={1400}
            className="rounded-lg select-none max-w-full box-border mx-auto bg-clip-border w-[80%] pointer-events-none -mt-20 sm:-mt-50 object-cover"
          />
        </ScrollAnimation>
        <div className="project-overview pt-10 gap-10 w-3/4 flex sm:flex-row flex-col items-center justify-between">
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
                    { name: "NextJS" },
                    { name: "TailwindCSS" },
                    { name: "Typescript" },
                    { name: "Supabase" },
                    { name: "Redis" },
                    { name: "NextAuth" },
                  ]}
                />
              </ScrollAnimation>
            </div>
            <ScrollAnimation delayIndex={6} className="max-sm:mb-10">
              <ShinyButtonProject
                demo="https://www.tarevity.pt/"
                code="https://github.com/esdrassantos06/tarevity"
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
