"use client";

import { useState, useEffect } from "react";
import "@/app/css/additional-styles/utility-patterns.css";

import MobileMenu from "./mobile-menu";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed bg-white w-full text-white z-30 md:bg-opacity-90 transition duration-300 ease-in-out dark:bg-[#222] ${
        !top
          ? "bg-white text-gray-700 dark:bg-[#222] backdrop-blur-sm dark:bg-opacity-90 shadow-lg"
          : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* <Logo /> */}
            <p className="font-bold text-orange-500">Sytra-CI</p>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium hover:text-blue-500 px-5 py-3 flex items-center transition duration-150 ease-in-out dark:text-white"
                >
                  Mon profil
                </Link>
              </li>
              <li>
                <Link
                  href="/recolte"
                  className="font-medium hover:text-blue-500 px-5 py-3 flex items-center transition duration-150 ease-in-out dark:text-white"
                >
                  Récolte
                </Link>
              </li>
              <li>
                <Link
                  href="/vente"
                  className="font-medium hover:text-blue-500 px-5 py-3 flex items-center transition duration-150 ease-in-out dark:text-white"
                >
                  Vente
                </Link>
              </li>
              <li>
                <Link
                  href="/etat"
                  className="font-medium hover:text-blue-500 px-5 py-3 flex items-center transition duration-150 ease-in-out dark:text-white"
                >
                  Etat
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="btn-sm text-white bg-orange-600 hover:bg-gray-800 ml-3"
                >
                  <span>Se déconnecter</span>
                  <svg
                    className="w-3 h-3 fill-white shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
