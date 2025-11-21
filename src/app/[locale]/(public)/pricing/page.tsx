import Pricing from '@/components/pages/pricing';
import {getPricingHero, getPricingTab} from '@/services/pricing/pricing.api';
import type {
  HeroItemFields,
  TabItem,
} from '@/components/pages/pricing/bannerSection';

export const revalidate = 60;

export default async function PricingPage() {
  try {
    const pricingHeroData = await getPricingHero();
    const pricingTabData = await getPricingTab();

    const heroItem = pricingHeroData?.items?.[0]?.fields as
      | HeroItemFields
      | undefined;

    const tabItem = pricingTabData?.items as unknown as TabItem[] | undefined;

    return (
      <main>
        <Pricing heroItem={heroItem} tabItem={tabItem} />
      </main>
    );
  } catch (err) {
    console.error('Error fetching pricing content:', err);
    return (
      <main>
        <h1>Pricing</h1>
        <p>Unable to load content — please try again later.</p>
      </main>
    );
  }
}
