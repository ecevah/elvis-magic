import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import HomeCard from "./HomeCard";
import About from "./About";
import TierSystem from "./TierSystem";
import Constant from "@/constant/Constant.js";
import Launch from "./Launch";
import Partners from "./Partners";
import NotGoingComp from "./NotGoingComp";
import OnGoingComp from "./OnGoingComp";

//fonts
const inter = Inter({ subsets: ["latin"] });

const Landing = (props) => {
  console.log(props.check);
  return (
    <>
      <AnimatePresence>
        <motion.section
          className={`h-[100vh] w-[100vw] bg-[url('/images/webBg.webp')] lg:bg-center bg-top bg-cover absolute top-0 left-0 -z-[2] bg-no-repeat`}
          initial={
            props.check
              ? { y: 0, height: "auto" }
              : props.index == 0
              ? { scale: 3 }
              : { y: -1000 }
          }
          animate={props.check ? { y: -80, height: 280 } : { scale: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="h-full w-full flex flex-col justify-between">
            <div className="h-[391px] w-full bg-gradient-to-b from-[#121212] via-[#121212B2] to-[#12121200]"></div>
            <div className="h-[365px] w-full bg-gradient-to-t from-[#121212] via-[#121212B2] to-[#12121200]"></div>
          </div>
        </motion.section>
        {props.index == 0 || props.index == 5 ? (
          <HomeCard
            index={props.index}
            check={props.check}
            language={props.language}
          />
        ) : null}
        {props.index == 1 ? <About language={props.language} /> : null}
        {props.index == 2 ? <TierSystem language={props.language} /> : null}
        {props.index == 3 ? (
          props.pageCheck ? (
            <NotGoingComp
              id={props.id}
              auth={props.auth}
              language={props.language}
            />
          ) : props.pageOnCheck ? (
            <OnGoingComp
              id={props.id}
              auth={props.auth}
              language={props.language}
            />
          ) : (
            <Launch auth={props.auth} language={props.language} />
          )
        ) : null}
        {props.index == 4 ? <Partners language={props.language} /> : null}
      </AnimatePresence>
    </>
  );
};
export default Landing;
