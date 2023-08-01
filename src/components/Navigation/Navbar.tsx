import React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar() {
  const t = useTranslations("Menu");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-between  my-4 md:mx-[75px] mx-[50px]">
      <Image width={50} height={50} src="/logo.png" />
      {/*Menu */}
      <div className={`${montserrat.className} lowercase hidden lg:flex gap-2`}>
        <Link href="/"> {t("Home")}</Link>
        <Link href="/"> {t("Products")}</Link>
        <Link href="/"> {t("Database")}</Link>
        <Link href="/"> {t("AboutUs")}</Link>
        <Link href="/"> {t("Contact")}</Link>
      </div>
      {/*MobileMenu
      <ul className={isOpen ? "flex" : "hidden"}>
        <li>Menussss</li>
      </ul> */}
      <button className="hidden lg:flex border border-black px-4 py-2 rounded-2xl">
        Bayi Portal
      </button>
      <div
        className="flex lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
}
