import { FaFacebookF, FaTwitter } from "react-icons/fa";

interface Props {
  data: any;
}

function replaceWithBr(props: any) {
  return props.replace(/\n/g, "<br />");
}

export const DetailPage = ({ data }: Props) => {
  return (
    <div className="pt-[52px] bg-darkSecondBlue">
      <div className="px-[20px] md:px-[150px] lg:px-[1200px] py-[30px]">
        <p className="text-center md:text-left text-[28px] font-semibold">
          {data.title}
        </p>
        <div className="flex justify-between items-center my-3">
          <p className="text-[12px] text-gray">Stake88 - {data.articleDate}</p>
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
        <p
          className="text-gray"
          dangerouslySetInnerHTML={{ __html: replaceWithBr(data.description) }}
        />
      </div>
    </div>
  );
};
