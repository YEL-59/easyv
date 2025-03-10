import { Input } from "@/components/ui/input";

const DesignPrinciple = () => {
  const principles = [
    {
      id: "01",
      number: "24+",
      title: "Skilled Experts Driving Your Migration Success",
    },
    {
      id: "02",
      number: "19+",
      title: "Successful Migrations Completed Monthly",
    },
    {
      id: "03",
      number: "1+",
      title: "Years of experience",
    },
    {
      id: "04",
      number: "4",
      title: "Across Country",
    },
  ];

  return (
    <>
      <div className="container mx-auto bg-[#fff] shadow-sm">
        <div className="flex justify-center gap-20 items-start p-10">
          <div>
            <h3 className="text-[#FF5241] font-montserrat text-[24px] not-italic font-normal leading-normal tracking-[-0.24px]">
              Our Design Principles
            </h3>
          </div>
          <div className="flex-1">
            <p className="text-[#111] font-questrial text-[40px] not-italic font-normal leading-[128%] tracking-[-0.4px]">
              Whether you're planning to study, work, or settle abroad,
              EasyMigrate is dedicated to making your migration journey
              seamless, efficient, and stress-free with AI-powered precision
            </p>
          </div>
        </div>
        <div className="py-5 border-b max-w-7xl mx-auto"></div>

        <div className="py-10 p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((principle) => (
              <div key={principle.id} className="flex gap-5">
                <div>
                  <p className="text-[#337500] font-questrial text-[28px] not-italic font-normal leading-normal tracking-[-0.28px]">
                    {principle.id}
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <div>
                    <p className="text-[#111] font-montserrat text-[56px] not-italic font-semibold leading-normal tracking-[-0.56px]">
                      {principle.number}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#636363] font-montserrat text-[16px] not-italic font-normal leading-normal">
                      {principle.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#FFFCFC] p-10 container mx-auto"></div>

      <div className="container mx-auto bg-[#F2F1EF] mb-20">
        <div className="p-10">
          <h1 className="text-[#FF5241] font-questrial text-[24px] font-normal leading-normal tracking-[-0.24px]">
            Subscribe to our newsletter
          </h1>
          <p className="text-black font-questrial text-[60px] font-normal leading-[72px] tracking-[-0.6px]">
            Get Expert Migration Tips, Updates, and Promotions Delivered
            Directly to Your Inbox—No Spam, Just Helpful Insights!
          </p>
        </div>
      </div>
    </>
  );
};

export default DesignPrinciple;
