import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import TierSystemCard from "./TierSystemCard";
import { Container, Row, Col } from "react-bootstrap";
import Constant from "../constant/Constant";
import PartnersCard from "./PartnersCard";

//fonts
const inter = Inter({ subsets: ["latin"] });

const Partners = (props) => {
  const partners = [
    {
      icon: "/images/alveyLogo.svg",
      title: "Alvey Chain",
      text: "The first V.R / A.R Exchange in the World",
    },
    {
      icon: "/images/bscLogo.svg",
      title: "Binance Smart Chain",
      text: "A blockchain network launched by Binance",
    },
    {
      icon: "/images/lovelyLogo.svg",
      title: "Lovely Uni",
      text: "A centralized and decentralized platform",
    },
    {
      icon: "/images/amaLogo.svg",
      title: "AMA Groups",
      text: "An agency that supports blockchain project success",
    },
    {
      icon: "/images/pinkLogo.svg",
      title: "Pinksale",
      text: "A protocol for token creation and initial sales",
    },
    {
      icon: "/images/muratiLogo.svg",
      title: "MuratiAI",
      text: "The first advanced anime-focused Platform AI web&bot",
    },
  ];
  const trpartners = [
    {
      icon: "/images/alveyLogo.svg",
      title: "Alvey Chain",
      text: "Dünyadaki ilk V.R/A.R Değişimi",
    },
    {
      icon: "/images/bscLogo.svg",
      title: "Binance Smart Chain",
      text: "Binance tarafından başlatılan bir blockchain ağı",
    },
    {
      icon: "/images/lovelyLogo.svg",
      title: "Lovely Uni",
      text: "Merkezi ve merkezi olmayan bir platform",
    },
    {
      icon: "/images/amaLogo.svg",
      title: "AMA Groups",
      text: "Blockchain proje başarısını destekleyen bir ajans",
    },
    {
      icon: "/images/pinkLogo.svg",
      title: "Pinksale",
      text: "Jeton oluşturma ve ilk satışlara yönelik bir protokol",
    },
    {
      icon: "/images/muratiLogo.svg",
      title: "MuratiAI",
      text: "İlk gelişmiş anime odaklı Platform Yapay Zeka web ve botu",
    },
  ];
  const zhpartners = [
    {
      icon: "/images/alveyLogo.svg",
      title: "Alvey Chain",
      text: "全球首家V.R/A.R交易所",
    },
    {
      icon: "/images/bscLogo.svg",
      title: "Binance Smart Chain",
      text: "币安推出的区块链网络",
    },
    {
      icon: "/images/lovelyLogo.svg",
      title: "Lovely Uni",
      text: "集中式和分散式平台",
    },
    {
      icon: "/images/amaLogo.svg",
      title: "AMA Groups",
      text: "支持区块链项目成功的机构",
    },
    {
      icon: "/images/pinkLogo.svg",
      title: "Pinksale",
      text: "代币创建和初始销售的协议",
    },
    {
      icon: "/images/muratiLogo.svg",
      title: "MuratiAI",
      text: "第一个先进的以动漫为中心的平台人工智能网络和机器人",
    },
  ];
  const constant = new Constant();
  return (
    <>
      <motion.div
        id="partner"
        className="flex flex-col items-start mt-[57px] h-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`${inter.className} font-medium text-[#FAFAFA] text-[12px] leading-[15px] tracking-[1px] cursor-default mb-[75px] ml-[17.5px]`}
        >
          {props.language == "tr" ? "ORTAKLARIMIZ" : "OUR PARTNERS"}
        </div>
        <div className="grid grid-cols-3 mb-auto max-[1100px]:grid-cols-2 max-[1100px]:mb-[50px] max-[750px]:grid-cols-1 max-[386px]:mr-[17.5px] max-[386px]:w-fit">
          {props.language == "tr"
            ? trpartners.map((item, count) => (
                <PartnersCard
                  key={count}
                  icon={item.icon}
                  text={item.text}
                  title={item.title}
                />
              ))
            : props.language == "zh"
            ? zhpartners.map((item, count) => (
                <PartnersCard
                  key={count}
                  icon={item.icon}
                  text={item.text}
                  title={item.title}
                />
              ))
            : partners.map((item, count) => (
                <PartnersCard
                  key={count}
                  icon={item.icon}
                  text={item.text}
                  title={item.title}
                />
              ))}
        </div>
      </motion.div>
    </>
  );
};

export default Partners;
