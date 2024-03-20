import React, { useState } from "react";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Constant from "@/constant/Constant.js";
import trConstant from "@/constant/trConstant.js";
import zhConstant from "@/constant/zhConstant.js";
//fonts
const inter = Inter({ subsets: ["latin"] });

const HomeCard = (props) => {
  const constant = new Constant();
  const trconstant = new trConstant();
  const zhconstant = new zhConstant();
  return (
    <>
      <div
        id="home"
        className="h-full w-full flex flex-col justify-center items-center max-[1700px]:scale-90"
      >
        <div className="mb-[45px] max-[790px]:mt-[60px] max-[550px]:mt-[0px]">
          <motion.div
            id="homeTitle"
            className="h-full w-[1000px] text-[100px] leading-[105px] text-center text-[#FFFFFF] flex flex-col max-[1000px]:w-full max-[1000px]:scale-90 max-[560px]:text-[80px] max-[560px]:leading-[85px] max-[390px]:text-[80px] max-[390px]:leading-[85px]"
          >
            <div className={props.index == 0 ? "overflow-hidden" : ""}>
              <motion.div
                initial={
                  props.check
                    ? { y: 0 }
                    : props.index == 0
                    ? { y: 105 }
                    : { y: -1500 }
                }
                animate={props.check ? { y: -1500 } : { y: 0 }}
                exit={{ y: -1500 }}
                transition={
                  props.index == 0
                    ? {
                        duration: 1,
                      }
                    : {
                        duration: 1,
                      }
                }
              >
                {props.language == "tr"
                  ? trconstant.homeTitle
                  : props.language == "zh"
                  ? zhconstant.homeTitle
                  : constant.homeTitle}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <a
          href="/prepared"
          className={props.index == 0 ? "overflow-hidden" : ""}
        >
          <motion.div
            initial={
              props.check
                ? { y: 0 }
                : props.index == 0
                ? { y: 100 }
                : { y: -1500 }
            }
            animate={props.check ? { y: -1500 } : { y: 0 }}
            exit={{ y: -1500 }}
            transition={
              props.index == 0
                ? {
                    duration: 1,
                  }
                : {
                    duration: 1,
                  }
            }
            id="joinBtn"
            className={`${inter.className} text-[#FFFFFF] font-bold text-[18px] leading-[24px] cursor-pointer px-[120px] py-[12px]`}
          >
            {props.language == "tr"
              ? trconstant.homeBtn
              : props.language == "zh"
              ? zhconstant.homeBtn
              : constant.homeBtn}
          </motion.div>
        </a>
      </div>
    </>
  );
};

export default HomeCard;
