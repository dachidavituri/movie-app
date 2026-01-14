import React from "react";
import { Link } from "react-router";
import { Film, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="mt-20 border-t bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Film className="text-primary" />
            <span className="bg-linear-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              MovieBox
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("footer.description")}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">{t("footer.navigation")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-primary transition">
                {t("footer.movies")}
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-primary transition">
                {t("footer.favorites")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">{t("footer.discover")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                {t("footer.about")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">{t("footer.follow")}</h3>
          <div className="flex gap-4">
            <a className="hover:text-primary transition" href="#">
              <Github />
            </a>
            <a className="hover:text-primary transition" href="#">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
