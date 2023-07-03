export const IconBox = () => {
  return (
    <div className="flex items-center justify-between rounded-[0.25rem] bg-lightSurface">
      <div className="flex items-center">
        <img
          className="w-[6rem] h-[6rem] rounded-l-[0.25rem]"
          src="https://cdn.sanity.io/images/tdrhge4k/production/bcaf99010957ed2f91e27a1a8dd0537fb21b686f-500x500.png?q=80&auto=format"
        />
        <p className="ml-[1rem]">Crypto</p>
      </div>
      <p className="mr-[2rem]">X</p>
    </div>
  );
};
