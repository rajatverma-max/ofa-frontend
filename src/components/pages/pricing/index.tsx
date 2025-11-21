import BannerSection, {type BannerData} from './bannerSection';

type PricingProps = BannerData;

const Pricing = (props: PricingProps) => {
  return (
    <>
      <BannerSection bannerData={props} />
    </>
  );
};

export default Pricing;
