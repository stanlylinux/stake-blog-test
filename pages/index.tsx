import "../src/app/globals.css";
import useSWR from "swr";
import { fetcher } from "../src/app/utils/axios";
import { MainLayout } from "../src/app/layouts/Main";
import { useRef, useState } from "react";
import { MainPage } from "../src/app/components/MainPage";

export default function HomePage() {
  const scrollToTop = useRef<HTMLInputElement>(null);
  const [thisCurrentData, setCurrentData] = useState<any>({
    page: "Main",
    category: "",
    detail: null,
    categoryPage: 1,
  });
  const [articlePage, setArticlePage] = useState(1);
  const { data: articlesResult } = useSWR(`/articles`, fetcher);
  const { data: iconsResult } = useSWR("/categories", fetcher);

  const articleData = articlesResult?.data;
  const articleMeta = articlesResult?.data.meta;
  const mainArticleData = articleData?.find((article: any) => article.main);
  const iconData = iconsResult?.data;
  const doneLoading = iconData;

  return (
    <MainLayout>
      <div ref={scrollToTop}>
        <MainPage
          thisCurrentData={thisCurrentData}
          doneLoading={doneLoading}
          scrollToTop={scrollToTop}
          setCurrentData={setCurrentData}
          articleData={articleData}
          iconData={iconData}
          articlePage={articlePage}
          setArticlePage={setArticlePage}
          articleMeta={articleMeta}
          mainArticleData={mainArticleData}
        />
      </div>
    </MainLayout>
  );
}
