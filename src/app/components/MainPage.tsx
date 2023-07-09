import { FidgetSpinner } from "react-loader-spinner";
import { ArticleBox } from "./ArticleBox";
import { IconBox } from "./IconBox";
import { MainArticle } from "./MainArticle";
import { useRef } from "react";

interface Props {
  iconData: any;
  articleData: any;
  setCurrentData: (param1: any) => void;
  scrollToTop: any;
  doneLoading: boolean;
  thisCurrentData: any;
  articlePage: any;
  setArticlePage: (param1: any) => void;
  articleMeta: any;
  articleDoneLoading: boolean;
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
  articleDoneLoading,
}: Props) => {
  const thisScrollToTop = useRef<HTMLInputElement>(null);
  return (
    <div>
      {!thisCurrentData.category && (
        <div className="pt-[52px] w-[100vw] w-full bg-lightSurface">
          <div className="max-w-[1440px] w-full px-2 md:px-6 lg:px-[7.8em]">
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
        } bg-darkSecondBlue w-full px-2 md:px-6 lg:px-[7.8em] py-6 flex flex-col gap-[24px] items-center`}
      >
        {!doneLoading || !articleData ? (
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
            {articleData && articleData[0].attributes && (
              <MainArticle
                setCurrentData={setCurrentData}
                title={articleData[0].attributes.title}
                description={articleData[0].attributes.description}
                imageUrl={articleData[0].attributes.image_url}
                articleDate={articleData[0].attributes.article_date}
                id={articleData[0].id}
                scrollToTop={scrollToTop}
              />
            )}
            <div
              ref={thisScrollToTop}
              className="grid sm:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-6"
            >
              {iconData &&
                iconData.map(
                  (icon: any, idx: any) =>
                    icon.attributes.title.toLowerCase() !== "main" && (
                      <IconBox
                        setCurrentData={setCurrentData}
                        scrollToTop={scrollToTop}
                        key={idx}
                        imageUrl={icon.attributes.image_url}
                        title={icon.attributes.title}
                        id={icon.id}
                      />
                    )
                )}
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
                {articleData &&
                  articleData.map((article: any, idx: any) => (
                    <ArticleBox
                      title={article.attributes.title}
                      description={article.attributes.description}
                      imageUrl={article.attributes.image_url}
                      articleDate={article.attributes.article_date}
                      key={idx}
                      id={article.id}
                    />
                  ))}
              </div>
            )}
            <div className="flex justify-center items-center gap-x-[100px] mt-[50px]">
              <a
                onClick={() => {
                  if (articleMeta && articleMeta.pagination.page === 1) return;
                  setArticlePage((prevState: any) => prevState - 1);
                  thisScrollToTop.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                className={`${
                  articleMeta && articleMeta.pagination.page !== 1
                    ? "cursor-pointer text-dodgerblue"
                    : "text-superGray"
                }`}
              >
                Sebelumnya
              </a>
              <a
                onClick={() => {
                  if (
                    articleMeta &&
                    articleMeta.pagination.page ==
                      articleMeta.pagination.pageCount
                  )
                    return;
                  setArticlePage((prevState: any) => prevState + 1);
                  thisScrollToTop.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
                className={`${
                  articleMeta &&
                  articleMeta.pagination.page !==
                    articleMeta.pagination.pageCount
                    ? "cursor-pointer text-dodgerblue"
                    : "text-superGray"
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
