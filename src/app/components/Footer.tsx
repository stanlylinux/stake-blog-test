export const Footer = () => {
  return (
    <div className="bg-dark-blue-300 w-full flex flex-col gap-5 px-2 pt-6 pb-24 lg:py-16 box-border items-center justify-center text-[0.75rem] text-lightsteelblue ">
      <div className="grid grid-cols-2 md:flex md:justify-between gap-6 md:gap-12 lg:gap-24 place-items-center">
        <img alt="ufc" src="/ufc-partner.svg" />
        <img alt="alfa" src="/alfa-logo.svg" />
        <img alt="everton" className="" src="/everton-logo.svg" />
        <img
          alt="pagcor"
          className="h-[30px]"
          src="https://dmwl0ca1bvnm.cloudfront.net/common/dark/licence/pagcor.png"
        />
      </div>

      <hr className="box-border w-[95%] lg:w-10/12 mt-6 lg:mt-8 h-[2px] border-t-[2px] border-solid border-darkslategray-200" />

      <div className="relative flex flex-col items-center justify-center text-center pt-6 gap-5">
        <img
          className="max-w-full overflow-hidden h-[2.5rem]"
          alt=""
          src="/stake-logo.svg"
        />

        <p className="text-lightsteelblue text-[13px]">
          © 2023 Stake88 | All Rights Reserved.
        </p>

        <p className="relative text-lightsteelblue text-[12px] leading-[18px] text-center flex items-center justify-center w-[93%] md:w-[80%]">
          Stake88 is not affiliated, associated, authorized, endorsed by, or in
          any way officially connected with Stake.com or any of its subsidiaries
          or its affiliates. All product and company names are the registered
          trademarks of their original owners. The use of any trade name or
          trademark is for identification and reference purposes only and does
          not imply any association with the trademark holder of their product
          brand.
        </p>
      </div>
    </div>
  );
};
