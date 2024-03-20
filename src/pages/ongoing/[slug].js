import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer.js";
import Constant from "@/constant/Constant.js";
import trConstant from "@/constant/trConstant.js";
import zhConstant from "@/constant/zhConstant.js";
import Head from "next/head";

//fonts
const inter = Inter({ subsets: ["latin"] });

//Page
import Landing from "@/components/Landing.js";

export default function onGoing() {
  const router = useRouter();
  const [pageCheck, setPageCheck] = useState(true);
  const [index, setIndex] = useState(3);
  const [first, setFirst] = useState(354);
  const [last, setLast] = useState(354);
  const [check, setCheck] = useState(false);
  const [auth, setAuth] = useState(false);
  const [slug, setSlug] = useState("");
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("en");

  const constant = new Constant();
  const trconstant = new trConstant();
  const zhconstant = new zhConstant();

  const select = (index) => {
    setFirst(last);
    setLast(index * 118);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(router.query.slug);
    const authParam = searchParams.get("elmgc");
    const showParams = searchParams.get("sw");
    const languageParams = searchParams.get("language");
    if (showParams === "1") {
      setCheck(true);
    }
    if (authParam === "1") {
      setAuth(true);
    }
    setLanguage(languageParams);
    const hash = window.location.hash;
    console.log(hash);
    if (hash === "#launchpad") {
      setSlug("launchpad");
    } else {
      setSlug(hash);
    }
  }, [router.query.slug]);

  return (
    <>
      <Head>
        <title>Elvish Magic</title>
        <link rel="icon" href="/images/elvishLogo.svg" />
      </Head>
      <motion.div
        className="w-[100vw] h-[100vh]  bg-[#23162C] fixed z-[9999] min-[1166px]:hidden"
        initial={
          show
            ? { width: "0px", display: "none" }
            : { width: "100vw", display: "block" }
        }
        animate={
          show
            ? { width: "100vw", display: "block" }
            : { width: "0px", display: "none" }
        }
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col justify-around items-center w-full h-full">
          <div
            onClick={() => setShow(false)}
            className="flex flex-row w-full justify-between"
          >
            <div></div>
            <Image
              src={"/icons/xIcon.svg"}
              width={32}
              height={32}
              alt=""
              className="mr-[20px] ml-auto"
            />
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-[90px] h-[30px] flex justify-center items-center ${
                "" //index == 0 || index == 5 ? "bg-[#FFFFFF33]" : "bg-transparent"
              } rounded-[5px] my-[12px] cursor-pointer`}
              onClick={() => {
                if (index === 0 || index === 5) {
                } else {
                  setCheck(false);
                  setIndex(5);
                  select(0);
                  setPageCheck(false);
                  setShow(false);
                }
              }}
            >
              <div
                className={`${inter.className} font-normal text-[#FFFFFF] text-[18px] leading-[22px]`}
              >
                {language == "tr"
                  ? trconstant.header[0]
                  : language == "zh"
                  ? zhconstant.header[0]
                  : constant.header[0]}
              </div>
            </div>
            <div
              className={`w-[100px] h-[30px] flex justify-center items-center ${
                "" //index == 1 ? "bg-[#FFFFFF33]" : "bg-transparent"
              } rounded-[5px] my-[12px] cursor-pointer`}
              onClick={() => {
                if (index === 0 || index === 5) {
                  setCheck(true);
                  select(1);
                  setShow(false);
                  setTimeout(() => {
                    setIndex(1);
                    setPageCheck(false);
                  }, 1000);
                } else {
                  setCheck(true);
                  setIndex(1);
                  select(1);
                  setPageCheck(false);
                }
              }}
            >
              <div
                className={`${inter.className} font-normal text-[#FFFFFF] text-[18px] leading-[22px]`}
              >
                {language == "tr"
                  ? trconstant.header[1]
                  : language == "zh"
                  ? zhconstant.header[1]
                  : constant.header[1]}
              </div>
            </div>
            <div
              className={`w-[130px] h-[30px] flex justify-center items-center ${
                "" //index == 2 ? "bg-[#FFFFFF33]" : "bg-transparent"
              } rounded-[5px] my-[12px] cursor-pointer`}
              onClick={() => {
                if (index === 0 || index === 5) {
                  setCheck(true);
                  select(2);
                  setShow(false);
                  setTimeout(() => {
                    setIndex(2);
                    setPageCheck(false);
                  }, 1000);
                } else {
                  setCheck(true);
                  setIndex(2);
                  select(2);
                  setPageCheck(false);
                  setShow(false);
                }
              }}
            >
              <div
                className={`${inter.className} font-normal text-[#FFFFFF] text-[18px] leading-[22px]`}
              >
                {language == "tr"
                  ? trconstant.header[2]
                  : language == "zh"
                  ? zhconstant.header[2]
                  : constant.header[2]}
              </div>
            </div>
            <div
              className={`w-[100px] h-[30px] flex justify-center items-center ${
                "" //index == 3 ? "bg-[#FFFFFF33]" : "bg-transparent"
              } rounded-[5px] my-[12px] cursor-pointer`}
              onClick={() => {
                if (index === 0 || index === 5) {
                  setCheck(true);
                  select(3);
                  setShow(false);
                  setTimeout(() => {
                    setIndex(3);
                  }, 1000);
                } else {
                  setCheck(true);
                  setIndex(3);
                  select(3);
                  setShow(false);
                }
              }}
            >
              <div
                className={`${inter.className} font-normal text-[#FFFFFF] text-[18px] leading-[22px]`}
              >
                {language == "tr"
                  ? trconstant.header[3]
                  : language == "zh"
                  ? zhconstant.header[3]
                  : constant.header[3]}
              </div>
            </div>
            <div
              className={`w-[90px] h-[30px] flex justify-center items-center ${
                "" //index == 4 ? "bg-[#FFFFFF33]" : "bg-transparent"
              } rounded-[5px] my-[12px] cursor-pointer `}
              onClick={() => {
                if (index === 0 || index === 5) {
                  setCheck(true);
                  select(4);
                  setShow(false);
                  setTimeout(() => {
                    setIndex(4);
                    setPageCheck(false);
                  }, 1000);
                } else {
                  setCheck(true);
                  setIndex(4);
                  select(4);
                  setPageCheck(false);
                  setShow(false);
                }
              }}
            >
              <div
                className={`${inter.className} font-normal text-[#FFFFFF] text-[18px] leading-[22px]`}
              >
                {language == "tr"
                  ? trconstant.header[4]
                  : language == "zh"
                  ? zhconstant.header[4]
                  : constant.header[4]}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {auth ? (
              <div className="flex flex-row justify-end items-center">
                <div className="flex flex-row px-[16px] py-[12px] bg-[#000000BF] rounded-[8px] mr-[16px]">
                  <Image
                    src={"/images/bscLogo.svg"}
                    width={24}
                    height={24}
                    alt=""
                    className="mr-[8px]"
                  />
                  <div
                    className={`${inter.className} font-semibold text-[#FFFFFF] text-[14px] leading-[24px]`}
                  >
                    BSC
                  </div>
                </div>
                <div className="flex flex-row px-[16px] py-[12px] bg-[#000000BF] rounded-[8px]">
                  <p
                    className={`${inter.className} font-semibold text-[#FFFFFF] text-[14px] leading-[24px flex flex-row]`}
                  >
                    <span className="text-[#F83866]">1,581 BNB</span>{" "}
                    &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                    <p className="truncate w-[90px]">
                      {constant.walletAddress}
                      {/* Wallet Adress  */}
                    </p>
                  </p>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setAuth(true)}
                id="connectWallet"
                className="flex justify-center items-center px-[47px] py-[10px] border-solid rounded-lg border border-red-500 border-opacity-50 max-[590px]:scale-75 cursor-pointer"
              >
                <div
                  className={`${inter.className} font-bold text-[#FFFFFF] text-[14px] leading-[19px] cursor-default`}
                >
                  {language == "tr"
                    ? trconstant.header[5]
                    : language == "zh"
                    ? zhconstant.header[5]
                    : constant.header[5]}
                </div>
              </div>
            )}
            <a href="/prepared">
              <motion.div
                id="joinBtn"
                className={`${inter.className} text-[#FFFFFF] font-bold text-[18px] leading-[24px] cursor-pointer px-[120px] py-[12px] mt-[20px] max-[590px]:scale-75 max-[590px]:ml-[30px]`}
              >
                {language == "tr"
                  ? trconstant.homeBtn
                  : language == "zh"
                  ? zhconstant.homeBtn
                  : constant.homeBtn}
              </motion.div>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="w-[34vw] absolute z-0 h-[1px] top-0 left-[33vw] bg-gradient-to-r from-[#ED589000] via-[#ED5890] to-[#ED589000]"></div>
      <div>
        <div className="h-[100vh] z-[2] mt-[1px] flex flex-col justify-between items-center w-[100hw]">
          <div
            id="header"
            className={`py-[70px] flex flex-row justify-between items-center w-[1600px] mx-auto bg-transparent max-[1600px]:px-5 max-[1600px]:w-[80%] max-[1441px]:w-[80%] max-[1441px]:mx-auto`}
          >
            <Image
              src={"/images/headerLogo.svg"}
              width={185}
              height={40}
              alt=""
            />
            <div className="flex flex-row items-center max-[1166px]:hidden">
              <motion.div
                className="w-[94px] h-[30px] rounded-[5px] mx-[12px] bg-[#FFFFFF33] absolute"
                initial={{ x: first }}
                animate={{ x: last }}
                transition={{ duration: 1 }}
              ></motion.div>
              <div
                className={`w-[94px] h-[30px] flex justify-center items-center ${
                  "" //index == 0 || index == 5 ? "bg-[#FFFFFF33]" : "bg-transparent"
                } rounded-[5px] mx-[12px] cursor-pointer`}
                onClick={() => {
                  if (index === 0 || index === 5) {
                  } else {
                    setCheck(false);
                    setIndex(5);
                    select(0);
                    setPageCheck(false);
                  }
                }}
              >
                <div
                  className={`${inter.className} font-normal text-[#CACACA] text-[13px] leading-[15px]`}
                >
                  {language == "tr"
                    ? trconstant.header[0]
                    : language == "zh"
                    ? zhconstant.header[0]
                    : constant.header[0]}
                </div>
              </div>
              <div
                className={`w-[94px] h-[30px] flex justify-center items-center ${
                  "" //index == 1 ? "bg-[#FFFFFF33]" : "bg-transparent"
                } rounded-[5px] mx-[12px] cursor-pointer`}
                onClick={() => {
                  if (index === 0 || index === 5) {
                    setCheck(true);
                    select(1);
                    setTimeout(() => {
                      setIndex(1);
                      setPageCheck(false);
                    }, 1000);
                  } else {
                    setCheck(true);
                    setIndex(1);
                    select(1);
                    setPageCheck(false);
                  }
                }}
              >
                <div
                  className={`${inter.className} font-normal text-[#CACACA] text-[13px] leading-[15px]`}
                >
                  {language == "tr"
                    ? trconstant.header[1]
                    : language == "zh"
                    ? zhconstant.header[1]
                    : constant.header[1]}
                </div>
              </div>
              <div
                className={`w-[94px] h-[30px] flex justify-center items-center ${
                  "" //index == 2 ? "bg-[#FFFFFF33]" : "bg-transparent"
                } rounded-[5px] mx-[12px] cursor-pointer`}
                onClick={() => {
                  if (index === 0 || index === 5) {
                    setCheck(true);
                    select(2);
                    setTimeout(() => {
                      setIndex(2);
                      setPageCheck(false);
                    }, 1000);
                  } else {
                    setCheck(true);
                    setIndex(2);
                    select(2);
                    setPageCheck(false);
                  }
                }}
              >
                <div
                  className={`${inter.className} font-normal text-[#CACACA] text-[13px] leading-[15px]`}
                >
                  {language == "tr"
                    ? trconstant.header[2]
                    : language == "zh"
                    ? zhconstant.header[2]
                    : constant.header[2]}
                </div>
              </div>
              <div
                className={`w-[94px] h-[30px] flex justify-center items-center ${
                  "" //index == 3 ? "bg-[#FFFFFF33]" : "bg-transparent"
                } rounded-[5px] mx-[12px] cursor-pointer`}
                onClick={() => {
                  if (index === 0 || index === 5) {
                    setCheck(true);
                    select(3);
                    setTimeout(() => {
                      setIndex(3);
                      setPageCheck(true);
                    }, 1000);
                  } else {
                    setCheck(true);
                    setCheck(false);
                    setIndex(3);
                    select(3);
                  }
                }}
              >
                <div
                  className={`${inter.className} font-normal text-[#CACACA] text-[13px] leading-[15px]`}
                >
                  {language == "tr"
                    ? trconstant.header[3]
                    : language == "zh"
                    ? zhconstant.header[3]
                    : constant.header[3]}
                </div>
              </div>
              <div
                className={`w-[94px] h-[30px] flex justify-center items-center ${
                  "" //index == 4 ? "bg-[#FFFFFF33]" : "bg-transparent"
                } rounded-[5px] mx-[12px] cursor-pointer `}
                onClick={() => {
                  if (index === 0 || index === 5) {
                    setCheck(true);
                    select(4);
                    setTimeout(() => {
                      setIndex(4);
                      setPageCheck(false);
                    }, 1000);
                  } else {
                    setCheck(true);
                    setIndex(4);
                    select(4);
                    setPageCheck(false);
                  }
                }}
              >
                <div
                  className={`${inter.className} font-normal text-[#CACACA] text-[13px] leading-[15px]`}
                >
                  {language == "tr"
                    ? trconstant.header[4]
                    : language == "zh"
                    ? zhconstant.header[4]
                    : constant.header[4]}
                </div>
              </div>
            </div>
            <div className="flex flex-row max-[1166px]:hidden">
              {auth ? (
                <div className="flex flex-row justify-end items-center">
                  <div className="flex flex-row px-[16px] py-[12px] bg-[#000000BF] rounded-[8px] mr-[16px]">
                    <Image
                      src={"/images/bscLogo.svg"}
                      width={24}
                      height={24}
                      alt=""
                      className="mr-[8px]"
                    />
                    <div
                      className={`${inter.className} font-semibold text-[#FFFFFF] text-[14px] leading-[24px]`}
                    >
                      BSC
                    </div>
                  </div>
                  <div className="flex flex-row px-[16px] py-[12px] bg-[#000000BF] rounded-[8px]">
                    <p
                      className={`${inter.className} font-semibold text-[#FFFFFF] text-[14px] leading-[24px flex flex-row]`}
                    >
                      <span className="text-[#F83866]">1,581 BNB</span>{" "}
                      &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                      <p className="truncate w-[90px]">
                        {constant.walletAddress}
                        {/* Wallet Adress  */}
                      </p>
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setAuth(true)}
                  id="connectWallet"
                  className="flex justify-center items-center px-[47px] py-[10px] border-solid rounded-lg border border-red-500 border-opacity-50 cursor-pointer"
                >
                  <div
                    className={`${inter.className} font-bold text-[#FFFFFF] text-[14px] leading-[19px] cursor-default`}
                  >
                    {language == "tr"
                      ? trconstant.header[5]
                      : language == "zh"
                      ? zhconstant.header[5]
                      : constant.header[5]}
                  </div>
                </div>
              )}
              <div class="dropdown">
                <button class="dropbtn">
                  <Image
                    src={
                      language == "tr"
                        ? "/icons/flagTurkish.svg"
                        : language == "zh"
                        ? "/icons/flagChina.svg"
                        : "/icons/flagEngland.svg"
                    }
                    width={21}
                    height={35}
                    alt=""
                    className="ml-[15px]"
                  />
                </button>
                <div class="dropdown-content">
                  <a
                    onClick={() =>
                      language == "tr"
                        ? setLanguage("en")
                        : language == "zh"
                        ? setLanguage("en")
                        : setLanguage("tr")
                    }
                  >
                    <Image
                      src={
                        language == "tr"
                          ? "/icons/flagEngland.svg"
                          : language == "zh"
                          ? "/icons/flagEngland.svg"
                          : "/icons/flagTurkish.svg"
                      }
                      width={21}
                      height={35}
                      alt=""
                      className="ml-[15px]"
                    />
                  </a>
                  <a
                    onClick={() =>
                      language == "tr"
                        ? setLanguage("zh")
                        : language == "zh"
                        ? setLanguage("en")
                        : setLanguage("zh")
                    }
                  >
                    <Image
                      src={
                        language == "tr"
                          ? "/icons/flagChina.svg"
                          : language == "zh"
                          ? "/icons/flagTurkish.svg"
                          : "/icons/flagChina.svg"
                      }
                      width={21}
                      height={35}
                      alt=""
                      className="ml-[15px]"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div onClick={() => setShow(!show)} className="min-[1166px]:hidden">
              <Image
                src={"/icons/hamburger.svg"}
                width={32}
                height={32}
                alt=""
              />
            </div>
          </div>
          <Landing
            index={index}
            check={check}
            pageOnCheck={slug == "launchpad" ? false : pageCheck}
            id={router.query.slug}
            auth={auth}
            language={language}
          />
          <Footer index={index} pageOnCheck={pageCheck} language={language} />
        </div>
      </div>
    </>
  );
}
