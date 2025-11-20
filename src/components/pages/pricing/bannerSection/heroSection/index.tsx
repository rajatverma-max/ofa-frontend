import TabSection from '../tabSection';

const HeroSection = () => {
  return (
    <div className="flex overflow-hidden relative flex-col items-center px-4 pt-16 w-full max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex flex-col justify-center items-center w-full tracking-normal text-center max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/055c4d47c9d1264ff7798707bf429ef6e7bc68cd?placeholderIfAbsent=true&apiKey=4099be48b1834b7aab173a3bfacd618e"
            className="object-contain max-w-full aspect-[12.35] w-[298px]"
            alt="Company logo"
          />
          <div className="mt-6 max-w-[800px] w-[800px] max-md:max-w-full">
            <h1 className="text-5xl leading-tight text-white font-[430] max-md:max-w-full">
              Simple Pricing. Powerful Results.
            </h1>
            <p className="mt-4 text-base leading-6 font-[410] text-zinc-100 max-md:max-w-full">
              A straightforward and cost-effective way to put your business
              before the UK's largest network of construction buyers – and give
              them all the information they need to select you for their next
              project.
            </p>
          </div>
        </div>
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
            icon="https://api.builder.io/api/v1/image/assets/TEMP/6718a32e6113824b6881752a36c938b4efc6c929?placeholderIfAbsent=true&apiKey=4099be48b1834b7aab173a3bfacd618e"
            title="Marketplace"
            description="Find and win new work or find your perfect project partners"
            iconAlt="Marketplace icon"
          />
          <div className="flex shrink-0 w-px bg-white bg-opacity-20 h-[178px]" />
          <TabSection
            icon="https://api.builder.io/api/v1/image/assets/TEMP/eece2934cb0042a7b1a43e9058719b6dc2b1f9d7?placeholderIfAbsent=true&apiKey=4099be48b1834b7aab173a3bfacd618e"
            title="Supply Chain Management"
            description="A one-stop-shop for all your supply chain data"
            iconAlt="Supply Chain Management icon"
          />
          <div className="flex shrink-0 w-px bg-white bg-opacity-20 h-[178px]" />
          <TabSection
            icon="https://api.builder.io/api/v1/image/assets/TEMP/662f91b9619b52ecff4920f43e798003959af7c9?placeholderIfAbsent=true&apiKey=4099be48b1834b7aab173a3bfacd618e"
            title="Services"
            description="Expert support and guidance to get verified and stay verified"
            iconAlt="Services icon"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
