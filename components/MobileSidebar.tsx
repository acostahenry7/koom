"use client";
import SidebarOption from "@/components/SidebarOption";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { sidebarOptions } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

interface MobileSidebarProps {
  side?: "top" | "right" | "left" | "bottom";
  classNames?: string;
}

const MobileSidebar = ({ side = "left", classNames }: MobileSidebarProps) => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <FaBars size={24} className="text-white" />
      </SheetTrigger>

      <SheetContent className="bg-dark-blue-1 py-4 px-6" side={side}>
        <div className="flex items-center gap-0.5">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
            className="max-sm:size-10"
          />
          <span className="text-2xl font-extrabold text-white ">Koom</span>
        </div>
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
