import { PageHero } from "@/components/Sections";
import ShopGrid from "@/components/ShopGrid";

export default function Shop() {
  return (
    <>
      <PageHero
        eyebrow="Shop the collection"
        title="Find the perfect gift"
        subtitle="Filter by occasion and discover a curated piece ready to be made personal. The perfect gift, every time."
      />
      <ShopGrid />
    </>
  );
}
