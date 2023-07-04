interface Props {
  imageUrl: string;
  title: string;
  description: string;
  setCurrentData: (param1: any) => void;
  scrollToTop: any;
}

export const ArticleBox = ({
  imageUrl,
  title,
  description,
  setCurrentData,
  scrollToTop,
}: Props) => {
  return (
    <div
      onClick={() => {
        setCurrentData({
          page: "Detail",
          detail: { title, description, imageUrl },
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
        className="pt-[0.9em] article-img ease-in-out duration-300"
        src={imageUrl}
        alt="No Image"
      />
      <p className="text-[18px] font-bold">{title}</p>
      <p className="text-gray text-[14px]">{description}</p>
    </div>
  );
};
