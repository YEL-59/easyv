import PriceAdvertige from "@/components/main/pricing/price-advertige";
import PriceBanner from "@/components/main/pricing/price-banner";
import Compareplane from "@/components/main/pricing/price-compareplane";
import PriceFaq from "@/components/main/pricing/price-faq";
import Planedetail from "@/components/main/pricing/price-planedetail";

const Pricing = () => {
  return (
    <>
      <div>
        <PriceBanner />
        <PriceAdvertige />
        <Compareplane />
        <Planedetail />
        <PriceFaq />
      </div>
    </>
  );
};

export default Pricing;
