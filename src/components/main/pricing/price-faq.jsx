import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PriceFaq = () => {
  return (
    <>
      <div>
        <div className="container mx-auto pb-20">
          <div>
            <h1 className="text-[#000] text-center font-inter text-[48px] font-medium leading-[120%] py-5">
              Frequently Asked Questions
            </h1>
            <div>
              <Accordion type="single" collapsible className="w-full mt-14">
                <AccordionItem
                  value="item-1"
                  className="border px-5 mt-2 rounded"
                >
                  <AccordionTrigger>
                    Which pricing plan is right for me?
                  </AccordionTrigger>
                  <AccordionContent>
                    We understand that each organization is unique, requiring
                    specific features to support its workflows and projects.
                    Above you can see the features included in the different
                    plans to support your needs. If you need help in choosing
                    the right plan for you, reach out to our sales team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border px-5 mt-2 rounded"
                >
                  <AccordionTrigger>
                    How does our pricing work?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="border px-5 mt-2 rounded"
                >
                  <AccordionTrigger>What if I change my mind?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="border px-5 mt-2 rounded"
                >
                  <AccordionTrigger>
                    Do you offer any discounted plans?
                  </AccordionTrigger>
                  <AccordionContent>
                    We understand that each organization is unique, requiring
                    specific features to support its workflows and projects.
                    Above you can see the features included in the different
                    plans to support your needs. If you need help in choosing
                    the right plan for you, reach out to our sales team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  className="border px-5 mt-2 rounded"
                >
                  <AccordionTrigger>
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We understand that each organization is unique, requiring
                    specific features to support its workflows and projects.
                    Above you can see the features included in the different
                    plans to support your needs. If you need help in choosing
                    the right plan for you, reach out to our sales team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-6"
                  className="border px-5 mt-2 rounded"
                >
                  <AccordionTrigger>
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We understand that each organization is unique, requiring
                    specific features to support its workflows and projects.
                    Above you can see the features included in the different
                    plans to support your needs. If you need help in choosing
                    the right plan for you, reach out to our sales team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-7"
                  className="border px-5 mt-2 rounded"
                >
                  <AccordionTrigger>
                    How can I manage my billing?
                  </AccordionTrigger>
                  <AccordionContent>
                    We understand that each organization is unique, requiring
                    specific features to support its workflows and projects.
                    Above you can see the features included in the different
                    plans to support your needs. If you need help in choosing
                    the right plan for you, reach out to our sales team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-8"
                  className="border px-5 mt-2 rounded"
                >
                  <AccordionTrigger>Can I change my plan?</AccordionTrigger>
                  <AccordionContent>
                    We understand that each organization is unique, requiring
                    specific features to support its workflows and projects.
                    Above you can see the features included in the different
                    plans to support your needs. If you need help in choosing
                    the right plan for you, reach out to our sales team.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceFaq;
