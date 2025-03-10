import aboutimg1 from "../../../assets/about1.png";
import aboutimg2 from "../../../assets/about2.png";
import aboutimg3 from "../../../assets/about3.png";
const AboutVision = () => {
  return (
    <>
      <div className="mt-80">
        <div className="container mx-auto bg-[#F2F1EF] p-10 h-auto">
          <div>
            <div className="flex  justify-center items-end gap-5 -mt-60 relative">
              <div>
                <img src={aboutimg1} alt="" />
              </div>
              <div>
                {" "}
                <img src={aboutimg2} alt="" />
              </div>
              <div>
                <h1 className="text-[#111] text-right font-montserrat text-[88px] not-italic font-normal leading-normal tracking-[-0.88px] absolute -top-[10rem] left-[450px]">
                  for Transforming Migration
                </h1>
              </div>
            </div>

            <div>
              <p className="text-[#636363] font-montserrat text-[20px] not-italic font-medium leading-[164%] tracking-[-0.4px] py-20 max-w-6xl mx-auto ">
                Seamless migration starts today. With AI-powered insights, we
                simplify your journey to a new country. Optimize your options,
                unlock opportunities, and navigate the process with confidence.
                Stay ahead, make informed decisions, and turn your migration
                goals into reality.
              </p>
              <p className="text-[#636363] font-montserrat text-[20px] not-italic font-medium leading-[164%] tracking-[-0.4px]  max-w-6xl mx-auto ">
                Navigate your migration journey with clarity and confidence. Our
                AI-powered platform cuts through complexities, ensuring a smooth
                transition to your new country. From key milestones to final
                approvals, we streamline the process, adapt to challenges, and
                scale solutions to fit your needs.
              </p>

              <div className="py-2 max-w-6xl mx-auto">
                <h3 className="text-[#FF5241] font-montserrat text-[24px] not-italic font-normal leading-normal tracking-[-0.24px]">
                  Our Design Principles
                </h3>
                <p
                  className="text-[#111] font-questrial text-[40px] not-italic font-normal leading-[128%] tracking-[-0.4px]
"
                >
                  Whether you're planning to study, work, or settle abroad,
                  EasyMigrate is dedicated to making your migration journey
                  seamless, efficient, and stress-free with AI-powered precision
                </p>
              </div>
              <div className=" py-12 flex gap-5 max-w-6xl mx-auto">
                <div className="flex items-start ">
                  <div>
                    <p
                      className="text-[#FF5241] font-questrial text-[32px] not-italic font-normal leading-normal tracking-[-0.32px]
"
                    >
                      01
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#111] font-montserrat text-[48px] not-italic font-normal leading-normal 
"
                    >
                      Simplicity
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div>
                    <p
                      className="text-[#FF5241] font-questrial text-[32px] not-italic font-normal leading-normal tracking-[-0.32px]
"
                    >
                      02
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#111] font-montserrat text-[48px] not-italic font-normal leading-normal 
"
                    >
                      Accuracy
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div>
                    <p
                      className="text-[#FF5241] font-questrial text-[32px] not-italic font-normal leading-normal tracking-[-0.32px]
"
                    >
                      03
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#111] font-montserrat text-[48px] not-italic font-normal leading-normal 
"
                    >
                      Transparency
                    </p>
                  </div>
                </div>
                <div className="flex items-start ">
                  <div>
                    <p
                      className="text-[#FF5241] font-questrial text-[32px] not-italic font-normal leading-normal tracking-[-0.32px]
"
                    >
                      04
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#111] font-montserrat text-[48px] not-italic font-normal leading-normal 
"
                    >
                      Reliability
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-6xl mx-auto pb-10">
                <img src={aboutimg3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVision;
