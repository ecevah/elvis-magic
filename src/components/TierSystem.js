import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import TierSystemCard from "./TierSystemCard";
import { Container, Row, Col } from "react-bootstrap";
import Constant from "@/constant/Constant.js";
import trConstant from "@/constant/trConstant.js";
import zhConstant from "@/constant/zhConstant.js";

//fonts
const inter = Inter({ subsets: ["latin"] });

const TierSystem = (props) => {
  const constant = new Constant();
  const trconstant = new trConstant();
  const zhconstant = new zhConstant();
  return (
    <>
      <motion.div
        id="tier"
        className="flex flex-col justify-start mt-[30px] h-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className={`${inter.className} font-medium text-[#FAFAFA] text-[12px] leading-[15px] tracking-[1px] cursor-default mb-[125px] ml-2 max-[1600px]:mb-[70px] max-[1600px]:ml-[20px]`}
        >
          {props.language == "tr"
            ? trconstant.tierTitle
            : props.language == "zh"
            ? zhconstant.tierTitle
            : constant.tierTitle}
        </p>
        <div className="flex flex-row mb-auto max-[810px]:flex-col max-[1600px]:mb-[50px]">
          <div className="flex flex-row max-[1310px]:flex-col">
            <TierSystemCard
              title={
                props.language == "tr"
                  ? trconstant.tierArray[0].title
                  : props.language == "zh"
                  ? zhconstant.tierArray[0].title
                  : constant.tierArray[0].title
              }
              icon={
                props.language == "tr"
                  ? trconstant.tierArray[0].icon
                  : props.language == "zh"
                  ? zhconstant.tierArray[0].icon
                  : constant.tierArray[0].icon
              }
              total={
                props.language == "tr"
                  ? trconstant.tierArray[0].total
                  : props.language == "zh"
                  ? zhconstant.tierArray[0].total
                  : constant.tierArray[0].total
              }
              number={
                props.language == "tr"
                  ? trconstant.tierArray[0].number
                  : props.language == "zh"
                  ? zhconstant.tierArray[0].number
                  : constant.tierArray[0].number
              }
              language={props.language}
            />
            <TierSystemCard
              title={
                props.language == "tr"
                  ? trconstant.tierArray[1].title
                  : props.language == "zh"
                  ? zhconstant.tierArray[1].title
                  : constant.tierArray[1].title
              }
              icon={
                props.language == "tr"
                  ? trconstant.tierArray[1].icon
                  : props.language == "zh"
                  ? zhconstant.tierArray[1].icon
                  : constant.tierArray[1].icon
              }
              total={
                props.language == "tr"
                  ? trconstant.tierArray[1].total
                  : props.language == "zh"
                  ? zhconstant.tierArray[1].total
                  : constant.tierArray[1].total
              }
              number={
                props.language == "tr"
                  ? trconstant.tierArray[1].number
                  : props.language == "zh"
                  ? zhconstant.tierArray[1].number
                  : constant.tierArray[1].number
              }
              language={props.language}
            />
          </div>
          <div className="flex flex-row max-[1310px]:flex-col">
            <TierSystemCard
              title={
                props.language == "tr"
                  ? trconstant.tierArray[2].title
                  : props.language == "zh"
                  ? zhconstant.tierArray[2].title
                  : constant.tierArray[2].title
              }
              icon={
                props.language == "tr"
                  ? trconstant.tierArray[2].icon
                  : props.language == "zh"
                  ? zhconstant.tierArray[2].icon
                  : constant.tierArray[2].icon
              }
              total={
                props.language == "tr"
                  ? trconstant.tierArray[2].total
                  : props.language == "zh"
                  ? zhconstant.tierArray[2].total
                  : constant.tierArray[2].total
              }
              number={
                props.language == "tr"
                  ? trconstant.tierArray[2].number
                  : props.language == "zh"
                  ? zhconstant.tierArray[2].number
                  : constant.tierArray[2].number
              }
              language={props.language}
            />
            <TierSystemCard
              title={
                props.language == "tr"
                  ? trconstant.tierArray[3].title
                  : props.language == "zh"
                  ? zhconstant.tierArray[3].title
                  : constant.tierArray[3].title
              }
              icon={
                props.language == "tr"
                  ? trconstant.tierArray[3].icon
                  : props.language == "zh"
                  ? zhconstant.tierArray[3].icon
                  : constant.tierArray[3].icon
              }
              total={
                props.language == "tr"
                  ? trconstant.tierArray[3].total
                  : props.language == "zh"
                  ? zhconstant.tierArray[3].total
                  : constant.tierArray[3].total
              }
              number={
                props.language == "tr"
                  ? trconstant.tierArray[3].number
                  : props.language == "zh"
                  ? zhconstant.tierArray[3].number
                  : constant.tierArray[3].number
              }
              language={props.language}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TierSystem;
