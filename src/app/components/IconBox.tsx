interface Props {
  title: string;
  imageUrl: string;
  scrollToTop: any;
}

export const IconBox = ({ title, imageUrl, scrollToTop }: Props) => {
  return (
    <div className="flex items-center justify-between rounded-[0.25rem] bg-lightSurface cursor-pointer">
      <div className="flex items-center">
        <img
          className="w-[6rem] h-[6rem] rounded-l-[0.25rem]"
          src={imageUrl}
          alt="No Image"
        />
        <p className="ml-[1rem]">{title}</p>
      </div>
      <p className="mr-[2rem]">X</p>
    </div>
  );
};
