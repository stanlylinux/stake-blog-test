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
    `categories/${router.query.id}?page${page}`,
    fetcher
  );
  const categoryArticleData = categoryArticleResult?.data;

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
                categoryArticleData &&
                categoryArticleData.data &&
                categoryArticleData.data.length > 0
                  ? "grid grid-cols-2 md:grid-cols-3 gap-6"
                  : ""
              }`}
            >
              {categoryArticleData && categoryArticleData.data ? (
                categoryArticleData.data.map((article: any, idx: any) => (
                  <ArticleBox
                    title={article.article_title}
                    description={article.description}
                    imageUrl={article.article_image_url}
                    articleDate={article.article_date}
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
                  categoryArticleData.data &&
                  categoryArticleData.data.length === 0 &&
                  "none",
                padding: "30px 0",
              }}
              className={`font-semibold ${
                categoryArticleData &&
                categoryArticleData.data &&
                categoryArticleData.data.length > 0
                  ? ""
                  : "hidden"
              } flex justify-center items-center gap-x-[50px] my-[50px]`}
            >
              <a
                onClick={() => {
                  if (categoryArticleData && categoryArticleData.page === 1)
                    return;
                  scrollToTop.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                  setPage((prevState: any) => prevState - 1);
                }}
                className={`${
                  !categoryArticleData ||
                  (categoryArticleData && categoryArticleData.page === 1)
                    ? "text-superGray"
                    : "cursor-pointer text-white"
                }`}
              >
                Sebelumnya
              </a>
              <a
                onClick={() => {
                  if (
                    categoryArticleData &&
                    categoryArticleData.page === categoryArticleData.pageCount
                  )
                    return;
                  scrollToTop.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                  setPage((prevState: any) => prevState + 1);
                }}
                className={`font-semibold ${
                  !categoryArticleData ||
                  (categoryArticleData &&
                    categoryArticleData.page ===
                      categoryArticleData.pageCount) ||
                  (categoryArticleData &&
                    categoryArticleData.page !== categoryArticleData.pageCount)
                    ? "text-superGray"
                    : "cursor-pointer text-white"
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
