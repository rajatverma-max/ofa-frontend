import {Fragment} from 'react';
import Image from 'next/image';
import {getContentfulImgData} from '@/utils/getContentfulImage';
export interface HeroItemFields {
  bannerTitle?: string;
  bannerDescription?: string;
}
export interface TabItemFields {
  name: string;
  description: string;
  icon: any;
}
export interface TabItem {
  fields: TabItemFields;
  sys?: {id: string};
}
export interface BannerData {
  heroItem?: HeroItemFields;
  tabItem?: TabItem[];
}

const BannerSection = ({bannerData}: {bannerData: BannerData}) => {
  const heroTitle = bannerData.heroItem?.bannerTitle;
  const heroDescription = bannerData.heroItem?.bannerDescription;
  const tabItems = bannerData.tabItem ?? [];

  return (
    <section
      className="
        relative flex w-full flex-col items-center px-4 
        pt-0             /* FIXED: removed top gap */
        text-white
        bg-gradient-to-b from-[#280071] via-[#3b0b93] to-[#180044]
      "
      aria-labelledby="pricing-hero-heading"
    >
      {/* Content wrapper */}
      <div className="flex w-full max-w-[1200px] flex-col items-center text-center">
        {/* Rating strip */}
        <div className="mt-10 flex items-center justify-center">
          <Image
            src="/images/trustpilot-rating.svg"
            width={298}
            height={24}
            priority
            alt="Customer rating: Excellent on Trustpilot with five stars"
            className="h-auto w-[298px] max-w-full object-contain"
          />
        </div>

        {/* Hero heading & description */}
        <h1
          id="pricing-hero-heading"
          className="mt-6 text-5xl font-[430] leading-tight max-md:text-3xl"
        >
          {heroTitle}
        </h1>

        <p className="mt-4 max-w-[750px] text-base font-[410] leading-6 text-zinc-100">
          {heroDescription}
        </p>

        {/* Tabs */}
        <div className="mt-16 w-full rounded-[8px_8px_0_0] border-x border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex flex-wrap justify-center">
            {tabItems.map((item, index) => {
              const {name, description, icon} = item.fields;
              const iconData = getContentfulImgData(icon);

              const isActive = index === 0; // MATCH Figma: first item active

              const baseClasses = `
                flex flex-col flex-1 basis-0 min-w-60
                h-[178px]                 /* Figma height */
                p-6                       /* spacing-3xl */
                gap-3
              `;

              const activeClasses = `
                bg-white text-[#280071]
                rounded-none
              `;

              const inactiveClasses = `
                bg-[#EFF0F114] text-white
                backdrop-blur-sm
              `;

              return (
                <Fragment key={item.sys?.id ?? name}>
                  <article
                    className={`${baseClasses} ${
                      isActive ? activeClasses : inactiveClasses
                    }`}
                  >
                    {/* Icon */}
                    {iconData?.imageUrl && (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                        <img
                          src={iconData.imageUrl}
                          alt={`${name} icon`}
                          className="h-6 w-6 object-contain"
                        />
                      </div>
                    )}

                    {/* Title + Divider + Desc */}
                    <h2 className="text-lg font-[430] leading-snug">{name}</h2>

                    <div
                      aria-hidden="true"
                      className={`h-px w-full ${
                        isActive ? 'bg-zinc-300' : 'bg-white/20'
                      }`}
                    />

                    <p
                      className={`text-sm font-[410] leading-5 ${
                        isActive ? 'text-neutral-600' : 'text-zinc-100'
                      }`}
                    >
                      {description}
                    </p>
                  </article>

                  {/* divider between cards */}
                  {index < tabItems.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden h-[178px] w-px bg-white/20 md:flex"
                    />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
