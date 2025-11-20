import TabSection from '../tabSection';

const HeroSection = ({heroData}) => {
  const {bannerTitle, bannerDescription} = heroData;
  console.log('hero data', heroData);
  return (
    <div className="flex flex-col justify-center items-center w-full tracking-normal text-center max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/055c4d47c9d1264ff7798707bf429ef6e7bc68cd?placeholderIfAbsent=true&apiKey=4099be48b1834b7aab173a3bfacd618e"
        className="object-contain max-w-full aspect-[12.35] w-[298px]"
        alt="Company logo"
      />
      <div className="mt-6 max-w-[800px] w-[800px] max-md:max-w-full">
        <h1 className="text-5xl leading-tight text-white font-[430] max-md:max-w-full">
          {bannerTitle}
        </h1>
        <p className="mt-4 text-base leading-6 font-[410] text-zinc-100 max-md:max-w-full">
          {bannerDescription}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
