import Folder from "@/assets/folder";
import { Button } from "../../ui/button";
import line1 from "../../../assets/Line (1).png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import migration from "../../../assets/migration.png";

const SimplifyMigration = () => {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="flex justify-between gap-10">
          <div>
            <div>
              <h1 className="text-black font-montserrat text-[71px] not-italic font-medium leading-[97px] max-w-2xl">
                Simplify migration with AI-powered automation.
              </h1>
              <p className="text-[16px] font-normal leading-[30px]">
                Our AI-powered platform simplifies migration, automates tasks,
                and streamlines your journey.
              </p>
              <div className="flex gap-5 mt-5 mb-10">
                <Button className="px-7 py-2">Learn More</Button>
                <Button className="bg-white text-black border px-7 py-2">
                  Book a Meeting
                </Button>
              </div>
              <div className="flex gap-10">
                <div>
                  <Card className="max-w-[288px] text-center flex flex-col items-center">
                    <CardHeader className="flex flex-col items-center">
                      <Folder className="w-6 h-6" />
                      <CardTitle className="text-center">
                        Effortlessly Manage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <p className="text-center">
                        Whether you're managing a simple move or a complex
                        relocation, our platform simplifies every step.
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center">
                      <p className="text-primary text-center text-sm">
                        Learn More
                      </p>
                    </CardFooter>
                  </Card>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    {" "}
                    <div className=" text-start p-0">
                      <h1 className="text-4xl font-semibold">30%</h1>

                      <p
                        className="max-w-sm text-black/80 font-montserrat text-xl not-italic font-normal leading-[33px]
"
                      >
                        Boost productivity with automated tasks and streamlined
                        workflows.
                      </p>
                    </div>
                    <div>
                      {" "}
                      <div>
                        {" "}
                        <div className=" text-start p-0">
                          <h1 className="text-4xl font-semibold">90%</h1>

                          <p
                            className="max-w-sm text-black/80  text-xl not-italic font-normal leading-[33px]
"
                          >
                            Achieve high customer satisfaction with intuitive
                            interface, praised by users for its ease of use.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={migration} alt="" />
            <div className="absolute left-28 -mt-10">
              <Card className="w-[300px]">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">100+</CardTitle>
                  <CardDescription>
                    Help People to Migrate Daily
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={line1} alt="" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimplifyMigration;
