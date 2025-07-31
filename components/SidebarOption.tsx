import DynamicIcon from "@/components/DynamicIcon";
import Link from "next/link";
import React from "react";

interface SidebarOptionProps {
  label: string;
  icon: string;
  route: string;
  isActive: boolean;
}

const SidebarOption = ({
  label,
  icon,
  route,
  isActive,
}: SidebarOptionProps) => {
  return (
    <Link href={route}>
      <div
        className={`${
          isActive && "bg-blue-1 text-[#fff]"
        } px-3 flex justify-start items-center gap-4 py-3.5 rounded-lg hover:bg-blue-1 transition-colors duration-150`}
      >
        <DynamicIcon
          //@ts-ignore
          pack={icon?.slice(0, 2).toLowerCase()}
          name={icon}
          size={20}
        />
        <span className="text-lg font-medium">{label}</span>
      </div>
    </Link>
  );
};

export default SidebarOption;
