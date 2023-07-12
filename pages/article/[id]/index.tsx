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
    `/api/articles/${router.query.id}`,
    fetcher
  );

  const detail = articleDetailResult?.data.data;
  console.log(detail, "<<< DETAIL");
  return (
    <Provider store={store}>
      <MainLayout>
        {detail ? (
          <div className="pt-[52px] bg-darkSecondBlue">
            <div className="container mx-auto detail-container py-[30px]">
              <p className="text-center md:text-left text-[28px] font-semibold">
                {detail.attributes.title}
              </p>
              <div className="flex justify-between items-center my-3">
                <p className="text-[12px] text-lightGray">
                  Stake88 - {detail.attributes.article_date}
                </p>
                <div className="flex gap-[1rem]">
                  <div className="rounded-full bg-darkBlue p-[12px] cursor-pointer">
                    <FaFacebookF />
                  </div>
                  <div className="rounded-full bg-darkBlue p-[12px] cursor-pointer">
                    <FaTwitter />
                  </div>
                </div>
              </div>
              <div className="my-8">
                <img
                  className="w-full"
                  src={detail.attributes.image_url}
                  alt="No Image"
                />
              </div>
              <div
                className="text-lightGray text-base lightGray-important dangerous-div"
                dangerouslySetInnerHTML={{
                  __html: replaceWithBr(detail.attributes.description),
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
