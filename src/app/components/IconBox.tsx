import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  title: string;
  imageUrl: string;
  scrollToTop: any;
  setCurrentData: (param1: any) => void;
  articlesData: any;
}

export const IconBox = ({
  title,
  imageUrl,
  scrollToTop,
  setCurrentData,
  articlesData,
}: Props) => {
  return (
    <div
      onClick={() => {
        setCurrentData({
          page: "Category",
          detail: null,
          category: title,
          categoryData: articlesData,
        });
        scrollToTop.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }}
      className="flex icon-container items-center justify-between rounded-[0.25rem] bg-lightSurface cursor-pointer"
    >
      <div className="flex items-center icon-subContainer">
        <img
          className="w-[6rem] h-[6rem] rounded-l-[0.25rem]"
          src={imageUrl}
          alt="No Image"
        />
        <p className="ml-[1rem] font-semibold">{title}</p>
      </div>
      <MdKeyboardArrowRight
        size={30}
        className="icon-icon mr-[2rem] text-[1.25rem]"
      />
    </div>
  );
};
