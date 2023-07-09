import { useDispatch } from "react-redux";
import { articleDetailActions } from "../stores";
import { useRouter } from "next/router";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  setCurrentData: (param1: any) => void;
  scrollToTop: any;
  articleDate: any;
  id: string;
}

export const MainArticle = ({
  imageUrl,
  title,
  description,
  setCurrentData,
  scrollToTop,
  articleDate,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div
      onClick={() => {
        dispatch(
          articleDetailActions.setArticleDetail({
            title,
            description,
            imageUrl,
            articleDate,
            id,
          })
        );
        router.push(`/article/${id}`);
      }}
      className={`grid text-center md:text-left gap-y-3 md:grid-cols-5 gap-x-6 cursor-pointer article-container`}
    >
      <img
        className="thumbnail md:col-span-3 pt-[0.9em] article-img ease-in-out duration-300"
        src={imageUrl}
        alt="No Image"
      />
      <div className="mt-[15px] md:col-span-2">
        <p className="font-bold">{title}</p>
        <p className="mt-[10px] text-gray">{description}</p>
      </div>
    </div>
  );
};
