"use client"
import React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { roboto_mono, russo_one } from "../../lib/font";
import { slideIn, staggerContainer, textVariant } from '../../lib/motion';
export default function Hero() {
  const t = useTranslations("Hero");
  const [isOpen, setIsOpen] = useState(false);
  return (

    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="flex lg:flex-row flex-col mt-10 w-full justify-center items-center text-center lg:text-start relative">
      <div className="flex flex-col sm:w-[626px] font-bold lg:text-[96px] xl:text-[128px] sm:text-[96px] text-[56px] leading-none z-10">
        <motion.span variants={textVariant(1.1)} className={` ${russo_one.className} text-[#E9761F] `}>
          {t("Innovative")}
        </motion.span>
        <motion.span  variants={textVariant(1.2)}>{t("Automation")}</motion.span>
        <motion.span  variants={textVariant(1.2)}>{t("Solutions")}</motion.span>
      </div>
      <motion.div  variants={slideIn('right', 'tween', 0.2, 1)} className="flex sm:w-[626px] sm:h-[637px]  ">
        <img
          src="https://i.ibb.co/566Fz6v/ony.png"
          alt=""
          className="object-contain sm:w-[626px] sm:h-[637px]"
        />
      </motion.div>
    </motion.div>

  );
}
