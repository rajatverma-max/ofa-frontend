import HeroSection from './heroSection';
import TabSection from './tabSection';

const BannerSection = ({bannerData}) => {
  return (
    <>
      <div className="flex overflow-hidden relative flex-col items-center px-4 pt-16 w-full max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-w-[1200px] max-md:max-w-full">
          <HeroSection heroData={bannerData} />
          <div className="flex flex-wrap justify-center mt-16 w-full border-t border-r border-l border-solid backdrop-blur-[6.099999904632568px] border-t-white border-t-opacity-10 border-x-white border-x-opacity-10 rounded-[8px_8px_0_0] max-md:mt-10 max-md:max-w-full">
            <TabSection
              icon="https://api.builder.io/api/v1/image/assets/TEMP/5b5627d99fbb209aa2e229e6d576bf014b3cd5e6?placeholderIfAbsent=true&apiKey=4099be48b1834b7aab173a3bfacd618e"
              title="Subcontractor Memberships"
              description="Demonstrate your compliance with Industry Leading membership"
              isActive={true}
              iconAlt="Subcontractor Memberships icon"
            />
            <div className="flex shrink-0 w-px bg-white bg-opacity-20 h-[178px]" />
            <TabSection
              icon="https://api.builder.io/api/v1/image/assets/TEMP/5b5627d99fbb209aa2e229e6d576bf014b3cd5e6?placeholderIfAbsent=true&apiKey=4099be48b1834b7aab173a3bfacd618e"
              title="Marketplace"
              description="Find and win new work or find your perfect project partners"
              iconAlt="Marketplace icon"
            />
            <div className="flex shrink-0 w-px bg-white bg-opacity-20 h-[178px]" />
            <TabSection
              icon="https://api.builder.io/api/v1/image/assets/TEMP/5b5627d99fbb209aa2e229e6d576bf014b3cd5e6?placeholderIfAbsent=true&apiKey=4099be48b1834b7aab173a3bfacd618e"
              title="Supply Chain Management"
              description="A one-stop-shop for all your supply chain data"
              iconAlt="Supply Chain Management icon"
            />
            <div className="flex shrink-0 w-px bg-white bg-opacity-20 h-[178px]" />
            <TabSection
              icon="https://api.builder.io/api/v1/image/assets/TEMP/5b5627d99fbb209aa2e229e6d576bf014b3cd5e6?placeholderIfAbsent=true&apiKey=4099be48b1834b7aab173a3bfacd618e"
              title="Services"
              description="Expert support and guidance to get verified and stay verified"
              iconAlt="Services icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
