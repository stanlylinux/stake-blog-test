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
  const { data: articlesResult } = useSWR(
    `/api/articles?populate=*&sort=id&pagination[page]=${articlePage}&pagination[pageSize]=6`,
    fetcher
  );
  const { data: mainArticlesResult } = useSWR(
    `/api/articles?filters[main][$eq]=true`,
    fetcher
  );
  const { data: iconsResult } = useSWR("/api/categories", fetcher);

  const articleData = articlesResult?.data.data;
  const articleMeta = articlesResult?.data.meta;
  const mainArticleData = mainArticlesResult?.data.data;
  const iconData = iconsResult?.data.data;
  const doneLoading = iconData;
  const articleDoneLoading = articleData;

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
          articleDoneLoading={articleDoneLoading}
          mainArticleData={mainArticleData}
        />
      </div>
    </MainLayout>
  );
}
