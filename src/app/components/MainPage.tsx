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
}

export const MainPage = ({
  mainArticleData,
  iconData,
  articleData,
  setCurrentData,
  scrollToTop,
  doneLoading,
}: Props) => {
  return (
    <div className="pt-[70px]  bg-darkSecondBlue">
      <div className="h-[115px] px-[3vw] flex justify-between items-center bg-lightSurface">
        <p className="text-white text-[1.25rem]">Blog</p>
        <img src="https://mediumrare.imgix.net/group-banner-article.png" />
      </div>
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
        <div className="mt-[2rem]">
          {mainArticleData && mainArticleData[0].attributes && (
            <MainArticle
              setCurrentData={setCurrentData}
              title={mainArticleData[0].attributes.title}
              description={mainArticleData[0].attributes.description}
              imageUrl={mainArticleData[0].attributes.image_url}
              scrollToTop={scrollToTop}
            />
          )}
          <div className="px-[3vw] grid grid-cols-3 mt-[30px] gap-6">
            {iconData &&
              iconData.map((icon: any, idx: any) => (
                <IconBox
                  scrollToTop={scrollToTop}
                  key={idx}
                  imageUrl={icon.attributes.image_url}
                  title={icon.attributes.title}
                />
              ))}
          </div>
          <div className="px-[3vw] my-[30px] grid grid-cols-3 gap-6">
            {articleData &&
              articleData.map((article: any, idx: any) => (
                <ArticleBox
                  scrollToTop={scrollToTop}
                  setCurrentData={setCurrentData}
                  title={article.attributes.title}
                  description={article.attributes.description}
                  imageUrl={article.attributes.image_url}
                  key={idx}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
