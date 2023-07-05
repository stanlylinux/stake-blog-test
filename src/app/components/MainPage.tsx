import { FidgetSpinner } from "react-loader-spinner";
import { ArticleBox } from "./ArticleBox";
import { IconBox } from "./IconBox";
import { MainArticle } from "./MainArticle";

interface Props {
  mainArticleData: any;
  iconData: any;
  articleData: any;
  setCurrentData: (param1: any) => void;
  scrollToTop: any;
  doneLoading: boolean;
  thisCurrentData: any;
}

export const MainPage = ({
  mainArticleData,
  iconData,
  articleData,
  setCurrentData,
  scrollToTop,
  doneLoading,
  thisCurrentData,
}: Props) => {
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
        } bg-darkSecondBlue w-full px-4 md:px-6 lg:px-[7.4em] py-6 flex flex-col gap-[24px] items-center`}
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
            {mainArticleData && mainArticleData[0].attributes && (
              <MainArticle
                setCurrentData={setCurrentData}
                title={mainArticleData[0].attributes.title}
                description={mainArticleData[0].attributes.description}
                imageUrl={mainArticleData[0].attributes.image_url}
                scrollToTop={scrollToTop}
              />
            )}
            <div className="grid grid-cols-3 mt-[30px] gap-6">
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
                        articlesData={icon.attributes.articles.data}
                      />
                    )
                )}
            </div>
            <div className="my-[30px] grid grid-cols-3 gap-6">
              {articleData &&
                articleData.map((article: any, idx: any) => (
                  <ArticleBox
                    scrollToTop={scrollToTop}
                    setCurrentData={setCurrentData}
                    title={article.attributes.title}
                    description={article.attributes.description}
                    imageUrl={article.attributes.image_url}
                    category={article.attributes.category.data.attributes.title}
                    key={idx}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
