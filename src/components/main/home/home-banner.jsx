import Graph from "@/assets/graph1";
import line from "../../../assets/Line.png";
import bannerbg from "../../../assets/banner.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Graph2 from "@/assets/graph2";
import { Button } from "../../ui/button";
import Task from "@/assets/task";
import Logo1 from "@/assets/logo1";
import Task1 from "@/assets/task1";
import Logo2 from "@/assets/logo2";
import Logo3 from "@/assets/logo3";
import Logo4 from "@/assets/logo4";
import Logo5 from "@/assets/logo5";

const HomeBanner = () => {
  return (
    <>
      <div className="container mx-auto h-[80svh]">
        <div className="flex gap-20 mt-10">
          <div className="flex gap-5">
            <div className="-mt-16">
              <img src={line} alt="" />
            </div>
            <div className="relative">
              <img src={bannerbg} alt="" />
              <div className="absolute -bottom-24 -left-32">
                <Card
                  className="w-[419px] aspect-[419/270] rounded-xl border-0 shadow-[0px_4px_44.5px_0px_rgba(0,0,0,0.03)]
"
                >
                  <CardHeader>
                    <CardTitle>
                      <h1 className="max-w-[250px] text-lg">
                        Migration with AI-powered solutions.
                      </h1>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p>People Migrate</p>
                        <p className="text-2xl font-bold">150k+</p>
                      </div>
                      <div>
                        <Graph />
                      </div>
                    </div>
                  </CardContent>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p>Total Countries</p>
                        <p className="text-2xl font-bold">100k+</p>
                      </div>
                      <div>
                        <Graph2 />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="relative">
            <h1 className="text-[71px] font-medium max-w-[50rem]">
              Transform Your Migration Efficiency
            </h1>
            <p className="text-[16px] font-normal max-w-xl">
              Optimize your migration journey with EasyMigrate, the all-in-one
              AI-powered platform designed to help students and professionals
              seamlessly relocate to their preferred country.
            </p>
            <div className="flex gap-5 mt-5 mb-5">
              <Button className="px-7 py-2">Get Started</Button>
              <Button className="bg-white text-black border px-7 py-2">
                Contact Us
              </Button>
            </div>

            <div className="absolute mt-16 -left-40">
              <div className="flex gap-5 ">
                <div className="">
                  <Card
                    className="max-w-3xl border-0 shadow-[0px_4px_44.5px_0px_rgba(0,0,0,0.03)]
"
                  >
                    <CardHeader>
                      <CardTitle>
                        <div className="flex gap-5 items-center">
                          <div>
                            <Task />
                          </div>
                          <h2
                            className="text-black  text-xl not-italic font-semibold leading-[30px]
"
                          >
                            Task Automation
                          </h2>
                        </div>{" "}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p
                        className="max-w-sm text-black/80  text-base not-italic font-normal leading-[30px]
"
                      >
                        Our platform automates your migration journey with smart
                        triggers and actions, making relocation seamless and
                        stress-free.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card
                    className="max-w-3xl border-0 shadow-[0px_4px_44.5px_0px_rgba(0,0,0,0.03)]
"
                  >
                    <CardHeader>
                      <CardTitle>
                        <div className="flex gap-5 items-center">
                          <div>
                            <Task1 />
                          </div>
                          <h2
                            className="text-black  text-xl not-italic font-semibold leading-[30px]
"
                          >
                            Real-Time Collaborate
                          </h2>
                        </div>{" "}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p
                        className="max-w-sm text-black/80  text-base not-italic font-normal leading-[30px]
"
                      >
                        Enhance your migration journey with real-time
                        collaboration. Track progress, manage tasks, and stay
                        organized effortlessly.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5 container mx-auto">
        <div>
          <Logo1 />
        </div>
        <div>
          <Logo2 />
        </div>
        <div>
          <Logo3 />
        </div>
        <div>
          <Logo4 />
        </div>
        <div>
          <Logo5 />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
