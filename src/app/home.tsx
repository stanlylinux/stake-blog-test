import "./globals.css";
import useSWR from "swr";
import { fetcher } from "./utils/axios";
import { MainLayout } from "./layouts/Main";
import { useRef, useState } from "react";
import { MainPage } from "./components/MainPage";
import { DetailPage } from "./components/DetailPage";

export const HomePage = () => {
  const scrollToTop = useRef<HTMLInputElement>(null);
  const [thisCurrentData, setCurrentData] = useState<any>({
    page: "Main",
    detail: null,
  });
  const { data: articlesResult } = useSWR("/api/articles", fetcher);
  const { data: iconsResult } = useSWR("/api/categories", fetcher);
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
            doneLoading={doneLoading}
            scrollToTop={scrollToTop}
            setCurrentData={setCurrentData}
            articleData={articleData}
            iconData={iconData}
            mainArticleData={mainArticleData}
          />
        ) : (
          <DetailPage data={thisCurrentData.detail} />
        )}
      </div>
    </MainLayout>
  );
};
