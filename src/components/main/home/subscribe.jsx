import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const Subscribe = () => {
  return (
    <div className="py-20 flex flex-col items-center text-center">
      <h1 className="text-black font-montserrat text-[71px] not-italic font-medium leading-[97px] max-w-5xl">
        Start your migration journey with EasyMigrate. Subscribe now!
      </h1>

      <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>

      <p className="text-black/80 font-montserrat text-base not-italic font-normal leading-[30px] max-w-3xl mt-5">
        Embark on a seamless migration journey with EasyMigrate. Subscribe now
        for powerful tools that streamline task management and collaboration.
      </p>
    </div>
  );
};

export default Subscribe;
