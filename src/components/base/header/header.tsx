import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Menu, X, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChangeLanguage } from "../change-language";
import { useTranslation } from "react-i18next";
import { MAIN_PATH } from "@/routes/default-layout/main/index.enum";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const getNavLinkClass = (isActive: boolean) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-red-500 underline" : "hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to={MAIN_PATH.HOME}
          className="flex items-center gap-2 font-bold text-xl"
        >
          <Film className="h-6 w-6 text-primary" />
          <span className="bg-linear-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            MovieBox
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to={MAIN_PATH.HOME}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {t("header.home")}
            </NavLink>

            <NavLink
              to={MAIN_PATH.MOVIES}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {t("header.movies")}
            </NavLink>

            <NavLink
              to={MAIN_PATH.FAVORITES}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {t("header.favorites")}
            </NavLink>
          </nav>
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <ChangeLanguage />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 p-4">
            <NavLink
              to={MAIN_PATH.HOME}
              onClick={() => setOpen(false)}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {t("header.home")}
            </NavLink>
            <NavLink
              to={MAIN_PATH.MOVIES}
              onClick={() => setOpen(false)}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {t("header.movies")}
            </NavLink>
            <NavLink
              to={MAIN_PATH.FAVORITES}
              onClick={() => setOpen(false)}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {t("header.favorites")}
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
