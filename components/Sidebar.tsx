"use client";
import SidebarOption from "@/components/SidebarOption";
import { sidebarOptions } from "@/constants";
import { usePathname } from "next/navigation";
import { log } from "node:console";
import React from "react";

const Sidebar = () => {
  const path = usePathname();

  return (
    <aside className="bg-dark-blue-1 min-w-[264px] full-height  hidden md:block">
      <div className="mt-8 px-4 flex flex-col gap-3 text-white-1">
        {sidebarOptions.map(({ icon, label, route }) => (
          <SidebarOption
            isActive={path == route}
            key={label}
            icon={icon}
            label={label}
            route={route}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
