interface Props {
  imageUrl: string;
  title: string;
  description: string;
  setCurrentData: (param1: any) => void;
  scrollToTop: any;
  category: string;
}

export const ArticleBox = ({
  imageUrl,
  title,
  description,
  setCurrentData,
  scrollToTop,
  category,
}: Props) => {
  return (
    <div
      onClick={() => {
        setCurrentData({
          page: "Detail",
          detail: { title, description, imageUrl },
          category: "",
          articlesData: [],
        });
        scrollToTop.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }}
      className="flex flex-col gap-y-3 cursor-pointer article-container"
    >
      <img
        className="pt-[0.9em] article-img ease-in-out duration-300 h-[200px]"
        src={imageUrl}
        alt="No Image"
      />
      <p className="text-[18px] font-bold">
        {title.trim().length > 30 ? title.trim().slice(0, 30) + "..." : title}
      </p>
      <p
        dangerouslySetInnerHTML={{
          __html:
            description.trim().length > 50
              ? description.trim().slice(0, 100) + "..."
              : description,
        }}
        className="text-gray text-[14px]"
      />
    </div>
  );
};
