import React from "react";
import { useTranslation } from "react-i18next";
import { MAIN_PATH } from "@/routes/default-layout/main/index.enum";
import { aboutFeatures } from "@/data";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 flex flex-col bg-linear-to-b from-red-600 via-red-500 to-red-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white transition-colors duration-500">
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-r from-yellow-300 to-white dark:from-yellow-400 dark:to-yellow-200">
          {t("about.title")}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/90 dark:text-gray-300">
          {t("about.description")}
        </p>
      </section>

      <section className="container mx-auto px-4 py-24 grid gap-12 md:grid-cols-3 text-center">
        {aboutFeatures.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 p-6 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl shadow-lg transition-transform hover:scale-105"
            >
              <Icon className="h-12 w-12 text-yellow-400 dark:text-yellow-300" />
              <h3 className="text-2xl font-semibold text-white dark:text-gray-100">
                {t(`${feature.key}.title`)}
              </h3>
              <p className="text-white/80 dark:text-gray-300">
                {t(`${feature.key}.description`)}
              </p>
            </div>
          );
        })}
      </section>

      <section className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-3xl mx-4 md:mx-32 my-24 p-12 text-center shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300 dark:text-yellow-400">
          {t("about.cta.title")}
        </h2>
        <p className="text-white/90 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {t("about.cta.description")}
        </p>
        <a
          href={MAIN_PATH.MOVIES}
          className="inline-block rounded-lg bg-yellow-400 dark:bg-yellow-300 px-8 py-4 text-lg font-semibold text-red-700 dark:text-gray-900 shadow-md transition-all duration-200 hover:bg-yellow-500 dark:hover:bg-yellow-400"
        >
          {t("about.cta.button")}
        </a>
      </section>
    </div>
  );
};

export default About;
