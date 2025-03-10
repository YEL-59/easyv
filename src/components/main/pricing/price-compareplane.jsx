import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Righticon from "@/assets/righticon"; // Ensure you have this icon

const plans = {
  monthly: [
    {
      title: "Free",
      description: "per user/month",
      price: "$0",
      ulhead: "For Small Teams",
      "badge-percentage": "-15%",
      badge: false,
      features: [
        "Real-time contact syncing",
        "Automatic data enrichment",
        "Up to 3 seats",
      ],
    },
    {
      title: "Basic",
      description: "per user/month",
      price: "$49",
      "badge-percentage": "15%",
      ulhead: "For Growing Teams",
      badge: true,
      features: ["Private lists", "Enhanced email sending", "No seat limits"],
    },
    {
      title: "Pro",
      description: "per user/month",
      ulhead: "For Scaling Businesses",
      price: "$79",
      "badge-percentage": "25%",
      badge: true,
      features: [
        "Advanced data enrichment",
        "Priority support",
        "Unlimited seats",
      ],
    },
  ],
  yearly: [
    {
      title: "Free",
      description: "per user/year",
      price: "$0",
      ulhead: "For Small Teams",
      "badge-percentage": "-15%",
      badge: false,
    },
    {
      title: "Basic",
      description: "per user/year",
      price: "$39",
      "badge-percentage": "20%",
      ulhead: "For Growing Teams",
      badge: true,
    },
    {
      title: "Pro",
      description: "per user/year",
      ulhead: "For Scaling Businesses",
      price: "$59",
      "badge-percentage": "30%",
      badge: true,
    },
  ],
};

const Compareplane = () => {
  return (
    <div className="py-20 container mx-auto">
      <h1 className="text-black text-center font-inter text-[48px] font-medium leading-[120%] py-10">
        Compare Plans
      </h1>

      <Tabs defaultValue="monthly">
        <div className="flex justify-center items-center gap-5">
          <div>
            <h1
              className="text-black font-montserrat text-[18px] font-normal leading-[150%] pb-3
"
            >
              Billing Frequency
            </h1>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 p-2 rounded-lg flex gap-4">
                <TabsTrigger value="monthly">Billed Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Billed Yearly</TabsTrigger>
              </TabsList>
            </div>
          </div>
          <div className="flex-1">
            {" "}
            <TabsContent value="monthly">
              <div className="flex flex-col md:flex-row justify-center gap-8">
                {plans.monthly.map((plan, index) => (
                  <PlanCard key={index} plan={plan} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="flex flex-col md:flex-row justify-center gap-8">
                {plans.yearly.map((plan, index) => (
                  <PlanCard key={index} plan={plan} />
                ))}
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

// Reusable Plan Card Component
const PlanCard = ({ plan }) => {
  return (
    <Card className="w-full md:w-1/3 flex flex-col h-full shadow-md border border-gray-200 text-start">
      <CardHeader>
        <CardTitle className="text-black font-montserrat text-[24px] font-semibold leading-normal">
          {plan.title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-base font-normal leading-[30px]">
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-black text-[48px] font-semibold leading-normal inline">
          {plan.price}
        </p>
        {plan.badge && (
          <Badge className="ml-3 bg-red-500 text-white">
            {plan["badge-percentage"]}
          </Badge>
        )}
      </CardContent>
      <CardContent className="flex-grow">
        <h1 className="mb-2 text-[#000] font-montserrat text-[14px] font-medium leading-[150%]">
          {plan.ulhead}
        </h1>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full bg-transparent text-black border hover:bg-red-500">
          Get started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Compareplane;
