import BannerSection from './bannerSection';

const Pricing = ({data}: {data: any}) => {
  return (
    <>
      {/* <h1>{data.bannerTitle}</h1>
      <p>{data.bannerDescription}</p> */}
      <BannerSection bannerData={data} />
    </>
  );
};
export default Pricing;
