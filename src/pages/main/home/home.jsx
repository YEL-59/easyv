import Automation from "@/components/main/home/automation";
import HomeBanner from "@/components/main/home/home-banner";
import Plan from "@/components/main/home/plan";
import Revolutionizing from "@/components/main/home/Revolutionizing";
import SimplifyMigration from "@/components/main/home/simplify-migration";
import Subscribe from "@/components/main/home/subscribe";

const Home = () => {
  return (
    <>
      <div>
        <HomeBanner />
        <SimplifyMigration />
        <Plan />
        <Revolutionizing />
        <Automation />
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
