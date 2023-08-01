import React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar() {
  const t = useTranslations("Footer");

  return (
    <div
      className={`${montserrat.className} flex items-center justify-between  my-4  bg-[#FFFBF2] `}>
      <div className="flex flex-col w-full mt-12 md:mx-[75px] sm:mx-[50px] ml-[10px]">
        <div className="flex grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 w-full">
          <Image
            alt="Onyx"
            width={150}
            height={150}
            src="/logo.png"
            className="w-[150px] h-[150px]"
          />
          <div className="flex flex-col xl:-ml-20 md:w-[370px]">
            <span className="font-bold text-[24px]">{t("AboutUs")}</span>
            <span className="sm:text-[16px] text-[16px]">
              {t("Description")}
            </span>
            <div className="flex flex-row mt-4">
              <Link href="/">
                <Image
                  width={32}
                  height={32}
                  alt="Onyx"
                  src="/social/facebook.png"
                />
              </Link>
              <Link href="/">
                <Image
                  width={32}
                  height={32}
                  alt="Onyx"
                  src="/social/youtube.png"
                />
              </Link>
              <Link href="/">
                <Image
                  width={32}
                  height={32}
                  alt="Onyx"
                  src="/social/instagram.png"
                />
              </Link>
              <Link href="/">
                <Image
                  width={32}
                  height={32}
                  alt="Onyx"
                  src="/social/mail.png"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[24px]">{t("Menu")}</span>
            <span className="text-[16px]">{t("Menu1")}</span>
            <span className="text-[16px]">{t("Menu2")}</span>
            <span className="text-[16px]">{t("Menu3")}</span>
            <span className="text-[16px]">{t("Menu4")}</span>
            <span className="text-[16px]">{t("Menu5")}</span>
          </div>
          <div className="flex flex-col space-y-4  ">
            <span className="font-bold text-[24px]">{t("Contact")}</span>
            <div className="flex flex-row gap-2">
              <Image
                width={32}
                height={32}
                alt="Onyx"
                src="/social/place.png"
              />
              <span className="text-[16px]">{t("Addres")}</span>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                width={32}
                height={32}
                alt="Onyx"
                src="/social/phone.png"
              />
              <span className="text-[16px]">{t("Phone")}</span>
            </div>
            <div className="flex flex-row gap-2">
              <Image width={32} height={32} alt="Onyx" src="/social/mail.png" />
              <span className="text-[16px]">{t("Mail")}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mx-[75px] sm:mx-[50px] ml-[10px] my-4">
          <span class="h-1 w-full bg-black"></span>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center w-full mt-4">
            <span>Copyright @2013-2023 ONIKS Inc.</span>
            <div className="flex flex-row gap-2">
              <span>developed by </span>
              <span className="text-[#E9761F]"> ayris.tech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
