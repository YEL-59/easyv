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

const plans = [
  {
    title: "Basic Plan",
    description:
      "Provides GTE writing assistance to ensure your application meets all requirements for a smooth migration process.",
    price: "$12.00",
    features: [
      "GTE Writing Assistance",
      "GTE Writing Assistance",
      "GTE Writing Assistance",
      "GTE Writing Assistance",
      "GTE Writing Assistance",
    ],
  },
  {
    title: "Premium Plan",
    description:
      "Offers complete migration support, including documentation, visa assistance, and more.",
    price: "$25.00",
    features: [
      "Complete Documentation Assistance",
      "Visa Assistance",
      "Priority Support",
      "Complete Documentation Assistance",
      "Visa Assistance",
    ],
  },
  {
    title: "Advanced Plan",
    description:
      "Get personalized assistance for complex relocations, including custom services and consultations.",
    price: "$40.00",
    features: [
      "Custom Services",
      "Consultation Support",
      "Advanced Relocation Assistance",
      "Custom Services",
      "Consultation Support",
      "Advanced Relocation Assistance",
    ],
  },
];

const Plan = () => {
  return (
    <>
      <div className="py-10 container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-black font-montserrat text-[71px] not-italic font-medium leading-[97px]">
            Choose the Perfect Plan for You
          </h1>
          <p className="text-black/80 font-montserrat text-base not-italic font-normal leading-[30px] max-w-[60rem] mx-auto">
            Finding the right plan is key to unlocking the full potential of
            your migration journey with MoveSmart. Whether you're a student
            relocating for studies or a professional managing a complex move,
            our tailored plans enhance every step of the process.
          </p>
        </div>

        <div className="  py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className=" w-[447px] max-w-xl flex flex-col h-full"
            >
              <CardHeader>
                <CardTitle className="text-black font-montserrat text-[24px] not-italic font-semibold leading-normal">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-black/63 text-base not-italic font-normal leading-[30px]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-black text-[48px] not-italic font-semibold leading-normal">
                  {plan.price}
                </p>
              </CardContent>
              <CardContent className="flex-grow">
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

export default Plan;
