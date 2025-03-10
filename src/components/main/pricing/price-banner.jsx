import bg from "../../../assets/pricepattern.png";
import Righticon from "@/assets/righticon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../../ui/button";
import { Badge } from "@/components/ui/badge";

const PriceBanner = () => {
  const plans = [
    {
      title: "Free",
      description: "per user/month, billed annually",
      price: "$0",
      ulhead: "For Small Teams",
      "badge-percentage": "-15%",
      badge: false,
      features: [
        "Real-time contact syncing",
        "Automatic data enrichment",
        "Up to 3 seats",
        "Up to 3 seats",
      ],
    },
    {
      title: "Basic",
      description: "per user/month, billed annually",
      price: "$39",
      "badge-percentage": "15%",
      ulhead: "For Growing Teams",
      badge: true,
      features: [
        "Private lists",
        "Enhanced email sending",
        "No seat limits",
        "Up to 3 seats",
      ],
    },
    {
      title: "Pro",
      description: "per user/month, billed annually",
      ulhead: "For Scaling Businesses",
      price: "$59",
      "badge-percentage": "25%",
      badge: true,
      features: [
        "Fully adjustable permissions",
        "Advanced data enrichment",
        "Priority support",
        "Up to 3 seats",
      ],
    },
  ];

  return (
    <>
      <div
        className="container mx-auto py-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="text-[#000] text-center font-montserrat text-[64px] font-normal leading-[120%]">
            Tailored Migration Plans for Every Step of Your Journey
          </h1>
          <p className="text-[#727272] text-center font-montserrat text-[20px] font-medium leading-[120%] max-w-3xl mx-auto py-5">
            Choose the right plan to simplify your migration process with expert
            guidance and AI-powered support.
          </p>
        </div>

        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="max-w-xl flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-black font-montserrat text-[24px] not-italic font-semibold leading-normal">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-black/63 text-base not-italic font-normal leading-[30px]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow ">
                <p className="text-black text-[48px] not-italic font-semibold leading-normal inline ">
                  {plan.price}
                </p>
                {plan.badge && (
                  <Badge className="ml-3">{plan["badge-percentage"]}</Badge>
                )}
              </CardContent>
              <CardContent className="flex-grow">
                <h1 className="mb-2 text-[#000] font-montserrat text-[14px] font-medium leading-[150%]">
                  {plan.ulhead}
                </h1>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 mb-5">
                      <Righticon />
                      <p className="text-black text-sm not-italic font-medium leading-normal">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* Footer stays at the bottom */}
              <CardFooter className="mt-auto">
                <Button className="w-full">Get This Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceBanner;
