import "./globals.css";
import useSWR from "swr";
import { fetcher } from "./utils/axios";
import { MainLayout } from "./layouts/Main";
import { useRef, useState } from "react";
import { MainPage } from "./components/MainPage";
import { DetailPage } from "./components/DetailPage";
import { ArticleBox } from "./components/ArticleBox";
import { FidgetSpinner } from "react-loader-spinner";

export const HomePage = () => {
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
  const { data: iconsResult } = useSWR("/api/categories", fetcher);
  const { data: mainArticleResult } = useSWR(
    "/api/main-articles?sort=id",
    fetcher
  );

  const { data: categoryArticleResult } = useSWR(
    `/api/articles?populate=*&sort=id&pagination[page]=${thisCurrentData.categoryPage}&pagination[pageSize]=6&filters[category][title][$eq]=${thisCurrentData.category}`,
    fetcher
  );

  const articleData = articlesResult?.data.data;
  const articleMeta = articlesResult?.data.meta;
  const iconData = iconsResult?.data.data;
  const mainArticleData = mainArticleResult?.data.data;
  const doneLoading = iconData && mainArticleData;
  const articleDoneLoading = articleData;
  const categoryArticleData = categoryArticleResult?.data.data;
  const categoryArticleMeta = categoryArticleResult?.data.meta;

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
            articlePage={articlePage}
            setArticlePage={setArticlePage}
            articleMeta={articleMeta}
            articleDoneLoading={articleDoneLoading}
          />
        ) : thisCurrentData.page === "Category" ? (
          categoryArticleData ? (
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
                <div
                  className={`my-[30px] ${
                    categoryArticleData.length > 0
                      ? "grid grid-cols-2 md:grid-cols-3 gap-6"
                      : ""
                  }`}
                >
                  {categoryArticleData.length > 0 ? (
                    categoryArticleData.map((article: any, idx: any) => (
                      <ArticleBox
                        scrollToTop={scrollToTop}
                        setCurrentData={setCurrentData}
                        title={article.attributes.title}
                        description={article.attributes.description}
                        imageUrl={article.attributes.image_url}
                        category="main"
                        key={idx}
                      />
                    ))
                  ) : (
                    <p className="text-center">No data found!</p>
                  )}
                </div>
                <div
                  className={`${
                    categoryArticleData.length > 0 ? "" : "hidden"
                  } flex justify-center items-center gap-x-[100px] my-[50px]`}
                >
                  <a
                    onClick={() => {
                      if (categoryArticleMeta.pagination.page === 1) return;
                      setCurrentData((prevState: any) => ({
                        ...prevState,
                        categoryPage: prevState.categoryPage - 1,
                      }));
                      scrollToTop.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                    }}
                    className={`${
                      categoryArticleMeta &&
                      categoryArticleMeta.pagination.page !== 1
                        ? "cursor-pointer text-dodgerblue"
                        : "text-superGray"
                    }`}
                  >
                    Previous
                  </a>
                  <a
                    onClick={() => {
                      if (
                        categoryArticleMeta.pagination.page ===
                        categoryArticleMeta.pagination.pageCount
                      )
                        return;
                      setCurrentData((prevState: any) => ({
                        ...prevState,
                        categoryPage: prevState.categoryPage + 1,
                      }));
                      scrollToTop.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                    }}
                    className={`${
                      categoryArticleMeta &&
                      categoryArticleMeta.pagination.page !==
                        categoryArticleMeta.pagination.pageCount
                        ? "cursor-pointer text-dodgerblue"
                        : "text-superGray"
                    }`}
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="my-[4rem] mx-auto w-full text-center">
              <FidgetSpinner
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper w-full"
                ballColors={["#ff0000", "#00ff00", "#0000ff"]}
                backgroundColor="#F4442E"
              />
            </div>
          )
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
