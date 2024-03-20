import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

//fonts
const inter = Inter({ subsets: ["latin"] });

function Prepared() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col">
        <div className="h-[calc(100vh-36px)] flex justify-center items-center max-[560px]:scale-75 max-[400px]:scale-50 scale-75">
          <motion.div
            className="flex flex-col justify-end bg-[url('/images/bgPrepared.svg')] bg-no-repeat bg-center w-[1120px] h-[570px] items-center"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={"/images/elvishLogo.svg"}
              width={200}
              height={200}
              alt=""
            />
            <div
              className={`${inter.className} font-normal text-[#F83866] text-[11px] leading-[15px] tracking-wide cursor-default text-center mt-[20px]`}
            >
              ELVISHMAGIC METAVERSE
            </div>
            <div
              className={`${inter.className} font-bold text-[#FAFAFA] text-[48px] leading-[58px] tracking-wide cursor-default text-center my-[20px] w-[510px]`}
            >
              This page is being prepared
            </div>
            <div
              className={`${inter.className} font-normal text-[#737373] text-[14px] leading-[17px] tracking-wide cursor-default text-center  w-[510px] mb-[30px]`}
            >
              This page is dedicated to exploring the vast and dynamic realm of
              the metaverse, offering in-depth insights, updates, and engaging
              content to keep you informed and inspired within this
              ever-evolving digital landscape.
            </div>
            <a
              href="/"
              id="idoBtn"
              className={`${inter.className} font-medium text-[#FFFFFF] text-[16px] leading-[24px] tracking-wide cursor-pointer text-center px-[25px] py-[12px]`}
            >
              Home Page
            </a>
          </motion.div>
        </div>
        <div className="flex flex-row justify-between items-start px-[25px] pb-[18px] max-[400px]:scale-50">
          <div className="flex flex-row items-center">
            <Image
              src={"/images/footerLogo.svg"}
              width={80}
              height={17}
              alt=""
            />
            <div className="h-[5px] w-[5px] mx-[5px] rounded-full bg-[#737373]"></div>
            <p
              className={`${inter.className} font-normal text-[#737373] text-[12px] leading-[15px] cursor-default`}
            >
              2023 - All rights reserved.
            </p>
          </div>
          <Link
            href={""}
            className={`${inter.className} font-normal text-[#737373] text-[12px] leading-[15px]`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
}

export default Prepared;
