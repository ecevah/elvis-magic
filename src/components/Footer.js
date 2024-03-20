import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Constant from "@/constant/Constant.js";
import trConstant from "@/constant/trConstant.js";
import zhConstant from "@/constant/zhConstant.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from "react-responsive-carousel";
import Carousel from "nuka-carousel";

const inter = Inter({ subsets: ["latin"] });

const Footer = (props) => {
  const constant = new Constant();
  const trconstant = new trConstant();
  const zhconstant = new zhConstant();
  return (
    <>
      <div
        className="flex flex-col w-full justify-end items-center"
        id="footer"
      >
        <div className="mb-[67px] overflow-hidden min-[760px]:hidden w-[100%]">
          <Carousel
            autoplay={true}
            autoplayInterval={2000}
            wrapAround={true}
            renderBottomCenterControls={null}
            slidesToShow={1.5}
            cellSpacing={10}
            scrollMode="remainder"
            withoutControls={false}
            pauseOnHover={true}
            renderCenterLeftControls={({ previousSlide }) => null}
            renderCenterRightControls={({ nextSlide }) => null}
            cellAlign="center"
          >
            <div>
              <a
                href={constant.footerCard[0].link}
                className="w-[238px] h-[72px] rounded-[10px] bg-[#4747474D] hover:bg-[#47474773] flex flex-row justify-start items-center p-[16px] mx-[25px] my-[25px] cursor-pointer max-[1166px]:mx-[10px] max-[1166px]:my-[10px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[40px] h-[40px] bg-[#0000004D] flex justify-center items-center rounded-full mr-[16px]">
                  <Image
                    src={constant.footerCard[0].icon}
                    width={16}
                    height={15}
                    alt=""
                    id="caroserImg"
                  />
                </div>
                <div className="h-full flex flex-col justify-between ">
                  <div
                    className={`${inter.className} font-medium text-[#FAFAFA] text-[14px] leading-[15px] cursor-default`}
                  >
                    {props.language == "tr"
                      ? trconstant.footerCard[0].title
                      : props.language == "zh"
                      ? zhconstant.footerCard[0].title
                      : constant.footerCard[0].title}
                  </div>
                  <div
                    className={`${inter.className} font-medium text-[#737373] text-[12px] leading-[17px] cursor-default`}
                  >
                    {constant.footerCard[0].path}
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                className="w-[238px] h-[72px] rounded-[10px] bg-[#4747474D] hover:bg-[#47474773] flex flex-row justify-start items-center p-[16px] mx-[25px] my-[25px] cursor-pointer max-[1166px]:mx-[10px] max-[1166px]:my-[10px]"
                href={constant.footerCard[1].link}
              >
                <div className="w-[40px] h-[40px] bg-[#2BABEE4D] flex justify-center items-center rounded-full mr-[16px]">
                  <Image
                    src={constant.footerCard[1].icon}
                    width={16}
                    height={15}
                    alt=""
                    id="caroserImg"
                  />
                </div>
                <div className="h-full flex flex-col justify-between ">
                  <div
                    className={`${inter.className} font-medium text-[#FAFAFA] text-[14px] leading-[15px] cursor-default`}
                  >
                    {props.language == "tr"
                      ? trconstant.footerCard[1].title
                      : props.language == "zh"
                      ? zhconstant.footerCard[1].title
                      : constant.footerCard[1].title}
                  </div>
                  <div
                    className={`${inter.className} font-medium text-[#737373] text-[12px] leading-[17px] cursor-default`}
                  >
                    {constant.footerCard[1].path}
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                className="w-[238px] h-[72px] rounded-[10px] bg-[#4747474D] hover:bg-[#47474773] flex flex-row justify-start items-center p-[16px] mx-[25px] my-[25px] cursor-pointer max-[1166px]:mx-[10px] max-[1166px]:my-[10px]"
                href={constant.footerCard[2].link}
              >
                <div className="w-[40px] h-[40px] bg-[#ED58904D] flex justify-center items-center rounded-full mr-[16px]">
                  <Image
                    src={constant.footerCard[2].icon}
                    width={16}
                    height={15}
                    alt=""
                    id="caroserImg"
                  />
                </div>
                <div className="h-full flex flex-col justify-between ">
                  <div
                    className={`${inter.className} font-medium text-[#FAFAFA] text-[14px] leading-[15px] cursor-default`}
                  >
                    {props.language == "tr"
                      ? trconstant.footerCard[2].title
                      : props.language == "zh"
                      ? zhconstant.footerCard[2].title
                      : constant.footerCard[2].title}
                  </div>
                  <div
                    className={`${inter.className} font-medium text-[#737373] text-[12px] leading-[17px] cursor-default`}
                  >
                    {constant.footerCard[2].path}
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                className="w-[238px] h-[72px] rounded-[10px] bg-[#4747474D] hover:bg-[#47474773] flex flex-row justify-start items-center p-[16px] mx-[25px] my-[25px] cursor-pointer max-[1166px]:mx-[10px] max-[1166px]:my-[10px]"
                href={constant.footerCard[3].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={constant.footerCard[3].icon}
                  width={40}
                  height={40}
                  alt=""
                  className="mr-[16px]"
                  id="elvisLogo"
                />
                <div className="h-full flex flex-col justify-between ">
                  <div
                    className={`${inter.className} font-medium text-[#FAFAFA] text-[14px] leading-[15px] cursor-default`}
                  >
                    {props.language == "tr"
                      ? trconstant.footerCard[3].title
                      : props.language == "zh"
                      ? zhconstant.footerCard[3].title
                      : constant.footerCard[3].title}
                  </div>
                  <div
                    className={`${inter.className} font-medium text-[#737373] text-[12px] leading-[17px] cursor-default`}
                  >
                    {constant.footerCard[3].path}
                  </div>
                </div>
              </a>
            </div>
          </Carousel>
        </div>
        <div className="mb-[67px] overflow-hidden max-[760px]:hidden">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className={
              props.index == 3
                ? props.pageCheck || props.pageOnCheck
                  ? `flex flex-row overflow-hidden`
                  : `hidden`
                : `flex flex-row overflow-hidden`
            }
          >
            <div className="flex flex-row max-[1166px]:flex-col ">
              <a
                href={constant.footerCard[0].link}
                className="w-[238px] h-[72px] rounded-[10px] bg-[#4747474D] hover:bg-[#47474773] flex flex-row justify-start items-center p-[16px] mx-[25px] my-[25px] cursor-pointer max-[1166px]:mx-[10px] max-[1166px]:my-[10px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[40px] h-[40px] bg-[#0000004D] flex justify-center items-center rounded-full mr-[16px]">
                  <Image
                    src={constant.footerCard[0].icon}
                    width={16}
                    height={15}
                    alt=""
                  />
                </div>
                <div className="h-full flex flex-col justify-between ">
                  <div
                    className={`${inter.className} font-medium text-[#FAFAFA] text-[14px] leading-[15px] cursor-default`}
                  >
                    {props.language == "tr"
                      ? trconstant.footerCard[0].title
                      : props.language == "zh"
                      ? zhconstant.footerCard[0].title
                      : constant.footerCard[0].title}
                  </div>
                  <div
                    className={`${inter.className} font-medium text-[#737373] text-[12px] leading-[17px] cursor-default`}
                  >
                    {constant.footerCard[0].path}
                  </div>
                </div>
              </a>
              <a
                className="w-[238px] h-[72px] rounded-[10px] bg-[#4747474D] hover:bg-[#47474773] flex flex-row justify-start items-center p-[16px] mx-[25px] my-[25px] cursor-pointer max-[1166px]:mx-[10px] max-[1166px]:my-[10px]"
                href={constant.footerCard[1].link}
              >
                <div className="w-[40px] h-[40px] bg-[#2BABEE4D] flex justify-center items-center rounded-full mr-[16px]">
                  <Image
                    src={constant.footerCard[1].icon}
                    width={16}
                    height={15}
                    alt=""
                  />
                </div>
                <div className="h-full flex flex-col justify-between ">
                  <div
                    className={`${inter.className} font-medium text-[#FAFAFA] text-[14px] leading-[15px] cursor-default`}
                  >
                    {props.language == "tr"
                      ? trconstant.footerCard[1].title
                      : props.language == "zh"
                      ? zhconstant.footerCard[1].title
                      : constant.footerCard[1].title}
                  </div>
                  <div
                    className={`${inter.className} font-medium text-[#737373] text-[12px] leading-[17px] cursor-default`}
                  >
                    {constant.footerCard[1].path}
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-row max-[1166px]:flex-col">
              <a
                className="w-[238px] h-[72px] rounded-[10px] bg-[#4747474D] hover:bg-[#47474773] flex flex-row justify-start items-center p-[16px] mx-[25px] my-[25px] cursor-pointer max-[1166px]:mx-[10px] max-[1166px]:my-[10px]"
                href={constant.footerCard[2].link}
              >
                <div className="w-[40px] h-[40px] bg-[#ED58904D] flex justify-center items-center rounded-full mr-[16px]">
                  <Image
                    src={constant.footerCard[2].icon}
                    width={16}
                    height={15}
                    alt=""
                  />
                </div>
                <div className="h-full flex flex-col justify-between ">
                  <div
                    className={`${inter.className} font-medium text-[#FAFAFA] text-[14px] leading-[15px] cursor-default`}
                  >
                    {props.language == "tr"
                      ? trconstant.footerCard[2].title
                      : props.language == "zh"
                      ? zhconstant.footerCard[2].title
                      : constant.footerCard[2].title}
                  </div>
                  <div
                    className={`${inter.className} font-medium text-[#737373] text-[12px] leading-[17px] cursor-default`}
                  >
                    {constant.footerCard[2].path}
                  </div>
                </div>
              </a>
              <a
                className="w-[238px] h-[72px] rounded-[10px] bg-[#4747474D] hover:bg-[#47474773] flex flex-row justify-start items-center p-[16px] mx-[25px] my-[25px] cursor-pointer max-[1166px]:mx-[10px] max-[1166px]:my-[10px]"
                href={constant.footerCard[3].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={constant.footerCard[3].icon}
                  width={40}
                  height={40}
                  alt=""
                  className="mr-[16px]"
                />
                <div className="h-full flex flex-col justify-between ">
                  <div
                    className={`${inter.className} font-medium text-[#FAFAFA] text-[14px] leading-[15px] cursor-default`}
                  >
                    {props.language == "tr"
                      ? trconstant.footerCard[3].title
                      : props.language == "zh"
                      ? zhconstant.footerCard[3].title
                      : constant.footerCard[3].title}
                  </div>
                  <div
                    className={`${inter.className} font-medium text-[#737373] text-[12px] leading-[17px] cursor-default`}
                  >
                    {constant.footerCard[3].path}
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
        <section className="w-full flex flex-row justify-between items-center px-[24.5px] pb-[18px]">
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
              {props.language == "tr"
                ? "2023 - Tüm hakları saklıdır."
                : props.language == "zh"
                ? "2023 - 保留所有权利。"
                : "2023 - All rights reserved."}
            </p>
          </div>
          <Link
            href={""}
            className={`${inter.className} font-normal text-[#737373] text-[12px] leading-[15px]`}
          >
            {props.language == "tr"
              ? "Gizlilik Politikası"
              : props.language == "zh"
              ? "隐私政策"
              : "Privacy Policy"}
          </Link>
        </section>
      </div>
    </>
  );
};

export default Footer;
