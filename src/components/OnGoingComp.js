import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Constant from "@/constant/Constant.js";
import trConstant from "@/constant/trConstant.js";
import zhConstant from "@/constant/zhConstant.js";
import Ratio from "react-bootstrap/Ratio";
import YouTube from "react-youtube";
import OnGoingProcessCard from "./OnGoingProcessCard";

//fonts
const inter = Inter({ subsets: ["latin"] });

const OnGoingComp = (props) => {
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
            className={`${inter.className} justify-start" text-[#F83866] px-[35px] py-[10px] text-[13px] font-semibold leading-[24px] bg-[#F8386626] rounded-[8px] w-fit hover:bg-[#F8386650] cursor-pointer`}
          >
            {props.language == "tr"
              ? "LANSMANA DÖN"
              : props.language == "zh"
              ? "返回启动板"
              : "BACK TO LAUNCHPAD"}
          </div>
        </a>
        <div className="flex flex-col my-[75px] xl:flex-row">
          <div className="flex flex-col xl:w-[60%] w-[90%] mx-auto xl:mx-0 scale-90">
            <Image
              src={"/images/flemintLogo.svg"}
              width={100}
              height={100}
              alt=""
              className="mb-[25px] max-md:mx-auto"
            />
            <div className="flex flex-col ">
              <p
                className={`${inter.className} font-semibold max-md:mx-auto text-[#FAFAFA] text-[22px] leading-[26.63px] tracking-[1%] cursor-default mb-[3px]`}
              >
                {props.language == "tr"
                  ? "FLEAMINT'E GİRİŞ"
                  : props.language == "zh"
                  ? "介绍 FLEAMINT"
                  : "INTRODUCING FLEAMINT"}
              </p>
              <p
                className={`${inter.className} font-normal text-[#FFFFFF80] max-md:mx-auto text-[12px] leading-[13.8px] tracking-[1%] cursor-default mb-[35px]`}
              >
                {props.language == "tr"
                  ? "Merkezi Olmayan NFT, Staking ve Pad Entegrasyonu"
                  : props.language == "zh"
                  ? "去中心化 NFT、Stake 和 Pad 集成"
                  : "The Decentralized NFT, Staking, and Pad Integration"}
              </p>
              <p
                className={`${inter.className} font-normal text-[#FFFFFFBF] max-md:mx-auto max-md:text-center text-[15px] leading-[17px] cursor-default mb-[35px]`}
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
                  benzersiz tanımlayıcılar, benzersiz bir düzeyde
                  özgünlük ve doğrulama. Aradaki boşluğu kusursuz bir şekilde kapatarak
                  FleaMint, geleneksel ve merkezi olmayan finans arasında
                  Dinamik ortamda başarılı olmak için gerekli araçlara sahip işletmeler
                  finansal manzara.`
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
                  独特的标识符，创造了无与伦比的水平
                  真实性和验证。 通过无缝弥合差距
                  在传统金融和去中心化金融之间，FleaMint 配备
                  拥有在动态中蓬勃发展的必要工具的企业
                  金融格局。`
                  : `FleaMint stands as an innovative gateway to the decentralized
                finance world, offering traditional businesses a transformative
                platform. Our mission is to revolutionize the fundraising
                landscape for Web2 businesses, providing a secure and efficient
                ecosystem to embrace the potential of Web3. With FleaMint,
                businesses gain access to a groundbreaking digital clone
                marketplace and DeFi venture investment opportunities, ensuring
                the immutability of products and services. This is made possible
                through solid connections established with serial numbers or
                unique identifiers, creating an unparalleled level of
                authenticity and verification. By seamlessly bridging the gap
                between traditional and decentralized finance, FleaMint equips
                businesses with the essential tools to thrive in the dynamic
                financial landscape.`}
              </p>
              <div className="flex flex-row justify-between">
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
          <div className="flex flex-col justify-between mt-[20px] xl:mt-[0px] xl:w-[40%] w-[90%] mx-auto xl:mx-0 scale-90 ">
            <div className="flex flex-col w-full">
              <p
                className={`${inter.className} text-[#FFFFFF] text-[40px] font-bold leading-[48px] mb-[18px]`}
              >
                {props.language == "tr"
                  ? "DEVAM EDİYOR"
                  : props.language == "zh"
                  ? "进行中"
                  : "ONGOING"}
              </p>
              <div className="flex flex-col w-full">
                <div
                  className={`${inter.className} text-[#FFFFFF] font-semibold text-[15.4px] leading-[18.64px] cursor-pointer mb-[12.84px]`}
                >{`Progress: 67%`}</div>
                <div className="bg-[#303030] w-full h-[3.85px] rounded-[6.42px]">
                  <div
                    className={`h-full w-[67%] bg-gradient-to-r from-[#F83866] to-[#FF659C] rounded-[6.42px]`}
                  ></div>
                </div>
                <div className="flex flex-row w-full justify-between mt-[12.84px]">
                  <div
                    className={`${inter.className} text-[#FFFFFF] font-normal text-[12.4px] leading-[14.64px] cursor-pointer `}
                  >
                    339.000
                  </div>
                  <div
                    className={`${inter.className} text-[#FFFFFF] font-normal text-[12.4px] leading-[14.64px] cursor-pointer `}
                  >
                    500.000
                  </div>
                </div>
              </div>
            </div>
            <div
              className="px-[81px] py-[12px] font-bold text-[18px] leading-[24px] text-[#FFFFFF] mt-[50px] ml-auto text-center cursor-pointer scale-75"
              id="idoBtn"
            >
              {props.language == "tr"
                ? "Cüzdanınıza token ekleyin"
                : props.language == "zh"
                ? "将代币添加到您的钱包"
                : "Add token to your wallet"}
            </div>
          </div>
        </div>
        <div className="px-[50px] overflow-scroll xl:w-full w-[90%] xl:mx-0 mx-auto py-[65px] flex flex-col border-solid border-[#262626] border-[1.28px] rounded-[6.42px] bg-[#171717] w-scroll mb-[75px]">
          <p
            className={`${inter.className} font-bold text-[#FFFFFF] text-[19px] leading-[22px] cursor-default mb-[45px]`}
          >
            {props.language == "tr"
              ? "TAHSİSİNİZ"
              : props.language == "zh"
              ? "您的分配"
              : "YOUR ALLOCATION"}
          </p>
          <table className="table-auto text-[#FFFFFF] min-w-[805px]">
            <thead className="bg-[#262626] ">
              <tr>
                <th className="text-center border-slate-500">
                  {props.language == "tr"
                    ? "No."
                    : props.language == "zh"
                    ? "No."
                    : "No."}
                </th>
                <th className="text-start pl-[15px]">
                  {props.language == "tr"
                    ? "Paylaştırma"
                    : props.language == "zh"
                    ? "分配"
                    : "Allocation"}
                </th>
                <th className="text-center">
                  {props.language == "tr"
                    ? "Yüzde"
                    : props.language == "zh"
                    ? "百分比"
                    : "Percentage"}
                </th>
                <th className="text-start pl-[15px]">
                  {props.language == "tr"
                    ? "Tarih"
                    : props.language == "zh"
                    ? "日期"
                    : "Date"}
                </th>
                <th className="text-start pl-[15px]">
                  {props.language == "tr"
                    ? "Hak talebinde bulunuldu"
                    : props.language == "zh"
                    ? "声称"
                    : "Claimed"}
                </th>
                <th className="text-start pl-[15px]">
                  {props.language == "tr"
                    ? "Aksiyon"
                    : props.language == "zh"
                    ? "行动"
                    : "Action"}
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="text-center">01</td>
                <td className="pl-[15px] text-start">1412523.5</td>
                <td className="text-center">7%</td>
                <td className="text-start pl-[15px]">13-05-03 13:00</td>
                <td className="text-start pl-[15px]">2523.5</td>
                <td className="flex justify-center items-center py-[10px]">
                  <div
                    className={`${inter.className} font-semibold text-[#FFFFFF] text-[13px] leading-[15px] cursor-default px-[50px] py-[12px] bg-[#08875D] border-solid border-[#262626] border-[1.28px] rounded-[5px] hover:bg-[#055339] cursor-pointer`}
                  >
                    {props.language == "tr"
                      ? "Token Talebi"
                      : props.language == "zh"
                      ? "领取代币"
                      : "Claim Tokens"}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center">02</td>
                <td className="pl-[15px] text-start">1412523.5</td>
                <td className="text-center">7%</td>
                <td className="text-start pl-[15px]">13-05-03 13:00</td>
                <td className="text-start pl-[15px]">2523.5</td>
                <td className="flex justify-center items-center py-[10px]">
                  <div
                    className={`${inter.className} font-semibold text-[#FFFFFF] text-[13px] leading-[15px] cursor-default px-[50px] py-[12px] bg-[#08875D] border-solid border-[#262626] border-[1.28px] rounded-[5px] hover:bg-[#055339] cursor-pointer`}
                  >
                    {props.language == "tr"
                      ? "Token Talebi"
                      : props.language == "zh"
                      ? "领取代币"
                      : "Claim Tokens"}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex xl:flex-row flex-col justify-between mb-[65px]">
          <div className="flex flex-col p-[30px] md:p-[65px] xl:w-[49%] xl:mx-0 sm:w-[90%] w-full mx-auto bg-[#171717] border-solid border-[1.28px] border-[#262626] rounded-[12px] justify-between">
            <div
              className={`${inter.className} font-bold text-[#FFFFFF] text-[19px] leading-[22px]`}
            >
              {props.language == "tr"
                ? "DETAYLAR"
                : props.language == "zh"
                ? "细节"
                : "DETAILS"}
            </div>
            <div className="flex flex-col mt-[45px]">
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
            <div className="flex flex-row justify-between mt-[45px]">
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
          <div className="flex flex-col justify-between xl:w-[49%] xl:mx-0 sm:w-[90%] w-full  mx-auto xl:mt-0 mt-[20px] p-[30px] md:p-[65px] bg-[#171717] border-solid border-[1.28px] border-[#262626] rounded-[12px] ">
            <div
              className={`${inter.className} font-bold text-[#FFFFFF] text-[19px] leading-[22px]`}
            >
              {props.language == "tr"
                ? "İLERLEME"
                : props.language == "zh"
                ? "进步"
                : "PROGRESS"}
            </div>
            <div className="flex flex-col mt-[45px]">
              <OnGoingProcessCard
                title="NFT ROUND"
                start="10/09/2023 22:00"
                end="10/09/2023 22:00"
                type="Finished"
                language={props.language}
              />
              <OnGoingProcessCard
                title="TWO YEAR STAKE"
                start="10/09/2023 22:00"
                end="10/09/2023 22:00"
                type="Finished"
                language={props.language}
              />
              <OnGoingProcessCard
                title="ALL STAKE"
                start="10/09/2023 22:00"
                end="10/09/2023 22:00"
                type="Ongoing"
                language={props.language}
              />
              <OnGoingProcessCard
                title="FCFS"
                start="10/09/2023 22:00"
                end="10/09/2023 22:00"
                type="Upcoming"
                language={props.language}
              />
            </div>
            <div className="flex flex-col w-full mt-[45px]">
              <div
                className={`${inter.className} text-[#FFFFFF] font-semibold text-[15.4px] leading-[18.64px] cursor-pointer mb-[12.84px]`}
              >{`Progress: 67%`}</div>
              <div className="bg-[#303030] w-full h-[3.85px] rounded-[6.42px]">
                <div
                  className={`h-full w-[67%] bg-gradient-to-r from-[#F83866] to-[#FF659C] rounded-[6.42px]`}
                ></div>
              </div>
              <div className="flex flex-row w-full justify-between mt-[12.84px]">
                <div
                  className={`${inter.className} text-[#FFFFFF] font-normal text-[12.4px] leading-[14.64px] cursor-pointer `}
                >
                  339.000
                </div>
                <div
                  className={`${inter.className} text-[#FFFFFF] font-normal text-[12.4px] leading-[14.64px] cursor-pointer `}
                >
                  500.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnGoingComp;

