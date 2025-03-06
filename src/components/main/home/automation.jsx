import Folder from "@/assets/folder";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Task from "@/assets/task";

// Card Data Array
const automationCards = [
  {
    id: 1,
    icon: <Task />,
    title: "Task Automation",
    description:
      "Our platform automates your migration journey with smart triggers and actions, making relocation seamless and stress-free.",
  },
  {
    id: 2,
    icon: <Task />,
    title: "Workflow Integration",
    description:
      "Seamlessly integrate automated workflows to enhance your migration process with minimal effort.",
  },
  {
    id: 3,
    icon: <Task />,
    title: "Custom Triggers",
    description:
      "Set up custom triggers that automatically handle migration steps, reducing manual intervention.",
  },
  {
    id: 4,
    icon: <Task />,
    title: "Smart Notifications",
    description:
      "Stay updated with automated notifications ensuring you're always informed throughout the process.",
  },
];

const Automation = () => {
  return (
    <>
      <div className="py-20 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h1 className="text-black font-montserrat text-[71px] not-italic font-medium leading-[97px] tracking-tight max-w-2xl">
            Unlock seamless automation for efficient migration.
          </h1>
          <div>
            <p className="text-black/80 font-montserrat text-[16px] not-italic font-normal leading-[30px] tracking-tight mb-5">
              You can revolutionize your business processes through powerful
              workflow automation. Our platform enables you to streamline
              repetitive tasks.
            </p>

            <Button className="px-5">View More</Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
          {automationCards.map((card) => (
            <Card
              key={card.id}
              className="max-w-3xl border-0 shadow-[0px_4px_44.5px_0px_rgba(0,0,0,0.03)] flex flex-col h-full"
            >
              <CardHeader>
                <CardTitle>
                  <div className="flex gap-5 items-center">
                    <div>{card.icon}</div>
                    <h2 className="text-black text-xl not-italic font-semibold leading-[30px]">
                      {card.title}
                    </h2>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="max-w-sm text-black/80 text-base not-italic font-normal leading-[30px]">
                  {card.description}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <p className="text-primary cursor-pointer">Learn More</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Automation;
