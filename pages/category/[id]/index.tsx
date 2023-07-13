import "../../../src/app/globals.css";
import { ArticleBox } from "@/app/components/ArticleBox";
import { MainLayout } from "@/app/layouts/Main";
import { RootState } from "@/app/stores";
import { fetcher } from "@/app/utils/axios";
import { useRef, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Category() {
  const scrollToTop = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const category = useSelector((state: RootState) => state.category);
  const [page, setPage] = useState(1);
  const { data: categoryArticleResult } = useSWR(
    `/api/articles?populate=*&sort=id&pagination[page]=${page}&pagination[pageSize]=6&filters[category][id][$eq]=${router.query.id}`,
    fetcher
  );
  const categoryArticleData = categoryArticleResult?.data.data;
  const categoryArticleMeta = categoryArticleResult?.data.meta;

  const nextDisabled =
    categoryArticleData &&
    (categoryArticleData.length === 0 ||
      categoryArticleMeta.pagination.page ===
        categoryArticleMeta.pagination.pageCount);

  const prevDisabled =
    categoryArticleData &&
    (categoryArticleData.length === 0 ||
      categoryArticleMeta.pagination.page === 1);

  return (
    <MainLayout>
      <div ref={scrollToTop}>
        <div className="pt-[52px] w-[100vw] w-full bg-lightSurface">
          <div className="max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-[12em]">
            <div className="flex justify-between items-center">
              <p className="text-white text-[1.5rem] font-semibold">
                {category.category.name}
              </p>
              <img src="https://mediumrare.imgix.net/group-banner-article.png" />
            </div>
          </div>
        </div>
        {categoryArticleData ? (
          <div className="max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-[12em]">
            <div
              className={`my-[30px] ${
                categoryArticleData && categoryArticleData.length > 0
                  ? "grid grid-cols-2 md:grid-cols-3 gap-6"
                  : ""
              }`}
            >
              {categoryArticleData && categoryArticleData.length > 0 ? (
                categoryArticleData.map((article: any, idx: any) => (
                  <ArticleBox
                    title={article.attributes.title}
                    description={article.attributes.description}
                    imageUrl={article.attributes.image_url}
                    articleDate={article.attributes.article_date}
                    id={article.id}
                    key={idx}
                  />
                ))
              ) : (
                <p style={{ padding: "50px 0" }} className="text-center">
                  No data found!
                </p>
              )}
            </div>
            <div
              style={{
                display:
                  categoryArticleData &&
                  categoryArticleData.length === 0 &&
                  "none",
                padding: "30px 0",
              }}
              className={`font-semibold ${
                categoryArticleData && categoryArticleData.length > 0
                  ? ""
                  : "hidden"
              } flex justify-center items-center gap-x-[50px] my-[50px]`}
            >
              <a
                onClick={() => {
                  if (prevDisabled) return;
                  scrollToTop.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                  setPage((prevState: any) => prevState - 1);
                }}
                className={`${
                  prevDisabled ? "text-superGray" : "cursor-pointer text-white"
                }`}
              >
                Sebelumnya
              </a>
              <a
                onClick={() => {
                  if (nextDisabled) return;
                  scrollToTop.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                  setPage((prevState: any) => prevState + 1);
                }}
                className={`font-semibold ${
                  nextDisabled ? "text-superGray" : "cursor-pointer text-white"
                }`}
              >
                Berikutnya
              </a>
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
        )}
      </div>
    </MainLayout>
  );
}
