import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Constant from "@/constant/Constant.js";
import LaunchCard from "./LaunchCard";
import LaunchProgess from "./LaunchProgess";

//fonts
const inter = Inter({ subsets: ["latin"] });

const Launch = (props) => {
  const constant = new Constant();

  const launchUpComing = [
    {
      id: "justAtry",
      logo: "/images/flemintLogo.svg",
      name: "FLEAMINT",
      shortName: "FLMC",
      one: "BSC",
      two: "BSC",
      three: "IDO",
      four: "0.22$",
      five: "50.000 USD",
      six: "BSC",
      seven: "BSC",
    },
    {
      id: "qweqw",
      logo: "/images/stshaLogo.svg",
      name: "STASHA",
      shortName: "STC",
      one: "BSC",
      two: "BSC",
      three: "IDO",
      four: "0.22$",
      five: "50.000 USD",
      six: "BSC",
      seven: "BSC",
    },
    {
      id: "qeqwex",
      logo: "/images/stshaLogo.svg",
      name: "STASHA",
      shortName: "STC",
      one: "BSC",
      two: "BSC",
      three: "IDO",
      four: "0.22$",
      five: "50.000 USD",
      six: "BSC",
      seven: "BSC",
    },
    {
      id: "justAtry",
      logo: "/images/stshaLogo.svg",
      name: "STASHA",
      shortName: "STC",
      one: "BSC",
      two: "BSC",
      three: "IDO",
      four: "0.22$",
      five: "50.000 USD",
      six: "BSC",
      seven: "BSC",
    },
  ];

  const [index, setIndex] = useState(1);

  return (
    <>
      <motion.div
        id="launch"
        className="flex flex-col w-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row justify-between items-center w-[1600px] mx-auto mb-[65px] max-[1600px]:w-[80%]  px-[30px] max-[750px]:justify-center max-[430px]:mb-[20px] max-[1440px]:w-[80%]">
          <div className="flex flex-row max-[430px]:flex-col">
            <div
              onClick={() => setIndex(0)}
              className={`${inter.className} ${
                index == 0
                  ? "bg-[#F8386626] text-[#F83866]"
                  : "bg-[#171717] text-[#FFFFFF] hover:bg-[#212121] cursor-pointer"
              } py-[10px] font-semibold text-[13px] leading-[24px] w-[132px] h-[44px] rounded-[8px] text-center items-center mx-[6px] max-[430px]:my-[5px]`}
            >
              {props.language == "tr"
                ? "DEVAM EDİYOR"
                : props.language == "zh"
                ? "进行中"
                : "ONGOING"}
            </div>
            <div
              onClick={() => setIndex(1)}
              className={`${inter.className} ${
                index == 1
                  ? "bg-[#F8386630] text-[#F83866]"
                  : "bg-[#171717] text-[#FFFFFF] hover:bg-[#212121] cursor-pointer"
              } py-[10px] font-semibold text-[13px] leading-[24px] w-[132px] h-[44px] rounded-[8px] text-center items-center mx-[6px] max-[430px]:my-[5px]`}
            >
              {props.language == "tr"
                ? "YAKLAŞAN"
                : props.language == "zh"
                ? "即将推出"
                : "UPCOMING"}
            </div>
            <div
              onClick={() => setIndex(2)}
              className={`${inter.className} ${
                index == 2
                  ? "bg-[#F8386626] text-[#F83866]"
                  : "bg-[#171717] text-[#FFFFFF] hover:bg-[#212121] cursor-pointer"
              } py-[10px] font-semibold text-[13px] leading-[24px] w-[132px] h-[44px] rounded-[8px] text-center items-center mx-[6px] max-[430px]:my-[5px]`}
            >
              {props.language == "tr"
                ? "BİTTİ"
                : props.language == "zh"
                ? "完成的"
                : "FINISHED"}
            </div>
          </div>
          <div
            id="idoBtn"
            className={`${inter.className} text-[#FFFFFF] font-bold text-[18px] leading-[24px] cursor-pointer px-[51px] py-[11px] max-[750px]:hidden`}
          >
            {props.language == "tr"
              ? "IDO'ya Başvurun"
              : props.language == "zh"
              ? "申请IDO"
              : "Apply For IDO"}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 w-[1600px] mx-auto max-[1600px]:w-fit max-[1220px]:grid-cols-2 justify-center max-[800px]:grid-cols-1">
          {index == 0 ? (
            launchUpComing.map((item, count) => (
              <LaunchProgess
                id={item.id}
                type="going"
                key={count}
                logo={item.logo}
                name={item.name}
                shortName={item.shortName}
                one={item.one}
                two={item.two}
                three={item.three}
                four={item.four}
                five={item.five}
                six={item.six}
                seven={item.seven}
                number="40"
                currentNumber="320.000"
                totalNumber="500.000"
                auth={props.auth}
                language={props.language}
              />
            ))
          ) : (
            <></>
          )}
          {index == 1 ? (
            launchUpComing.map((item, count) => (
              <LaunchCard
                id={item.id}
                key={count}
                logo={item.logo}
                name={item.name}
                shortName={item.shortName}
                one={item.one}
                two={item.two}
                three={item.three}
                four={item.four}
                five={item.five}
                six={item.six}
                seven={item.seven}
                auth={props.auth}
                language={props.language}
              />
            ))
          ) : (
            <></>
          )}
          {index == 2 ? (
            launchUpComing.map((item, count) => (
              <LaunchProgess
                id={item.id}
                type="finished"
                key={count}
                logo={item.logo}
                name={item.name}
                shortName={item.shortName}
                one={item.one}
                two={item.two}
                three={item.three}
                four={item.four}
                five={item.five}
                six={item.six}
                seven={item.seven}
                number="100"
                currentNumber="500.000"
                totalNumber="500.000"
                auth={props.auth}
                language={props.language}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Launch;
