import React from "react";
import HomeCardList from "@/components/HomeCardList";
import DateTime from "@/components/DateTime";

const Home = () => {
  return (
    <section className="h-full w-full flex flex-col">
      <div className="w-full min-h-[300px] bg-[url(/images/hero-background.png)] bg-cover bg-no-repeat rounded-3xl sm:px-10 sm:py-9 px-7 py-8 flex flex-col justify-between">
        <div className="glass-box sm:text-base text-sm text-[#cdd2e7] tracking-wide py-2 px-3">
          Upcoming Meeting at: 12:30 PM
        </div>
        <DateTime />
      </div>
      <HomeCardList />
    </section>
  );
};

export default Home;
