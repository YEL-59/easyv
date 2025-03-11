import {
  Sidebar as ShadCNSidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router";
import { uid } from "uid";
import { Plus } from "lucide-react";
import { Ellipsis } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon3 from "@/assets/Icon3";
import { MessageCircle } from "lucide-react";
import logo from "../../../assets/image 29.png";

export default function Sidebar() {
  const chats = [
    {
      id: uid(),
      title: "Hello There",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Hello",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Nice Job",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "See you",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Hello",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Nice Job",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "See you",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Hello There",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Hello",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Nice Job",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Nice Job",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "See you",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Hello",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Nice Job",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "See you",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Hello There",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Hello",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Nice Job",
      message: "This is a message",
    },
  ];

  const saved = [
    {
      id: uid(),
      title: "Hello There",
      message: "This is a message",
    },
    {
      id: uid(),
      title: "Hello",
      message: "This is a message",
    },
  ];

  return (
    <ShadCNSidebar className="ml-[64px] w-[336px] p-2 bg-[#282A2E]">
      <Tabs defaultValue="chats" className="w-full bg-[#282A2E]">
        <SidebarHeader>
          {/* Top */}
          <div className="flex justify-between">
            <h2 className="text-white">My Chats</h2>
            <div className="flex gap-5 mb-5">
              <div className="h-8 w-8 bg-[#1E1F22] text-white flex justify-center items-center hover:bg-red-600">
                <Plus />
              </div>
              <div className="h-8 w-8 bg-[#1E1F22] text-white flex justify-center items-center hover:bg-red-600">
                <Ellipsis />
              </div>
            </div>
          </div>
          {/* Tabs */}
          <TabsList className="bg-[#3F424A] p-2">
            <TabsTrigger
              value="chats"
              className="bg-transparent data-[state=active]:bg-[#1E1F22] text-background data-[state=active]:text-[#FF8B41]"
            >
              <MessageCircle className="size-5" /> Chats{" "}
              <span className="h-4 w-4 px-3 rounded ml-2 flex justify-center items-center ">
                24
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="saved"
              className="bg-transparent data-[state=active]:bg-[#1E1F22]  text-background data-[state=active]:text-[#FF8B41]"
            >
              <MessageCircle className="size-5" /> Saved{" "}
              <span className="h-4 w-4 px-3 rounded ml-2 flex justify-center items-center ">
                12
              </span>
            </TabsTrigger>
          </TabsList>
        </SidebarHeader>

        <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
          <Input type="email" placeholder="Email" />

          <Icon3 />
        </div>
        <SidebarContent>
          <TabsContent
            value="chats"
            className="space-y-2 overflow-y-auto h-screen"
          >
            {chats.map((chat) => (
              <Link
                to={`/dashboard/chat/${chat.id}`}
                key={chat.id}
                className="p-4 "
              >
                <div className="hover:bg-[#1E1F22] p-2 rounded">
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-2">
                      {" "}
                      <img src={logo} alt="" className="h-3 w-3" />
                      <h3
                        className="text-[#EEE]  text-[14px] not-italic font-semibold leading-normal
"
                      >
                        {chat.title}
                      </h3>
                    </div>
                    <div>
                      <p className="text-[rgba(171,171,171,0.6)] text-right  text-[10px] font-normal leading-[8px]">
                        9:34 PM
                      </p>
                    </div>
                  </div>

                  <p
                    className="pl-3 text-[#ABABAB] font-montserrat text-[12px] not-italic font-normal leading-[20px]
"
                  >
                    {chat.message}
                  </p>
                </div>
              </Link>
            ))}
          </TabsContent>
          <TabsContent
            value="saved"
            className="space-y-2 overflow-y-auto h-screen"
          >
            {saved.map((chat) => (
              <Link
                to={`/dashboard/chat/${chat.id}`}
                key={chat.id}
                className="p-4"
              >
                <div className="hover:bg-[#1E1F22] p-2 rounded">
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-2">
                      {" "}
                      <img src={logo} alt="" className="h-3 w-3" />
                      <h3
                        className="text-[#EEE]  text-[14px] not-italic font-semibold leading-normal
"
                      >
                        {chat.title}
                      </h3>
                    </div>
                    <div>
                      <p className="text-[rgba(171,171,171,0.6)] text-right font-montserrat text-[10px] font-normal leading-[8px]">
                        9:34 PM
                      </p>
                    </div>
                  </div>

                  <p
                    className="pl-3 text-[#ABABAB] font-montserrat text-[12px] not-italic font-normal leading-[20px]
"
                  >
                    {chat.message}
                  </p>
                </div>
              </Link>
            ))}
          </TabsContent>
        </SidebarContent>
      </Tabs>
    </ShadCNSidebar>
  );
}
