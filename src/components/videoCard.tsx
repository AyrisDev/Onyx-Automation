import React from "react";
import Video from "lib/products/video.json";
import { useTranslations } from "next-intl";
import { russo_one } from "../lib/font";
import YouTube from "react-youtube";

const opts = {
  height: "200",
  width: "275",
  playerVars: {
    autoplay: 0,
  },
};
const videoCard = () => {
  const t = useTranslations("PageLayout");
  const n = useTranslations("Videos");

  return (
    <div className="flex  ">
      <div className="my-[45px] w-full md:mx-[75px] sm:mx-[50px] ml-[10px]">
        <div className="flex justify-center items-center text-center w-full">
          <span className={` ${russo_one.className} text-[36px]`}>
            {t("videoCard")}
          </span>
        </div>

        <div className="gap-2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols mt-8 ">
          {Video.map((video) => (
            <div
              className="bg-[#FEEECC] md:h-[450px] p-4 flex flex-col  items-center"
              key={video.id}>
              <YouTube videoId={video.id} opts={opts} />
              <span
                className={` ${russo_one.className} text-[16px] mt-4 text-left w-full`}>
                {n(`${video.title}`)}
              </span>
              <span className="text-left text-[12px] w-full ">
                {n(`${video.description}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default videoCard;
