import React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { roboto_mono, russo_one } from "../../lib/font";

export default function Hero() {
  const t = useTranslations("Hero");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex lg:flex-row flex-col mt-10 w-full justify-center items-center text-center lg:text-start relative">
      <div className="flex flex-col sm:w-[626px] font-bold lg:text-[96px] xl:text-[128px] sm:text-[96px] text-[56px] leading-none z-10">
        <span className={` ${russo_one.className} text-[#E9761F] `}>
          {t("Innovative")}
        </span>
        <span>{t("Automation")}</span>
        <span>{t("Solutions")}</span>
      </div>
      <div className="flex sm:w-[626px] sm:h-[637px]  ">
        <img
          src="https://i.ibb.co/566Fz6v/ony.png"
          alt=""
          className="object-contain sm:w-[626px] sm:h-[637px]"
        />
      </div>
    </div>
  );
}
