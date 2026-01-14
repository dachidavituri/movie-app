import React from "react";
import { Link } from "react-router";
import { Film, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
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
            Discover, explore and save your favorite movies and enjoy yourself.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-primary transition">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-primary transition">
                Favorites
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Discover</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Follow Us</h3>
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
