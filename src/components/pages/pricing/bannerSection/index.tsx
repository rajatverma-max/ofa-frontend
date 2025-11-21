import {Fragment} from 'react';
import {getContentfulImgData} from '@/utils/getContentfulImage';
import HeroSection from './heroSection';
import TabSection from './tabSection';

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
  sys?: {
    id: string;
  };
}
export interface BannerData {
  heroItem?: HeroItemFields;
  tabItem?: TabItem[];
}

interface BannerSectionProps {
  bannerData: BannerData;
}

const BannerSection = ({bannerData}: BannerSectionProps) => {
  const {heroItem, tabItem} = bannerData;
  console.log('tabItem', tabItem);

  return (
    <div className="flex overflow-hidden relative flex-col items-center px-4 pt-16 w-full max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-w-[1200px] max-md:max-w-full">
        <HeroSection heroData={heroItem} />

        <div className="flex flex-wrap justify-center mt-16 w-full border-t border-r border-l border-solid backdrop-blur-[6.099999904632568px] border-t-white border-t-opacity-10 border-x-white border-x-opacity-10 rounded-[8px_8px_0_0] max-md:mt-10 max-md:max-w-full">
          {tabItem?.map((item) => {
            const {name, description, icon} = item.fields;
            const iconData = getContentfulImgData(icon);

            return (
              <Fragment key={item.sys?.id ?? name}>
                <TabSection
                  icon={iconData?.imageUrl || ''}
                  title={name}
                  description={description}
                  isActive={true}
                  iconAlt="Subcontractor Memberships icon"
                />
                <div className="flex shrink-0 w-px bg-white bg-opacity-20 h-[178px]" />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
