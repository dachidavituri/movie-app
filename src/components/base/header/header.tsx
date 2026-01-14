import React, { useState } from "react";
import { Link } from "react-router";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Menu, X, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChangeLanguage } from "../change-language";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Film className="h-6 w-6 text-primary" />
          <span className="bg-linear-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            MovieBox
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/movies"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("header.movies")}
          </Link>
          <Link
            to="/favorites"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("header.favorites")}
          </Link>
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
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/movies"
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-primary"
            >
              Movies
            </Link>
            <Link
              to="/favorites"
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-primary"
            >
              Favorites
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
