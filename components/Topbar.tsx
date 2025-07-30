import MobileSidebar from "@/components/MobileSidebar";
import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <section className="h-[72px] bg-dark-blue-1 flex  justify-between items-center px-6  ">
      <div className="flex items-center gap-0.5">
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="logo"
          className="max-sm:size-10"
        />
        <span className="text-2xl font-extrabold text-white max-sm:hidden">
          Koom
        </span>
      </div>
      <div>
        {/* Clerk Auth */}

        <MobileSidebar classNames="" />
      </div>
    </section>
  );
};

export default Topbar;
