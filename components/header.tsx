"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useEffect, useState, useCallback } from "react";

import { Logo } from "@/components/logo";
import { NavMobile } from "@/components/nav-mobile";

import { navLinks } from "@/constants";

export const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const handleScroll = useCallback(() => {
    setBg(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={twMerge(
        "fixed left-0 w-full py-8 z-20 transition-all duration-200",
        bg ? "py-4 lg:py-6 bg-primary" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo className="text-2xl lg:text-3xl" />
        <button
          className="text-white md:hidden"
          onClick={() => setMobileNav((prev) => !prev)}
          aria-label={
            mobileNav ? "Закрити мобільне меню" : "Відкрити мобільне меню"
          }
        >
          {mobileNav ? <CgClose size={24} /> : <CgMenuRight size={24} />}
        </button>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-x-12">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="capitalize text-white hover:border-b transition-all"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={twMerge(
            "md:hidden fixed bottom-0 w-full max-w-[80%] h-screen transition-all",
            mobileNav ? "left-0" : "-left-full"
          )}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};