/* <div className="flex flex-col mx-[160px] mx-[20px] max-[800px]:w-[100vw] max-[455px]:mx-[0px] scale-[0.9] w-full">
        <div className="w-[90%] mx-auto">
          <a href={`/ongoing/auth=${props.auth}#launchpad`}>
            <div
              className={`${inter.className} justify-start" text-[#F83866] px-[35px] py-[10px] text-[13px] font-semibold leading-[24px] bg-[#F8386626] rounded-[8px] w-fit w-fit hover:bg-[#F8386650] cursor-pointer`}
            >
              BACK TO LAUNCHPAD
            </div>
          </a>
        </div>
        <div className="flex w-[90%] mx-auto justify-between my-[75px] items-start max-w-[700px]:flex-col min-md:space-x-10 max-lg:flex-wrap max-lg:justify-center">
          <div className="flex max-lg:justify-center max-lg:mx-auto flex-col justify-center items-start w-[1000px] w-[90%] max-[800px]:scale-90 max-[800px]:w-[90%] mx-auto mb-[50px]">
            <Image
              src={"/images/flemintLogo.svg"}
              width={100}
              height={100}
              alt=""
              className="mb-[25px] max-md:mx-auto"
            />
            <div className="flex flex-col ">
              <p
                className={`${inter.className} font-semibold max-md:mx-auto text-[#FAFAFA] text-[22px] leading-[26.63px] tracking-[1%] cursor-default mb-[3px]`}
              >
                INTRODUCING FLEAMINT
              </p>
              <p
                className={`${inter.className} font-normal text-[#FFFFFF80] max-md:mx-auto text-[12px] leading-[13.8px] tracking-[1%] cursor-default mb-[35px]`}
              >
                The Decentralized NFT, Staking, and Pad Integration
              </p>
              <p
                className={`${inter.className} font-normal text-[#FFFFFFBF] max-md:mx-auto max-md:text-center text-[15px] leading-[17px] cursor-default mb-[35px]`}
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
                unique identifiers, creating an unparalleled level of
                authenticity and verification. By seamlessly bridging the gap
                between traditional and decentralized finance, FleaMint equips
                businesses with the essential tools to thrive in the dynamic
                financial landscape.
              </p>
              <div className="flex flex-row justify-between">
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
          <div className="flex flex-col justify-between w-[500px] w-[80% max-[800px]:w-[90%]] max-[800px]:scale-90 max-[455px]:scale-75 max-[455px]:items-center max-[455px]:w-[70%] mx-auto scale-[0.9] mb-[50px]">
            <div className="flex flex-col w-full">
              <p
                className={`${inter.className} text-[#FFFFFF] text-[40px] font-bold leading-[48px] mb-[18px]`}
              >
                ONGOING
              </p>
              <div className="flex flex-col w-full">
                <div
                  className={`${inter.className} text-[#FFFFFF] font-semibold text-[15.4px] leading-[18.64px] cursor-pointer mb-[12.84px]`}
                >{`Progress: 67%`}</div>
                <div className="bg-[#303030] w-full h-[3.85px] rounded-[6.42px]">
                  <div
                    className={`h-full w-[67%] bg-gradient-to-r from-[#F83866] to-[#FF659C] rounded-[6.42px]`}
                  ></div>
                </div>
                <div className="flex flex-row w-full justify-between mt-[12.84px]">
                  <div
                    className={`${inter.className} text-[#FFFFFF] font-normal text-[12.4px] leading-[14.64px] cursor-pointer `}
                  >
                    339.000
                  </div>
                  <div
                    className={`${inter.className} text-[#FFFFFF] font-normal text-[12.4px] leading-[14.64px] cursor-pointer `}
                  >
                    500.000
                  </div>
                </div>
              </div>
            </div>
            <div
              className="px-[81px] py-[12px] font-bold text-[18px] leading-[24px] text-[#FFFFFF] mt-[50px] mx-auto text-center cursor-pointer"
              id="idoBtn"
            >
              Add token to your wallet
            </div>
          </div>
        </div>
        <div className="px-[50px] py-[65px] flex flex-col border-solid border-[#262626] border-[1.28px] rounded-[6.42px] bg-[#171717] max-[800px]:w-[90%] max-[800px]:scale-90 w-[90%] mx-auto max-md:overflow-scroll">
          <p
            className={`${inter.className} font-bold text-[#FFFFFF] text-[19px] leading-[22px] cursor-default mb-[45px]`}
          >
            YOUR ALLOCATION
          </p>
          <table className="table-auto text-[#FFFFFF]">
            <thead className="bg-[#262626] ">
              <tr>
                <th className="text-center border-slate-500">No.</th>
                <th className="text-start pl-[15px]">Allocation</th>
                <th className="text-center">Percentage</th>
                <th className="text-start pl-[15px]">Date</th>
                <th className="text-start pl-[15px]">Claimed</th>
                <th className="text-start pl-[15px]">Action</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="text-center">01</td>
                <td className="pl-[15px] text-start">1412523.5</td>
                <td className="text-center">7%</td>
                <td className="text-start pl-[15px]">13-05-03 13:00</td>
                <td className="text-start pl-[15px]">2523.5</td>
                <td className="flex justify-center items-center py-[10px]">
                  <div
                    className={`${inter.className} font-semibold text-[#FFFFFF] text-[13px] leading-[15px] cursor-default px-[50px] py-[12px] bg-[#08875D] border-solid border-[#262626] border-[1.28px] rounded-[5px] hover:bg-[#055339] cursor-pointer`}
                  >
                    Claim Tokens
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center">02</td>
                <td className="pl-[15px] text-start">1412523.5</td>
                <td className="text-center">7%</td>
                <td className="text-start pl-[15px]">13-05-03 13:00</td>
                <td className="text-start pl-[15px]">2523.5</td>
                <td className="flex justify-center items-center py-[10px]">
                  <div
                    className={`${inter.className} font-semibold text-[#FFFFFF] text-[13px] leading-[15px] cursor-default px-[50px] py-[12px] bg-[#08875D] border-solid border-[#262626] border-[1.28px] rounded-[5px] hover:bg-[#055339] cursor-pointer`}
                  >
                    Claim Tokens
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex mx-[160px] w-[90%] mb-[150px] mx-auto justify-center mx-auto scale-[0.9] my-auto flex-wrap xl:space-x-10 max-[1182px]:space-y-10 my-5 md:space-y-15">
        <div className="flex flex-col p-[65px] w-[525px] bg-[#171717] border-solid border-[1.28px] border-[#262626] rounded-[12px] my-auto max-w-[1176px]:w-100 justify-between">
          <div
            className={`${inter.className} font-bold text-[#FFFFFF] text-[19px] leading-[22px]`}
          >
            DETAILS
          </div>
          <div className="flex flex-col mt-[45px]">
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
          <div className="flex flex-row justify-between mt-[45px]">
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
        <div className="flex flex-col justify-between w-[525px] p-[65px] bg-[#171717] border-solid border-[1.28px] border-[#262626] rounded-[12px] max-w-[1176px]:w-100 my-auto">
          <div
            className={`${inter.className} font-bold text-[#FFFFFF] text-[19px] leading-[22px]`}
          >
            PROGRESS
          </div>
          <div className="flex flex-col mt-[45px]">
            <OnGoingProcessCard
              title="NFT ROUND"
              start="10/09/2023 22:00"
              end="10/09/2023 22:00"
              type="Finished"
            />
            <OnGoingProcessCard
              title="TWO YEAR STAKE"
              start="10/09/2023 22:00"
              end="10/09/2023 22:00"
              type="Finished"
            />
            <OnGoingProcessCard
              title="ALL STAKE"
              start="10/09/2023 22:00"
              end="10/09/2023 22:00"
              type="Ongoing"
            />
            <OnGoingProcessCard
              title="FCFS"
              start="10/09/2023 22:00"
              end="10/09/2023 22:00"
              type="Upcoming"
            />
          </div>
          <div className="flex flex-col w-full mt-[45px]">
            <div
              className={`${inter.className} text-[#FFFFFF] font-semibold text-[15.4px] leading-[18.64px] cursor-pointer mb-[12.84px]`}
            >{`Progress: 67%`}</div>
            <div className="bg-[#303030] w-full h-[3.85px] rounded-[6.42px]">
              <div
                className={`h-full w-[67%] bg-gradient-to-r from-[#F83866] to-[#FF659C] rounded-[6.42px]`}
              ></div>
            </div>
            <div className="flex flex-row w-full justify-between mt-[12.84px]">
              <div
                className={`${inter.className} text-[#FFFFFF] font-normal text-[12.4px] leading-[14.64px] cursor-pointer `}
              >
                339.000
              </div>
              <div
                className={`${inter.className} text-[#FFFFFF] font-normal text-[12.4px] leading-[14.64px] cursor-pointer `}
              >
                500.000
              </div>
            </div>
          </div>
        </div>
      </div>*/
