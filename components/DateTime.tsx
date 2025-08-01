"use client";
import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const parsedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(date);

  const time = date
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .split(" ")[0];

  const cycle =
    Number(
      date.toLocaleTimeString("en-US", { hourCycle: "h24" }).split(":")[0]
    ) >= 12
      ? "pm"
      : "am";

  return (
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
  );
};

export default DateTime;
