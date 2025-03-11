import Chat from "@/assets/chat";
import logo from "../../../assets/Logo.png";
import Setting from "@/assets/setting";
import Icon1 from "@/assets/icon1";
import Icon2 from "@/assets/Icon2";
import Logout from "@/assets/logout";

const DashboardSidebar = () => {
  return (
    <>
      <div className="w-[64px] h-screen  bg-[#1E1F22] ">
        <div className="flex flex-col gap-5 h-screen justify-between items-center py-5">
          <div>
            <div className="flex flex-col gap-20 justify-between items-center">
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                    <Chat />
                  </div>
                  <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                    <Setting />
                  </div>
                  <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                    <Icon1 />
                  </div>
                  <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                    <Icon2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-5 justify-between">
              <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                <Logout />
              </div>
              <div className="h-8  w-8 bg-[#2d2e30] flex justify-center items-center hover:bg-red-600">
                <Logout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
