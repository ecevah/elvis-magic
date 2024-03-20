import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Constant from "@/constant/Constant.js";
import Ratio from "react-bootstrap/Ratio";
import YouTube from "react-youtube";

//fonts
const inter = Inter({ subsets: ["latin"] });

const OnGoingProcessCard = (props) => {
  return (
    <>
      <div className="flex flex-row justify-between items-end w-full my-[5px] max-[400px]:flex-col max-[400px]:items-start">
        <div className="flex flex-col">
          <div
            className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
          >
            {props.title}
          </div>
          <div
            className={`${inter.className} font-normal text-[#FFFFFF] text-[11px] leading-[22px]`}
          >
            {props.language == "tr"
              ? "Başlangıç:"
              : props.language == "zh"
              ? "开始:"
              : `Starts: ${props.start}`}
          </div>
        </div>
        <div className="flex flex-row items-end max-[400px]:flex-col max-[400px]:items-start">
          <div
            className={`${inter.className} font-normal text-[#FFFFFF] text-[11px] leading-[22px] mr-[20px]`}
          >
            {props.language == "tr"
              ? "Bitiş:"
              : props.language == "zh"
              ? "结束:"
              : `Ends: ${props.end}`}
          </div>
          <div
            className={`${
              inter.className
            } font-semibold text-[12.83px] leading-[15.5px] ${
              props.type == "Upcoming" ? "px-[35.5px]" : "px-[41px]"
            } py-[14px] ${
              props.type == "Finished"
                ? "text-[#E02D3C] bg-[#E02D3C26]"
                : props.type == "Ongoing"
                ? "text-[#08875D] bg-[#08875D26]"
                : "text-[#F6C347] bg-[#F6C34726]"
            } border-solid border-[1.28px] border-[#262626] rounded-[6.42px]`}
          >
            {props.type}
          </div>
        </div>
      </div>
    </>
  );
};
export default OnGoingProcessCard;
