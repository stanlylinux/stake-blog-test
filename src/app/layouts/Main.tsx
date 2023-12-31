import { Footer } from "@/app/components/Footer";
import { BiBasketball } from "react-icons/bi";
import { MdCasino } from "react-icons/md";
import { useRouter } from "next/router";
import Head from "next/head";

interface Props {
  children: any;
}

export const MainLayout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <div className="flex relative bg-dark-blue-100">
      <Head>
        <title>Blog Stake88 - Panduan, Bocoran dan Berita Terbaru</title>
      </Head>
      {/* <div className="h-[100vh] w-[240px] z-[100] fixed bg-darkBlue">
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
      </div> */}
      <div className="w-full">
        <header className="fixed w-full bg-dark-blue-100 shadow-custom flex justify-center font-semibold z-20">
          <div className="max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-[12em] flex justify-between items-center">
            {/* Stake Logo */}
            <a
              className="cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              <img
                className="w-[120px] max-w-[160px]"
                alt="Stake"
                src="/stake-logo.svg"
              />
            </a>

            <div className="flex flex-row-reverse lg:flex-row items-center py-[9px] gap-2 font-bold text-[0.875rem]">
              {/* Masuk Button */}
              <a
                href="https://stake88.co"
                target="_blank"
                className="rounded-[2px] flex items-center justify-center h-[34px] w-[4.75rem] bg-transparent hover:bg-dark-blue-200"
              >
                Masuk
              </a>

              {/* Daftar Button */}
              <a
                href="https://stake88.co/register"
                target="_blank"
                className="relative rounded-[2px] bg-dodgerblue hover:bg-[#124782] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.2),_0px_1px_2px_rgba(0,_0,_0,_0.12),_0px_1px_0px_rgba(255,_255,_255,_0.04)_inset] flex items-center justify-center h-[34px] w-[4.75rem]"
              >
                Daftar
              </a>
            </div>
          </div>
        </header>
        <div className="bg-darkSecondBlue">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
