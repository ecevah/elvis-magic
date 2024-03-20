import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import Constant from "@/constant/Constant.js";
import trConstant from "@/constant/trConstant.js";
import zhConstant from "@/constant/zhConstant.js";

//fonts
const inter = Inter({ subsets: ["latin"] });

const About = (props) => {
  const constant = new Constant();
  const trconstant = new trConstant();
  const zhconstant = new zhConstant();
  return (
    <>
      <motion.div
        id="about"
        className="flex flex-col items-start mb-auto mt-[35px]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`${inter.className} font-medium text-[#FAFAFA] text-[12px] leading-[15px] tracking-[1px] cursor-default pb-[34px] max-[1210px]:mx-[10px]`}
        >
          {props.language == "tr"
            ? trconstant.aboutList.topTitle
            : props.language == "zh"
            ? zhconstant.aboutList.topTitle
            : constant.aboutList.topTitle}
        </div>
        <div className="w-[1210px] h-[500px] px-[50px] py-[60px] rounded-[12px] bg-[#171717] border-solid border-[#262626] border-[1px] flex flex-row justify-start items-start max-[1210px]:w-[calc(100%-20px)] max-[1210px]:mx-[10px] max-[1210px]:h-fit max-[760px]:flex-col max-[760px]:items-center">
          <Image
            src={constant.aboutList.icon}
            width={45}
            height={45}
            alt=""
            className="mr-[26px] "
          />
          <div className="flex flex-col max-[760px]:items-center">
            <p
              className={`${inter.className} font-semibold text-[#FAFAFA] text-[22px] leading-[26.63px] tracking-[1%] cursor-default mb-[3px]`}
            >
              {props.language == "tr"
                ? trconstant.aboutList.title
                : props.language == "zh"
                ? zhconstant.aboutList.title
                : constant.aboutList.title}
            </p>
            <p
              className={`${inter.className} font-normal text-[#FFFFFF80] text-[12px] leading-[13.8px] tracking-[1%] cursor-default mb-[35px]`}
            >
              {props.language == "tr"
                ? trconstant.aboutList.subtitle
                : props.language == "zh"
                ? zhconstant.aboutList.subtitle
                : constant.aboutList.subtitle}
            </p>
            {props.language == "tr" ? (
              <p
                className={`${inter.className} font-normal text-[#FFFFFFBF] text-[15px] leading-[17px] cursor-default mb-[35px]`}
              >
                Dünyanın ilk Metaverse fırlatma sistemiyle tanışın ve merkezi
                olmayan protokol, çığır açan bir yenilik Yeni fikirlerin ve
                ürünlerin hayata geçme şeklini yeniden tanımlayın. Bizim
                platform üçünün devrim niteliğindeki bir birleşimini temsil
                ediyor önemli bileşenler: Merkezi Olmayan Değiştirilemez
                Tokenlar (NFT'ler), Staking ve Pad. <br /> <br /> Bunun
                merkezinde dönüştürücü blockchain tabanlı proje ElvisMagic'te
                yatıyor Merkezi olmayan bir dijital varlık ve çok işlevli ödeme
                olan Token enstrüman. Bu token, temel taşı olarak hizmet ediyor.
                ElvisMagic ekosistemi, çeşitli ve güçlü yapısını destekliyor
                özellik ve işlevsellik yelpazesi.
                <br /> <br /> Platformumuzun temel özelliklerinden biri Merkezi
                Olmayan Değiştirilemez Tokenların (NFT'ler) kullanımı benzersiz
                dijital varlıkları temsil eder ve uygulamalar bulmuşlardır. Oyun
                ve eğlenceden sanata kadar geniş bir sektör yelpazesi ve
                koleksiyon parçaları. ElvisMagic Token katalizör görevi görüyor
                Bu NFT'lerin oluşturulması ve değiştirilmesi, kullanıcıların
                gerçekten dijital yaratımlarına sahip olun ve para kazanın.{" "}
                <br /> <br /> İçinde Özetle ElvisMagic yalnızca bir kripto para
                birimi değil; bu bir Kullanıcıların etkileşim kurmasını,
                yaratmasını ve yaratmasını sağlayan dönüştürücü güç Metaverse'de
                başarılı olun. Biz buna öncülük etmeye devam ederken çığır açan
                proje, sizi bu konuda bize katılmaya davet ediyoruz Yeni bir
                dijital inovasyon çağına doğru heyecan verici bir yolculuk ve
                keşif.
              </p>
            ) : props.language == "zh" ? (
              <p
                className={`${inter.className} font-normal text-[#FFFFFFBF] text-[15px] leading-[17px] cursor-default mb-[35px]`}
              >
                推出全球首个元宇宙发射系统 去中心化协议，一项突破性的创新
                重新定义新想法和产品的实现方式。 我们的
                该平台代表了三者的革命性融合
                关键组成部分：去中心化的不可替代代币（NFT）， 质押和 Pad。{" "}
                <br /> <br /> 这是这一切的核心 ElvisMagic
                是基于区块链的变革性项目 Token，去中心化数字资产和多功能支付
                乐器。 该代币是 ElvisMagic 生态系统，支撑着其多样化和强大的
                一系列的特性和功能。
                <br /> <br /> 我们平台的主要特点之一是
                利用去中心化的非同质代币（NFT），
                代表了独特的数字资产，并在以下领域找到了应用：
                行业广泛，从游戏、娱乐到艺术 和收藏品。 ElvisMagic
                代币充当催化剂 这些NFT的创建和交换，让用户真正
                拥有他们的数字创作并从中获利。 <br /> <br /> 在
                总而言之，ElvisMagic 不仅仅是一种加密货币； 它是一个
                赋予用户参与、创造和使用的变革力量 在元宇宙中繁荣发展。
                当我们继续开拓这一领域时 开创性的项目，我们邀请您加入我们
                迈向数字创新新时代的激动人心的旅程 勘探。
              </p>
            ) : (
              <p
                className={`${inter.className} font-normal text-[#FFFFFFBF] text-[15px] leading-[17px] cursor-default mb-[35px]`}
              >
                Introducing the world's first Metaverse launch system and
                decentralized protocol, a groundbreaking innovation poised to
                redefine the way new ideas and products come to fruition. Our
                platform represents a revolutionary amalgamation of three
                pivotal components: Decentralized Non-Fungible Tokens (NFTs),
                Staking, and the Pad. <br /> <br /> At the heart of this
                transformative blockchain-based project lies the ElvisMagic
                Token, a decentralized digital asset and multifunctional payment
                instrument. This token serves as the cornerstone of the
                ElvisMagic ecosystem, underpinning its diverse and powerful
                range of features and functionalities.
                <br /> <br /> One of the key features of our platform is the
                utilization of Decentralized Non-Fungible Tokens (NFTs), which
                represent unique digital assets and have found applications in a
                wide range of industries, from gaming and entertainment to art
                and collectibles. ElvisMagic Token serves as the catalyst for
                the creation and exchange of these NFTs, allowing users to truly
                own and monetize their digital creations. <br /> <br /> In
                summary, ElvisMagic is not merely a cryptocurrency; it is a
                transformative force that empowers users to engage, create, and
                prosper within the Metaverse. As we continue to pioneer this
                groundbreaking project, we invite you to join us on this
                exciting journey toward a new era of digital innovation and
                exploration.
              </p>
            )}
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
      </motion.div>
    </>
  );
};

export default About;
