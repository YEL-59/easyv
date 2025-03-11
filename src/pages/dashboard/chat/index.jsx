import Chatlogo from "@/assets/Chatlogo";
import Icon4 from "@/assets/Icon4";
import { Mic, ArrowRight, Paperclip } from "lucide-react";

export default function Chat() {
  const cardData = [
    {
      title: "Quick Queries",
      description: "Instant answers to common migration-related questions.",
    },
    {
      title: "Application Assistance",
      description: "Help with forms, GTE writing, and submission tracking",
    },
    {
      title: "Details Pathway",
      description:
        "Comprehensive migration guidance, including visa assistance, job search, and legal advice.",
    },
    {
      title: "Migration Pathway Plans",
      description:
        "Explore Tailored Migration Pathway Plans to Achieve Your Dream Destination with AI",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col justify-center items-center p-10">
        <div className="text-center flex flex-col justify-center items-center">
          <Chatlogo className="flex justify-center items-center" />
          <h1 className="text-black text-[38px] font-semibold leading-normal">
            How can we <span className="text-red-600">assist</span> you today?
          </h1>
          <p className="text-[#767676] text-[20px] font-normal leading-[164%] max-w-4xl mx-auto">
            Get expert migration guidance powered by AI agents specializing in
            Visa Processing, Study Abroad, and Job Relocation. Choose the agent
            that fits your needs and start your journey with ease.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="rounded-xl p-5 border w-[320px] text-left"
              >
                <div className="flex justify-between gap-5 mb-5">
                  <h1 className="text-[#666] text-[24px] font-medium leading-normal tracking-[-1.68px] max-w-11">
                    {card.title}
                  </h1>
                  <Icon4 />
                </div>
                <p className="max-w-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl flex items-center border border-gray-300 bg-[#1E1F22] rounded-full p-2 shadow-md mb-5 mx-auto">
        <div className="bg-[#424346] h-10 w-10 rounded-full flex justify-center items-center">
          <Paperclip className="text-white w-6 h-6 cursor-pointer" />
        </div>

        <input
          type="text"
          placeholder="Type your prompt here"
          className="flex-1 outline-none text-lg px-3 bg-transparent text-white placeholder-gray-400"
        />
        <Mic className="text-gray-500 w-6 h-6 cursor-pointer mx-3" />
        <button className="bg-red-600 p-3 rounded-full">
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
