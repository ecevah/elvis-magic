import Image from "next/image";
import { Inter } from "next/font/google";

//fonts
const inter = Inter({ subsets: ["latin"] });

const LaunchCard = (props) => {
  return (
    <>
      <div className="bg-[#171717] border-solid border-[1.3px] border-[#262626] rounded-[12px] w-[513px] h-[603px] p-[65px] flex flex-col justify-between m-[20px] max-[540px]:w-[calc(100vw-20px)] max-[540px]:m-[10px] max-[540px]:p-[50px]">
        <div className="flex flex-row justify-start items-center max-[540px]:justify-center">
          <Image src={props.logo} width={102} height={102} alt="" />
          <div className="flex flex-col ml-[15px]">
            <p
              className={`${inter.className} text-[#FFFFFF] font-semibold text-[24px] leading-[22px] cursor-default mb-1`}
            >
              {props.name}
            </p>
            <p
              className={`${inter.className} text-[#FFFFFF80] font-normal text-[15px] leading-[22px] cursor-default `}
            >
              {props.shortName}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-[12px]">
            <div
              className={`${inter.className} text-[#FFFFFF] font-normal text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.language == "tr"
                ? "Bağış toplama zinciri:"
                : props.language == "zh"
                ? "筹款链:"
                : "Fundraising chain:"}
            </div>
            <div
              className={`${inter.className} text-[#FFFFFF] font-medium text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.one}
            </div>
          </div>
          <div className="flex flex-row justify-between mb-[12px]">
            <div
              className={`${inter.className} text-[#FFFFFF] font-normal text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.language == "tr"
                ? "Dağıtım zinciri:"
                : props.language == "zh"
                ? "分销链:"
                : "Distribution chain:"}
            </div>
            <div
              className={`${inter.className} text-[#FFFFFF] font-medium text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.two}
            </div>
          </div>
          <div className="flex flex-row justify-between mb-[12px]">
            <div
              className={`${inter.className} text-[#FFFFFF] font-normal text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.language == "tr"
                ? "Satış Tipi:"
                : props.language == "zh"
                ? "销售类型："
                : "Sale Type:"}
            </div>
            <div
              className={`${inter.className} text-[#FFFFFF] font-medium text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.three}
            </div>
          </div>
          <div className="flex flex-row justify-between mb-[12px]">
            <div
              className={`${inter.className} text-[#FFFFFF] font-normal text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.language == "tr"
                ? "Fiyat:"
                : props.language == "zh"
                ? "价格"
                : "Price:"}
            </div>
            <div
              className={`${inter.className} text-[#FFFFFF] font-medium text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.four}
            </div>
          </div>
          <div className="flex flex-row justify-between mb-[12px]">
            <div
              className={`${inter.className} text-[#FFFFFF] font-normal text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.language == "tr"
                ? "Toplam artış:"
                : props.language == "zh"
                ? "筹集资金总额："
                : "Total raise:"}
            </div>
            <div
              className={`${inter.className} text-[#FFFFFF] font-medium text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.five}
            </div>
          </div>
          <div className="flex flex-row justify-between mb-[12px]">
            <div
              className={`${inter.className} text-[#FFFFFF] font-normal text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.language == "tr"
                ? "Başlangıç Zamanı:"
                : props.language == "zh"
                ? "开始时间："
                : "Start time:"}
            </div>
            <div
              className={`${inter.className} text-[#FFFFFF] font-medium text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.six}
            </div>
          </div>
          <div className="flex flex-row justify-between mb-[12px]">
            <div
              className={`${inter.className} text-[#FFFFFF] font-normal text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.language == "tr"
                ? "Bitiş Zamanı:"
                : props.language == "zh"
                ? "时间结束："
                : "End time:"}
            </div>
            <div
              className={`${inter.className} text-[#FFFFFF] font-medium text-[16.67px] leading-[22px] cursor-default `}
            >
              {props.seven}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-end max-[540px]:flex-col max-[540px]:items-start">
          <a
            href={`/notgoing/elmbc=${props.auth ? "1" : "0"}${
              props.pageChack || props.pageOnCheck ? "" : "&sw=1"
            }&language=${props.language}#${props.id}`}
            onClick={() => location.reload}
            className={`${inter.className} text-[#FFFFFF] font-semibold text-[15.4px] leading-[18.64px] cursor-pointer px-[32.1px] py-[15.4px] border-solid border-[#262626] border-[1.28px] rounded-[15.4px] hover:bg-[#262626]`}
          >
            {props.language == "tr"
              ? "Detayları Göster"
              : props.language == "zh"
              ? "查看详情"
              : "View Details"}
          </a>
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
              <Image src={"/icons/x.svg"} width={24.63} height={24.63} alt="" />
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
    </>
  );
};
export default LaunchCard;
