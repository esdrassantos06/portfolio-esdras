import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TechnologiesProject from "@/components/TechnologiesProject";
import GridBackground from "@/components/ui/GridBackground";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ShinyButtonProject from "@/components/ui/ShinyButtonProject";
import { Locale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale,
    namespace: "PhantomCode.Metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    robots: t("robots"),
    creator: t("creator"),
  };
}

export default function PhantomCode() {
  const t = useTranslations("PhantomCode");
  return (
    <>
    <Navbar />
      <main className="phantomcode pt-40 w-full">
        <GridBackground />
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col w-full gap-2 items-center justify-center">
            <ScrollAnimation delayIndex={0}>
              <h1 className="font-extrabold uppercase text-6xl max-md:text-center md:text-7xl/tight">
                Phantom Code
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delayIndex={1}>
              <p className="text-5xl sm:text-6xl uppercase md:text-7xl text-center font-normal w-fit md:w-300">
                {t("title")}
              </p>
            </ScrollAnimation>
          </div>
          <div className="arrow-down w-full mt-10 mb-40 flex items-center justify-center">
            <ScrollAnimation delayIndex={2}>
              <ArrowDownIcon />
            </ScrollAnimation>
          </div>
        </div>
        <div className="flex flex-col pt-20 pb-20 items-center min-h-screen justify-center w-4/5 mx-auto bg-fundo">
          <ScrollAnimation delayIndex={3} className="rounded-lg">
            <Image
              id="image"
              src={"/projects-mockup/phantomcode.png"}
              alt="Phantom Code"
              width={1400}
              height={1400}
              className="rounded-lg select-none max-w-full box-border mx-auto bg-clip-border w-[80%] pointer-events-none -mt-20 sm:-mt-50 object-cover"
            />
          </ScrollAnimation>
          <div className="project-overview w-4/5 gap-10 mt-12 flex sm:flex-row flex-col items-center justify-between">
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
                      { name: "Electron" },
                      { name: "TailwindCSS" },
                      { name: "OpenAI API" },
                    ]}
                  />
                </ScrollAnimation>
              </div>
              <ScrollAnimation delayIndex={6} className="max-sm:mb-10">
                <ShinyButtonProject demo="https://phantomcode.site" />
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
      <Footer />
    </>
  );
}
