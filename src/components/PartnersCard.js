import Image from "next/image";
import { Inter } from "next/font/google";

//fonts
const inter = Inter({ subsets: ["latin"] });

const PartnersCard = (props) => {
  return (
    <>
      <div className="w-[347px] h-[128px] rounded-[12px] px-[32px] py-[24px] flex flex-row items-center bg-[#171717] border-solid border-[1px] border-[#262626] m-[17.5px] grayscale hover:grayscale-0">
        <Image src={props.icon} width={80} height={80} alt="" />
        <div className="flex flex-col ml-[15px]">
          <div
            className={`${inter.className} font-semibold text-[#FFFFFF] text-[18px] leading-[17px] cursor-default mb-[5px]`}
          >
            {props.title}
          </div>
          <div
            className={`${inter.className} font-normal text-[#FFFFFFBF] text-[13px] leading-[17px] cursor-default`}
          >
            {props.text}
          </div>
        </div>
      </div>
    </>
  );
};
export default PartnersCard;
