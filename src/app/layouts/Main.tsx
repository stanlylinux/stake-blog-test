import { Footer } from "@/app/components/Footer";
import { BiBasketball } from "react-icons/bi";
import { MdCasino } from "react-icons/md";

interface Props {
  children: any;
  setCurrentData: (param1: any) => void;
  scrollToTop: any;
}

export const MainLayout = ({
  children,
  setCurrentData,
  scrollToTop,
}: Props) => {
  return (
    <div className="flex relative">
      <div className="h-[100vh] w-[240px] z-[100] fixed bg-darkBlue">
        <div className="w-[240px] z-99 h-[70px] bg-darkBlue flex justify-center items-center boxSh gap-x-2">
          <div className="flex items-center cursor-pointer">
            <MdCasino className="w-[1em] h-[1em]" />
            <p className="text-white text-[0.875rem] py-[0.8125rem] px-[0.5rem]">
              Casino
            </p>
          </div>
          <div className="flex items-center cursor-pointer">
            <BiBasketball className="w-[1em] h-[1em]" />
            <p className="text-white text-[0.875rem] py-[0.8125rem] px-[0.5rem]">
              Sports
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setCurrentData({ page: "Main", detail: null });
            scrollToTop.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
          className="py-[1rem] px-[0.5rem] cursor-pointer"
        >
          <div className="bg-surface rounded-[4rem]">
            <button className="text-[0.875rem] py-[0.9375rem] px-[1.25rem] ">
              Blog
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[70px] pl-[240px] fixed z-[99] bg-darkSecondBlue pr-[6px] flex boxSh">
          <div className="px-[3vw] w-full flex justify-between items-center">
            <a
              className="cursor-pointer"
              onClick={() => {
                setCurrentData({ page: "Main", detail: null });
                scrollToTop.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              <img className="max-w-[80px]" src="/logo.png" />
            </a>
            <div className="flex">
              <a className="text-[0.875rem] py-[0.9375rem] px-[1.25rem] cursor-pointer">
                Sign In
              </a>
              <a className="text-[0.875rem] py-[0.9375rem] px-[1.25rem] bg-primaryBase boxShButton rounded-[5px] cursor-pointer">
                Register
              </a>
            </div>
          </div>
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
};
