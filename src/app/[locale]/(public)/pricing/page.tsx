// app/pricing/page.tsx
import Pricing from '@/components/pages/pricing';
import {getPricingData} from '@/services/pricing/pricing.api';

export const revalidate = 60;

type PricingFields = {
  bannerTitle?: string;
  bannerDescription?: string;
};

export default async function PricingPage() {
  try {
    const contentfulData = await getPricingData();
    const item = contentfulData?.items?.[0]?.fields as
      | PricingFields
      | undefined;

    if (!item) {
      return (
        <main>
          <h1>Pricing</h1>
          <p>Content not found.</p>
        </main>
      );
    }

    return (
      <main>
        <Pricing data={item} />
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
