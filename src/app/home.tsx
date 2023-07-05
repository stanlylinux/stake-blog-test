import "./globals.css";
import useSWR from "swr";
import { fetcher } from "./utils/axios";
import { MainLayout } from "./layouts/Main";
import { useRef, useState } from "react";
import { MainPage } from "./components/MainPage";
import { DetailPage } from "./components/DetailPage";
import { ArticleBox } from "./components/ArticleBox";

export const HomePage = () => {
  const scrollToTop = useRef<HTMLInputElement>(null);
  const [thisCurrentData, setCurrentData] = useState<any>({
    page: "Main",
    category: "",
    detail: null,
    categoryData: [],
  });
  const { data: articlesResult } = useSWR("/api/articles?populate=*", fetcher);
  const { data: iconsResult } = useSWR("/api/categories?populate=*", fetcher);
  const { data: mainArticleResult } = useSWR("/api/main-articles", fetcher);
  const articleData = articlesResult?.data.data;
  const iconData = iconsResult?.data.data;
  const mainArticleData = mainArticleResult?.data.data;
  const doneLoading = articleData && iconData && mainArticleData;
  return (
    <MainLayout scrollToTop={scrollToTop} setCurrentData={setCurrentData}>
      <div ref={scrollToTop}>
        {thisCurrentData.page === "Main" ? (
          <MainPage
            thisCurrentData={thisCurrentData}
            doneLoading={doneLoading}
            scrollToTop={scrollToTop}
            setCurrentData={setCurrentData}
            articleData={articleData}
            iconData={iconData}
            mainArticleData={mainArticleData}
          />
        ) : thisCurrentData.category &&
          thisCurrentData.page === "Category" &&
          thisCurrentData.categoryData.length > 0 ? (
          <div>
            <div className="pt-[52px] w-[100vw] w-full bg-lightSurface">
              <div className="max-w-[1440px] w-full px-2 md:px-6 lg:px-[7.8em]">
                <div className="flex justify-between items-center">
                  <p className="text-white text-[1.5rem] font-semibold">
                    {thisCurrentData.category}
                  </p>
                  <img src="https://mediumrare.imgix.net/group-banner-article.png" />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:px-6 lg:px-[7.4em]">
              <div className={`my-[30px] grid grid-cols-3 gap-6`}>
                {thisCurrentData.categoryData.map((article: any, idx: any) => (
                  <ArticleBox
                    scrollToTop={scrollToTop}
                    setCurrentData={setCurrentData}
                    title={article.attributes.title}
                    description={article.attributes.description}
                    imageUrl={article.attributes.image_url}
                    category="main"
                    key={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : thisCurrentData.page === "Detail" ? (
          <DetailPage data={thisCurrentData.detail} />
        ) : (
          <div className="pt-[52px] h-[80vh] flex justify-center items-center">
            <p>Page not found!</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};
