import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Constant from "@/constant/Constant.js";

//fonts
const inter = Inter({ subsets: ["latin"] });

const TierSystemCard = (props) => {
  const constant = new Constant();
  return (
    <>
      <div className="w-[390px] h-[190px] rounded-[12px] bg-[#171717] border-solid border-[#262626] border-[1px] p-[35px] flex flex-row items-center mx-[6px] max-[1600px]:my-[6px] max-[400px]:w-fit">
        <Image src={props.icon} width={65} height={65} alt="" />
        <div className="flex flex-col ml-[30px]">
          <p
            className={`${inter.className} font-semibold text-[#FFFFFF] text-[20px] leading-[17px] cursor-default mb-[12px]`}
          >
            {props.title}
          </p>
          <p
            className={`${inter.className} font-normal text-[#FFFFFFBF] text-[15px] leading-[18px] cursor-default mb-[12px]`}
          >
            {props.language == "tr"
              ? `Asgari miktarda bahis yapın `
              : props.language == "zh"
              ? `最少注资 `
              : `Stake a minimum of `}
            <span
              className={`${inter.className} font-semibold text-[#FFFFFF] text-[15px] leading-[18px] cursor-default`}
            >
              {props.total} $EMAGIC
            </span>
            {props.language == "tr"
              ? ` aylık `
              : props.language == "zh"
              ? ` 一个月 `
              : " for a month"}
          </p>
          <p
            className={`${inter.className} font-semibold text-[#FFFFFFBF] text-[13px] leading-[17px] cursor-default mb-3`}
          >
            {props.language == "tr"
              ? `SENİN HİSSEN `
              : props.language == "zh"
              ? `您的股份 `
              : "YOUR STAKE"}
          </p>
          <p
            className={`${inter.className} font-semibold text-[#FFFFFF] text-[30px] leading-[17px] cursor-default`}
          >
            {props.number}{" "}
            <span
              className={`${inter.className} font-medium text-[#FFFFFF] text-[16px] leading-[17px] cursor-default`}
            >
              $EMAGIC
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default TierSystemCard;
