interface Props {
  title: string;
  description: string;
  imageUrl: string;
  setCurrentData: (param1: any) => void;
  scrollToTop: any;
}

export const MainArticle = ({
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
      className="px-[3vw] grid grid-cols-5 gap-x-6 cursor-pointer article-container"
    >
      <img
        className="thumbnail col-span-3 pt-[0.9em] article-img ease-in-out duration-300"
        src={imageUrl}
        alt="No Image"
      />
      <div className="mt-[15px] col-span-2">
        <p className="font-bold">{title}</p>
        <p className="mt-[10px] text-gray">{description}</p>
      </div>
    </div>
  );
};
