import { FaFacebookF, FaTwitter } from "react-icons/fa";

interface Props {
  data: any;
}

export const DetailPage = ({ data }: Props) => {
  return (
    <div className="pt-[70px] pl-[240px] bg-darkSecondBlue">
      <div className="px-[250px] py-[40px]">
        <p className="text-[28px] font-bold">{data.title}</p>
        <div className="flex justify-between items-center my-3">
          <p className="text-[12px] text-gray">Stake - July 3, 2023</p>
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
          <img src={data.imageUrl} alt="No Image" />
        </div>
        <p className="text-gray">{data.description}</p>
      </div>
    </div>
  );
};
