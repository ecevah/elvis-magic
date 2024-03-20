import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Constant from "@/constant/Constant.js";
import trConstant from "@/constant/trConstant.js";
import zhConstant from "@/constant/zhConstant.js";
import Ratio from "react-bootstrap/Ratio";
import YouTube from "react-youtube";

//fonts
const inter = Inter({ subsets: ["latin"] });

const NotGoingComp = (props) => {
  const constant = new Constant();
  const trconstant = new trConstant();
  const zhconstant = new zhConstant();
  const opts = {
    height: "800",
    width: "1600",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <div className="xl:w-[97%] mx-auto flex flex-col scale-[0.8] w-full mt-[-175px]">
        <a
          href={`/ongoing/auth=${props.auth}&language=${props.language}#launchpad`}
        >
          <div
            className={`${inter.className} justify-start" text-[#F83866] px-[35px] py-[10px] text-[13px] font-semibold leading-[24px] bg-[#F8386626] rounded-[8px] w-fit w-fit hover:bg-[#F8386650] cursor-pointer`}
          >
            {props.language == "tr"
              ? "LANSMANA DÖN"
              : props.language == "zh"
              ? "返回启动板"
              : "BACK TO LAUNCHPAD"}
          </div>
        </a>
        <div className="flex xl:flex-row flex-col justify-between my-[75px]">
          <div className="xl:w-[63%] w-full xl:mb-0 mb-[50px] xl:h-full h-[500px] bg-[url('/images/details.svg')] bg-center bg-cover bg-no-repeat"></div>
          <div className="flex flex-col xl:w-[35%] w-full justify-start p-[65px] bg-[#171717] border-solid border-[1.28px] border-[#262626] rounded-[12px] ">
            <div
              className={`${inter.className} font-bold text-[#FFFFFF] text-[19px] leading-[22px]`}
            >
              {props.language == "tr"
                ? "DETAYLAR"
                : props.language == "zh"
                ? "细节"
                : "DETAILS"}
            </div>
            <div className="flex flex-col my-[45px]">
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Proje Adı:"
                    : props.language == "zh"
                    ? "项目名称:"
                    : "Project name:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Fleamint
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Jeton sembolü:"
                    : props.language == "zh"
                    ? "代币符号:"
                    : "Token symbol:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  FLMC
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Satış Türü:"
                    : props.language == "zh"
                    ? "销售类型:"
                    : "Sale Type:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  IDO
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Bağış toplama zinciri:"
                    : props.language == "zh"
                    ? "筹款链:"
                    : "Fundraising chain:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  BSC
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Dağıtım zinciri:"
                    : props.language == "zh"
                    ? "分销链:"
                    : "Distribution chain:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  BSC
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Fiyat:"
                    : props.language == "zh"
                    ? "价格:"
                    : "Price:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  0.22$
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Toplam artış:"
                    : props.language == "zh"
                    ? "筹集资金总额:"
                    : "Total raise:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  50.000$
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Başlangıç ​​saati:"
                    : props.language == "zh"
                    ? "开始时间:"
                    : "Start time:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  10/09/2023 18:00
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Bitiş zamanı:"
                    : props.language == "zh"
                    ? "时间结束:"
                    : "End Date:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  12/09/2023 18:00
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  {props.language == "tr"
                    ? "Hak Kazanma:"
                    : props.language == "zh"
                    ? "归属:"
                    : "Vesting:"}
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  100% at TGE
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mx-[5.13px]">
                <Image
                  src={"/icons/instagram.svg"}
                  width={24.63}
                  height={24.63}
                  alt=""
                />
              </div>
              <div className="mx-[5.13px]">
                <Image
                  src={"/icons/x.svg"}
                  width={24.63}
                  height={24.63}
                  alt=""
                />
              </div>
              <div className="mx-[5.13px]">
                <Image
                  src={"/icons/telegram.svg"}
                  width={24.63}
                  height={24.63}
                  alt=""
                />
              </div>
              <div className="mx-[5.13px]">
                <Image
                  src={"/icons/youtube.svg"}
                  width={24.63}
                  height={24.63}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${inter.className} font-bold text-[#FFFFFF] text-[23px] leading-[22px] mb-[34px]`}
        >
          {props.language == "tr"
            ? "TANIM"
            : props.language == "zh"
            ? "描述"
            : "DESCRIPTION"}
        </div>
        <div className="flex md:flex-row flex-col justify-start items-start py-[60px] px-[50px] bg-[#171717] border-solid border-[1.28px] border-[#262626] rounded-[12px] mb-[75px] ">
          <Image
            src={"/images/flemintLogo.svg"}
            width={45}
            height={45}
            alt=""
            className="mr-[26px] md:mb-0 mb-[30px]"
          />
          <div className="flex flex-col ">
            <p
              className={`${inter.className} font-semibold text-[#FAFAFA] text-[22px] leading-[26.63px] tracking-[1%] cursor-default mb-[3px]`}
            >
              {props.language == "tr"
                ? "FLEAMINT'A GİRİŞ"
                : props.language == "zh"
                ? "佛莱明特简介"
                : "INTRODUCING FLEAMINT"}
            </p>
            <p
              className={`${inter.className} font-normal text-[#FFFFFF80] text-[12px] leading-[13.8px] tracking-[1%] cursor-default mb-[35px]`}
            >
              {props.language == "tr"
                ? "Merkezi Olmayan NFT, Staking ve Pad Entegrasyonu"
                : props.language == "zh"
                ? "去中心化 NFT、Stake 和 Pad 集成"
                : "The Decentralized NFT, Staking, and Pad Integration"}
            </p>
            <p
              className={`${inter.className} font-normal text-[#FFFFFFBF] text-[15px] leading-[17px] cursor-default mb-[35px]`}
            >
              {props.language == "tr"
                ? `FleaMint, merkezi olmayan yapıya yenilikçi bir giriş kapısı olarak duruyor
                finans dünyası, geleneksel işletmelere dönüştürücü bir fırsat sunuyor
                platformu. Misyonumuz bağış toplamada devrim yaratmak
                Web2 işletmeleri için güvenli ve verimli bir ortam sağlayan ortam
                Web3'ün potansiyelini kucaklayacak ekosistem. FleaMint ile,
                işletmeler çığır açan bir dijital klona erişim kazanıyor
                pazar yeri ve DeFi girişim yatırım fırsatları,
                Ürün ve hizmetlerin değişmezliği. Bu mümkün kılındı
                seri numaralarıyla kurulan sağlam bağlantılar aracılığıyla veya
                benzersiz bir özgünlük düzeyi yaratan benzersiz tanımlayıcılar
                ve doğrulama. Aradaki boşluğu kusursuz bir şekilde kapatarak
                geleneksel ve merkezi olmayan finans, FleaMint işletmeleri donatıyor
                Dinamik finansal ortamda başarılı olmak için gerekli araçlarla
                manzara.`
                : props.language == "zh"
                ? `FleaMint 是通向去中心化的创新门户
                金融世界，为传统企业提供变革
                平台。 我们的使命是彻底改变筹款方式
                为 Web2 企业提供安全、高效的环境
                生态系统来拥抱 Web3 的潜力。 与跳蚤薄荷一起，
                企业可以获得突破性的数字克隆
                市场和 DeFi 风险投资机会，确保
                产品和服务的不变性。 这成为可能
                通过与序列号建立的牢固连接或
                独特的标识符，创造出无与伦比的真实性
                和验证。 通过无缝弥合之间的差距
                传统和去中心化金融，FleaMint 为企业提供装备
                拥有在动态金融中蓬勃发展的基本工具
                景观。`
                : `FleaMint stands as an innovative gateway to the decentralized
                finance world, offering traditional businesses a transformative
                platform. Our mission is to revolutionize the fundraising
                landscape for Web2 businesses, providing a secure and efficient
                ecosystem to embrace the potential of Web3. With FleaMint,
                businesses gain access to a groundbreaking digital clone
                marketplace and DeFi venture investment opportunities, ensuring
                the immutability of products and services. This is made possible
                through solid connections established with serial numbers or
                unique identifiers, creating an unparalleled level of authenticity
                and verification. By seamlessly bridging the gap between
                traditional and decentralized finance, FleaMint equips businesses
                with the essential tools to thrive in the dynamic financial
                landscape.`}
            </p>
            <div className="flex flex-row justify-end">
              <div className="flex flex-row">
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
                      ? trconstant.aboutList.bottomText
                      : props.language == "zh"
                      ? zhconstant.aboutList.bottomText
                      : constant.aboutList.bottomText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-[75px] h-[500px]">
          <iframe
            className="w-full h-full"
            height="1080"
            src="https://www.youtube.com/embed/SHNLhg65K1U?si=ka3gSdYzOzb-CWxv"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default NotGoingComp;

/* 
<div className="flex flex-col mx-[160px] mx-[20px] max-[800px]:w-[100vw] max-[455px]:mx-[0px] scale-[0.8] w-full">
        <div className="w-[90%] mx-auto">
          <a href={`/ongoing/auth=${props.auth}#launchpad`}>
            <div
              className={`${inter.className} justify-start" text-[#F83866] px-[35px] py-[10px] text-[13px] font-semibold leading-[24px] bg-[#F8386626] rounded-[8px] w-fit w-fit hover:bg-[#F8386650] cursor-pointer`}
            >
              BACK TO LAUNCHPAD
            </div>
          </a>
        </div>

        <div className="flex my-[75px] mx-auto justify-center w-[90%] max-flex-wrap">
          <div className="">
            <Image
              src="/images/details.svg"
              width={1000}
              height={600}
              alt=""
              className=""
            />
          </div>
          <div className="flex flex-col justify-start p-[65px] bg-[#171717] border-solid border-[1.28px] border-[#262626] w-[515px] ml-[65px] rounded-[12px] max-[800px]:mx-auto max-[800px]:p-[25px]">
            <div
              className={`${inter.className} font-bold text-[#FFFFFF] text-[19px] leading-[22px]`}
            >
              DETAILS
            </div>
            <div className="flex flex-col my-[45px]">
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Project name:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Fleamint
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Token symbol:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  FLMC
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Sale Type:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  IDO
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Fundraising chain:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  BSC
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Distribution chain:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  BSC
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Price:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  0.22$
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Total raise:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  50.000$
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Start time:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  10/09/2023 18:00
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  End time:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  12/09/2023 18:00
                </div>
              </div>
              <div className="flex flex-row justify-between w-full my-[6px]">
                <div
                  className={`${inter.className} font-normal text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  Vesting:
                </div>
                <div
                  className={`${inter.className} font-medium text-[#FFFFFF] text-[16.67px] leading-[22px]`}
                >
                  100% at TGE
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mx-[5.13px]">
                <Image
                  src={"/icons/instagram.svg"}
                  width={24.63}
                  height={24.63}
                  alt=""
                />
              </div>
              <div className="mx-[5.13px]">
                <Image
                  src={"/icons/x.svg"}
                  width={24.63}
                  height={24.63}
                  alt=""
                />
              </div>
              <div className="mx-[5.13px]">
                <Image
                  src={"/icons/telegram.svg"}
                  width={24.63}
                  height={24.63}
                  alt=""
                />
              </div>
              <div className="mx-[5.13px]">
                <Image
                  src={"/icons/youtube.svg"}
                  width={24.63}
                  height={24.63}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${inter.className} font-bold text-[#FFFFFF] text-[23px] leading-[22px] mb-[34px] max-[1600px]:w-[1000px] max-[1600px]:mx-auto max-[1020px]:w-[800px] max-[1010px]:mx-auto max-[800px]:w-[90%] max-[800px]:mx-auto`}
        >
          DESCRIPTION
        </div>
        <div className="flex flex-row justify-start items-start py-[60px] px-[50px] bg-[#171717] border-solid border-[1.28px] border-[#262626] rounded-[12px] mb-[75px] max-[1600px]:w-[1000px] max-[1600px]:mx-auto max-[1020px]:w-[800px] max-[1010px]:mx-auto max-[800px]:w-[90%] max-[800px]:mx-auto">
          <Image
            src={"/images/flemintLogo.svg"}
            width={45}
            height={45}
            alt=""
            className="mr-[26px]"
          />
          <div className="flex flex-col ">
            <p
              className={`${inter.className} font-semibold text-[#FAFAFA] text-[22px] leading-[26.63px] tracking-[1%] cursor-default mb-[3px]`}
            >
              INTRODUCING FLEAMINT
            </p>
            <p
              className={`${inter.className} font-normal text-[#FFFFFF80] text-[12px] leading-[13.8px] tracking-[1%] cursor-default mb-[35px]`}
            >
              The Decentralized NFT, Staking, and Pad Integration
            </p>
            <p
              className={`${inter.className} font-normal text-[#FFFFFFBF] text-[15px] leading-[17px] cursor-default mb-[35px]`}
            >
              FleaMint stands as an innovative gateway to the decentralized
              finance world, offering traditional businesses a transformative
              platform. Our mission is to revolutionize the fundraising
              landscape for Web2 businesses, providing a secure and efficient
              ecosystem to embrace the potential of Web3. With FleaMint,
              businesses gain access to a groundbreaking digital clone
              marketplace and DeFi venture investment opportunities, ensuring
              the immutability of products and services. This is made possible
              through solid connections established with serial numbers or
              unique identifiers, creating an unparalleled level of authenticity
              and verification. By seamlessly bridging the gap between
              traditional and decentralized finance, FleaMint equips businesses
              with the essential tools to thrive in the dynamic financial
              landscape.
            </p>
            <div className="flex flex-row justify-end">
              <div className="flex flex-row">
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
                    {constant.aboutList.bottomText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mb-[75px] mx-auto h-[500px]">
          <iframe
            className="w-full h-full"
            height="1080"
            src="https://www.youtube.com/embed/SHNLhg65K1U?si=ka3gSdYzOzb-CWxv"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      */
