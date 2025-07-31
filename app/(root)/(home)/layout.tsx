import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <section className="flex flex-col full-height w-full p-8 max-sm:pt-28">
          {children}
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
