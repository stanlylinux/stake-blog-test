import { FidgetSpinner } from "react-loader-spinner";
import { ArticleBox } from "./ArticleBox";
import { IconBox } from "./IconBox";
import { MainArticle } from "./MainArticle";
import { useRef, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/axios";

interface Props {
  iconData: any;
  articleData: any;
  mainArticleData: any;
  setCurrentData: (param1: any) => void;
  scrollToTop: any;
  doneLoading: boolean;
  thisCurrentData: any;
  articlePage: any;
  setArticlePage: (param1: any) => void;
  articleMeta: any;
}

export const MainPage = ({
  iconData,
  articleData,
  setCurrentData,
  scrollToTop,
  doneLoading,
  thisCurrentData,
  articlePage,
  setArticlePage,
  articleMeta,
  mainArticleData,
}: Props) => {
  const thisScrollToTop = useRef<HTMLInputElement>(null);
  const [page, setPage] = useState(1);
  const { data: articlesResult } = useSWR(
    `/articles/paginate?page=${page}`,
    fetcher
  );
  const articlesData = articlesResult?.data;
  const articleDoneLoading = articlesData;
  return (
    <div>
      {!thisCurrentData.category && (
        <div className="pt-[52px] w-[100vw] w-full bg-lightSurface">
          <div className="max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-[12em]">
            <div className="flex justify-between items-center">
              <p className="text-white text-[1.5rem] font-semibold">Blog</p>
              <img src="https://mediumrare.imgix.net/group-banner-article.png" />
            </div>
          </div>
        </div>
      )}
      <div
        className={`${
          thisCurrentData.category && "pt-[52px]"
        } bg-darkSecondBlue mx-auto w-full max-w-[1440px] px-4 md:px-10 lg:px-[12em] py-6 flex flex-col gap-[24px] items-center`}
      >
        {!doneLoading ? (
          <div className="my-[2rem] mx-auto w-full text-center">
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
        ) : (
          <div className="">
            {mainArticleData && (
              <MainArticle
                setCurrentData={setCurrentData}
                title={mainArticleData.article_title}
                description={mainArticleData.description}
                imageUrl={mainArticleData.article_image_url}
                articleDate={mainArticleData.article_date}
                id={mainArticleData.id}
                scrollToTop={scrollToTop}
              />
            )}
            <div
              ref={thisScrollToTop}
              className="grid sm:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-6"
            >
              {iconData &&
                iconData.map((icon: any, idx: any) => (
                  <IconBox
                    setCurrentData={setCurrentData}
                    scrollToTop={scrollToTop}
                    key={idx}
                    imageUrl={icon.category_image_url}
                    title={icon.category_title}
                    id={icon.id}
                  />
                ))}
            </div>
            {!articleDoneLoading ? (
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
            ) : (
              <div className="my-[30px] grid grid-cols-2 md:grid-cols-3 gap-6">
                {articlesData &&
                  articlesData.data &&
                  articlesData.data.map((article: any, idx: any) => (
                    <ArticleBox
                      title={article.article_title}
                      description={article.description}
                      imageUrl={article.article_image_url}
                      articleDate={article.article_date}
                      key={idx}
                      id={article.id}
                    />
                  ))}
              </div>
            )}
            <div className="flex justify-center items-center gap-x-[50px] mt-[50px]">
              <a
                onClick={() => {
                  if (articlesData && articlesData.page === 1) return;
                  setPage((prevState: any) => prevState - 1);
                  thisScrollToTop.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                className={`font-semibold ${
                  !articlesData || (articlesData && articlesData.page === 1)
                    ? "text-superGray"
                    : "cursor-pointer text-white"
                }`}
              >
                Sebelumnya
              </a>
              <a
                onClick={() => {
                  if (
                    articlesData &&
                    articlesData.page == articlesData.pageCount
                  )
                    return;
                  setPage((prevState: any) => prevState + 1);
                  thisScrollToTop.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                className={`font-semibold ${
                  !articlesData ||
                  (articlesData &&
                    articlesData.page === articlesData.pageCount) ||
                  (articlesData && articlesData.page === articlesData.pageCount)
                    ? "text-superGray"
                    : "cursor-pointer text-white"
                }`}
              >
                Berikutnya
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
