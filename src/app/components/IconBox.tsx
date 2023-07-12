import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { categoryActions } from "../stores";

interface Props {
  title: string;
  imageUrl: string;
  scrollToTop: any;
  setCurrentData: (param1: any) => void;
  id: string;
}

export const IconBox = ({
  title,
  imageUrl,
  scrollToTop,
  setCurrentData,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div
      onClick={() => {
        dispatch(categoryActions.setCategory({ id, name: title }));
        router.push(`/category/${id}`);
      }}
      className="flex icon-container items-center justify-between rounded-[0.25rem] bg-lightSurface cursor-pointer"
    >
      <div className="flex items-center icon-subContainer">
        <img
          className="w-[6rem] h-[6rem] rounded-l-[0.25rem]"
          src={imageUrl}
          alt="No Image"
        />
        <p className="ml-[1rem] font-semibold text-lg">{title}</p>
      </div>
      <MdKeyboardArrowRight
        size={30}
        className="icon-icon mr-[2rem] text-[1.25rem]"
      />
    </div>
  );
};
