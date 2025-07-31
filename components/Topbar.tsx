import MobileSidebar from "@/components/MobileSidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <section className="w-full h-[72px] bg-dark-blue-1 flex max-sm:fixed justify-between items-center px-6  ">
      <div className="flex items-center gap-0.5 ">
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="logo"
          className="max-sm:size-9"
        />
        <span className="text-[26px] font-extrabold text-white max-sm:hidden uppercase">
          Koom
        </span>
      </div>
      <div className="flex items-center gap-8">
        <SignedIn>
          <UserButton
            appearance={{
              variables: {
                colorBackground: "#1c1f2e",
                colorInput: "#252A41",
                colorPrimary: "#0e78f9",
                colorInputForeground: "white",
                colorForeground: "white",
              },
              layout: {},
            }}
          />
        </SignedIn>

        <MobileSidebar classNames="" />
      </div>
    </section>
  );
};

export default Topbar;
