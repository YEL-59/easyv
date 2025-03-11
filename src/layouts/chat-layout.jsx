import Sidebar from "@/components/dashboard/chat-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function ChatLayout() {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <main className="ml-[80px] border border-red-300 w-[calc(100vw-400px)]">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
