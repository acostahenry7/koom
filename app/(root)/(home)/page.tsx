import React from "react";
import HomeCardList from "@/components/HomeCardList";

const Home = () => {
  const date = new Date();

  const parsedDate = date.toLocaleDateString("es-DO", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const time = date
    .toLocaleTimeString("es-DO", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .split(" ")[0];

  const cycle =
    Number(
      date.toLocaleTimeString("es-DO", { hourCycle: "h24" }).split(":")[0]
    ) >= 12
      ? "pm"
      : "am";

  return (
    <section className="h-full w-full flex flex-col">
      <div className="w-full min-h-[300px] bg-[url(/images/hero-background.png)] bg-cover bg-no-repeat rounded-3xl sm:px-10 sm:py-9 px-7 py-8 flex flex-col justify-between">
        <div className="glass-box sm:text-base text-sm text-[#cdd2e7] tracking-wide py-2 px-3">
          Upcoming Meeting at: 12:30 PM
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-7xl text-3xl font-extrabold text-white">
            {time}
            <span className="uppercase lg:text-4xl text-3xl tracking-widest ml-2">
              {cycle}
            </span>
          </p>
          <p className="lg:text-xl sm:block hidden text-lg text-white-1 capitalize">
            {parsedDate}
          </p>
        </div>
      </div>
      <HomeCardList />
    </section>
  );
};

export default Home;
