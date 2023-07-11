import { useDispatch } from "react-redux";
import { articleDetailActions } from "../stores";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  articleDate: any;
}

export const ArticleBox = ({
  id,
  imageUrl,
  title,
  description,
  articleDate,
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
      className="flex flex-col gap-y-3 cursor-pointer article-container"
    >
      <img
        className="pt-[0.9em] article-img ease-in-out duration-300 h-[200px]"
        src={imageUrl}
        alt="No Image"
      />
      <p className="text-lg font-bold">
        {title.trim().length > 30 ? title.trim().slice(0, 30) + "..." : title}
      </p>
      <p
        style={{ color: "#B1BAD3" }}
        dangerouslySetInnerHTML={{
          __html:
            description.trim().length > 50
              ? description.trim().slice(0, 100) + "..."
              : description,
        }}
        className="text-lightGray text-sm lightGray-important"
      />
    </div>
  );
};
