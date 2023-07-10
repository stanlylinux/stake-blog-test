import "../../../src/app/globals.css";
import { ArticleBox } from "@/app/components/ArticleBox";
import { MainLayout } from "@/app/layouts/Main";
import { RootState } from "@/app/stores";
import { fetcher } from "@/app/utils/axios";
import { useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Category() {
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
      <div>
        <div className="pt-[52px] w-[100vw] w-full bg-lightSurface">
          <div className="max-w-[1440px] w-full px-2 md:px-6 lg:px-[7.8em]">
            <div className="flex justify-between items-center">
              <p className="text-white text-[1.5rem] font-semibold">
                {category.category.name}
              </p>
              <img src="https://mediumrare.imgix.net/group-banner-article.png" />
            </div>
          </div>
        </div>
        {categoryArticleData ? (
          <div className="w-full px-4 md:px-6 lg:px-[7.4em]">
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
              }}
              className={`${
                categoryArticleData && categoryArticleData.length > 0
                  ? ""
                  : "hidden"
              } flex justify-center items-center gap-x-[100px] my-[50px]`}
            >
              <a
                onClick={() => {
                  if (prevDisabled) return;
                  setPage((prevState: any) => prevState - 1);
                }}
                className={`${
                  prevDisabled
                    ? "text-superGray"
                    : "cursor-pointer text-dodgerblue"
                }`}
              >
                Sebelumnya
              </a>
              <a
                onClick={() => {
                  if (nextDisabled) return;
                  setPage((prevState: any) => prevState + 1);
                }}
                className={`${
                  nextDisabled
                    ? "text-superGray"
                    : "cursor-pointer text-dodgerblue"
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
