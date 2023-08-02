"use client"
import React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { roboto_mono, russo_one } from "../../lib/font";
import { slideIn, staggerContainer, textVariant } from '../../lib/motion';
export default function ControlTech() {
  const t = useTranslations("Hero");
  const [isOpen, setIsOpen] = useState(false);
  return (

    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="flex flex-col my-4 md:mx-[75px] mx-[50px] w-full justify-center items-center text-center  ">
   <div className="">
    <span className={` ${russo_one.className} text-[36px] `} >Control Techniques Sürücüler</span>
    <div>
        card seciton
    </div>
   </div>
   <div className="flex flex-row gap-4 w-full">
<div className={` ${russo_one.className} text-[36px] text-left w-full `} >
    <span>
    Leroy Somer Motorlar
    </span>
</div>
<div className={` ${russo_one.className} text-[36px] text-right w-full`} >
    <span>
    NEXCOM IPC
    </span>
</div>
   </div>
   <div className="flex flex-row gap-4 w-full">
<div className={` ${russo_one.className} text-[36px] text-left w-full `} >
    <span>
    PLC ve Öperatör Panelleri
    </span>
</div>
<div className={` ${russo_one.className} text-[36px] text-right w-full`} >
    <span>
    Servotronix
    </span>
</div>
   </div>
   <div className="flex flex-row gap-4 w-full">
<div className={` ${russo_one.className} text-[36px] text-left w-full `} >
    <span>
    HPB Yüksek Güçlü Servo Motorlar
    </span>
</div>
<div className={` ${russo_one.className} text-[36px] text-right w-full`} >
    <span>

    </span>
</div>
   </div>
    </motion.div>

  );
}
