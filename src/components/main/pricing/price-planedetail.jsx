import { CircleAlert, X, Check } from "lucide-react";
const Planedetail = () => {
  return (
    <div className="border-t-2 w-full container mx-auto py-10">
      <h1 className="text-black font-montserrat text-[28px] font-semibold leading-[120%] mb-6 px-5">
        Workspace
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-lg font-medium text-gray-700 border-b-2 w-full p-2">
              Number of seats
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">Up to 3</span>
          </div>
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-lg font-medium text-gray-700 border-b-2 w-full p-2">
              Number of objects
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">Up to 3</span>
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-gray-500 border-b-2 w-full p-2">Unlimited</h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              Unlimited
            </span>
          </div>
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-gray-500 border-b-2 w-full p-2">Up to 8</h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              Up to 12
            </span>
          </div>
        </div>
      </div>

      <h1 className="text-black font-montserrat text-[28px] font-semibold leading-[120%] mb-6  px-5 mt-5">
        Automations
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-lg font-medium text-gray-700 border-b-2 w-full p-2 flex justify-between">
              Number of credits
              <CircleAlert />
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">200</span>
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-gray-500 border-b-2 w-full p-2">2000</h2>
            <span className="text-gray-500 border-b-2 w-full p-2">4000</span>
          </div>
        </div>
      </div>

      <h1 className="text-black font-montserrat text-[28px] font-semibold leading-[120%] mb-6  px-5 mt-5">
        Email and Calendar
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-lg font-medium text-gray-700 border-b-2 w-full p-2 flex justify-between">
              Number of seats
              <CircleAlert />
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              1 account per user
            </span>
          </div>
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-lg font-medium text-gray-700 border-b-2 w-full p-2 flex justify-between">
              Email sharing
              <CircleAlert />
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              Individual metadata
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-gray-500 border-b-2 w-full p-2">
              2 account per user
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              4 account per user
            </span>
          </div>
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-gray-500 border-b-2 w-full p-2">
              Individual attachments
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              Specific contacts
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-lg font-medium text-gray-700 border-b-2 w-full p-2 flex justify-between">
              Email sends amount
              <CircleAlert />
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              500 sends per month
            </span>
          </div>
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-lg font-medium text-gray-700 border-b-2 w-full p-2">
              Bulk email sending
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              10 sends at a time
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-gray-500 border-b-2 w-full p-2">
              1000 sends per month
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              Unlimited
            </span>
          </div>
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-gray-500 border-b-2 w-full p-2">
              20 sends at a time
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              50 sends at a time
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-lg font-medium text-gray-700 border-b-2 w-full p-2 flex justify-between">
              Remove email watermark
              <CircleAlert />
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              <X />
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <div className="flex justify-between gap-5 p-3 ">
            <h2 className="text-lg font-medium text-gray-700 border-b-2 w-full p-2">
              <Check />
            </h2>
            <span className="text-gray-500 border-b-2 w-full p-2">
              {" "}
              <Check />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planedetail;
