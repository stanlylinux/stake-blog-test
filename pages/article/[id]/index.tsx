import "../../../src/app/globals.css";
import { MainLayout } from "@/app/layouts/Main";
import { RootState } from "@/app/stores";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "@/app/stores";
import { fetcher } from "@/app/utils/axios";
import useSWR from "swr";
import { FidgetSpinner } from "react-loader-spinner";
import { useRouter } from "next/router";

function replaceWithBr(props: any) {
  return props.replace(/\n/g, "<br />");
}

export default function Article() {
  const router = useRouter();
  const articleDetail = useSelector((state: RootState) => state.articleDetail);
  const { data: articleDetailResult } = useSWR(
    `/articles/${router.query.id}`,
    fetcher
  );

  const detail = articleDetailResult?.data;
  console.log(detail, "<<< DETAIL");
  return (
    <Provider store={store}>
      <MainLayout>
        {detail ? (
          <div className="pt-[52px] bg-darkSecondBlue">
            <div className="detail-container py-[30px]">
              <p className="text-left text-[28px] font-semibold">
                {detail.article_title}
              </p>
              <div className="flex justify-between items-center my-3">
                <div className="flex gap-x-2 items-center justify-start">
                  <img
                    alt="author-img"
                    className="detail-img rounded-full"
                    src={detail.author_image_url}
                  />
                  <p className="text-[12px] text-lightGray">
                    {detail.author} - {detail.article_date}
                  </p>
                </div>
                <div className="flex gap-[1rem]">
                  <a
                    target="_blank"
                    href={""}
                    className="rounded-full bg-darkBlue p-[12px] cursor-pointer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    target="_blank"
                    href={""}
                    className="rounded-full bg-darkBlue p-[12px] cursor-pointer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
              <div className="my-8">
                <img
                  className="w-full"
                  src={detail.article_image_url}
                  alt="No Image"
                />
              </div>
              <div
                className="text-lightGray text-base lightGray-important dangerous-div"
                dangerouslySetInnerHTML={{
                  __html: replaceWithBr(detail.description),
                }}
              />
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
      </MainLayout>
    </Provider>
  );
}
