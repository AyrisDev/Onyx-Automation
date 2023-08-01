import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

type Cards = {
  title?: any;
  subTitle?: any;
  description?: any;
  section?: any;
  image?: any;
};

// eslint-disable-next-line func-style
const card = ({ description, image, section, subTitle, title }: Cards) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("CardButton");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const n: any = useTranslations(section);
  return (
    <div className="md:h-[400px] md:w-[272px] bg-white flex justify-center shadow-lg relative">
      <div className="m-4">
        <div className="flex flex-col justify-center text-center items-center">
          <Image
            alt="test"
            className="w-[154px] h-[162px] "
            height={162}
            src={image}
            width={154}
          />
          <span className="mt-4 font-bold text-[18px]"> {n(`${title}`)}</span>
          <span className="mt-1 text-[14px]"> {n(`${subTitle}`)}</span>
          <span className="mt-1 text-[12px] flex-shrink-0">
            {n(`${description}`)}
          </span>
          <div className="md:absolute  md:bottom-2  ">
            <div className="flex flex-row mt-8 gap-4 ">
              <button className="bg-[#E9761F] rounded-lg p-2 text-white w-24 h-10 hover:bg-[#FEEECC] hover:text-black">
                {t("Details")}
              </button>
              <button className="bg-[#E9761F] rounded-lg p-2 text-white w-24 h-10 hover:bg-[#FEEECC] hover:text-black">
                {t("Catalog")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
