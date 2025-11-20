const Pricing = ({data}: {data: any}) => {
  return (
    <>
      <h1>{data.bannerTitle}</h1>
      <p>{data.bannerDescription}</p>
    </>
  );
};
export default Pricing;
