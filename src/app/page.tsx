import Image from "next/image";
import "./globals.css";
import { IconBox } from "./components/IconBox";
import { ArticleBox } from "./components/ArticleBox";
import { MdCasino } from "react-icons/md";
import { BiBasketball } from "react-icons/bi";

export default function Home() {
  return (
    <div className="bg-darkSecondBlue h-full">
      <div className="flex relative">
        <div className="h-[100vh] w-[240px] z-[100] fixed bg-darkBlue">
          <div className="w-[240px] z-99 h-[70px] bg-darkBlue flex justify-center items-center boxSh gap-x-2">
            <div className="flex items-center">
              <MdCasino className="w-[1em] h-[1em]" />
              <p className="text-white text-[0.875rem] py-[0.8125rem] px-[0.5rem]">
                Casino
              </p>
            </div>
            <div className="flex items-center">
              <BiBasketball className="w-[1em] h-[1em]" />
              <p className="text-white text-[0.875rem] py-[0.8125rem] px-[0.5rem]">
                Sports
              </p>
            </div>
          </div>
          <div className="py-[1rem] px-[0.5rem] cursor-pointer">
            <div className="bg-surface rounded-[4rem]">
              <p className="text-[0.875rem] py-[0.9375rem] px-[1.25rem]">
                Blog
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-[70px] pl-[240px] fixed z-[99] bg-darkSecondBlue pr-[6px] flex boxSh">
            <div className="px-[3vw] w-full flex justify-between items-center">
              <img className="max-w-[80px]" src="/logo.png" />
              <div className="flex">
                <a className="text-[0.875rem] py-[0.9375rem] px-[1.25rem]">
                  Sign In
                </a>
                <a className="text-[0.875rem] py-[0.9375rem] px-[1.25rem] bg-primaryBase boxShButton rounded-[5px]">
                  Register
                </a>
              </div>
            </div>
          </div>
          <div className="pt-[70px] pl-[240px] bg-darkSecondBlue">
            <div className="h-[115px] px-[3vw] flex justify-between items-center bg-lightSurface">
              <p className="text-white text-[1.25rem]">Blog</p>
              <img src="https://mediumrare.imgix.net/group-banner-article.png" />
            </div>
            <div className="mt-[2rem]">
              <div className="px-[3vw] grid grid-cols-5 gap-x-6">
                <img
                  className="thumbnail col-span-3"
                  src="https://cdn.sanity.io/images/tdrhge4k/production/c04effb998d6976cdcd9d7ff51d1f3812d8537ac-1200x630.png?q=80&auto=format"
                />
                <div className="mt-[15px] col-span-2">
                  <p className="font-bold">MLB 2023 Weekly Preview - Week 15</p>
                  <p className="mt-[10px] text-gray">
                    Week 15 of the MLB season approaches, and we are getting
                    ever so close to the halfway point of the season and the
                    all-star break
                  </p>
                </div>
              </div>
              <div className="px-[3vw] grid grid-cols-3 mt-[30px] gap-6">
                <IconBox />
                <IconBox />
                <IconBox />
                <IconBox />
                <IconBox />
                <IconBox />
              </div>
              <div className="px-[3vw] my-[30px] grid grid-cols-3 gap-6">
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
              </div>
              <footer className="py-[40px] px-[3vw] bg-gray800">
                <div className="flex flex-wrap gap-5 justify-around">
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                  <img className="w-[116px] h-[35px]" src="/litecoin.svg" />
                </div>
                <div className="my-[20px] w-full h-[2px] bg-lightSurface"></div>
                <div className="flex flex-wrap justify-around gap-5">
                  <img className="h-[60px]" src="/UFC.svg" />
                  <img className="h-[60px]" src="/UFC.svg" />
                  <img className="h-[60px]" src="/UFC.svg" />
                  <img className="h-[60px]" src="/UFC.svg" />
                </div>
                <div className="my-[30px] w-full h-[2px] bg-lightSurface"></div>
                <div className="text-center">
                  <img className="max-w-[80px] mx-auto" src="/logo.png" />
                  <p>&copy; 2023 Stake.com | All Rights Reserved.</p>
                  <p>1 BTC = $30,627.87</p>
                  <p>
                    Stake is owned and operated by Medium Rare N.V.,
                    registration number: 145353, registered address: Fransche
                    Bloemweg, 4 Willemstad Curaçao. Contact us at
                    support@stake.com. Payment agent company is Medium Rare
                    Limited with address 7-9 Riga Feraiou, LIZANTIA COURT,
                    Office 310, Agioi Omologites, 1087 Nicosia, Cyprus and
                    Registration number: HE 410775 Stake is authorized and
                    regulated by the Government of Curacao and operates under
                    License No. 8048/JAZ issued to Antillephone. Stake has
                    passed all compliance and is legally authorized to conduct
                    gaming operations for all games of chance and wagering.
                  </p>
                  <p>
                    Support support@stake.com | Partners partners@stake.com |
                    Press press@stake.com
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
