"use client";
import HomeCard from "@/components/HomeCard";
import React from "react";

const HomeCardList = () => {
  return (
    <section className="py-8 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ">
      <HomeCard
        className="bg-orange"
        icon="GoPlus"
        title="Nueva Reunión"
        desc="Prepara una reunión"
        handleClick={() => console.log("hi")}
      />
      <HomeCard
        className="bg-blue-1"
        icon="GoTab"
        iconSize={30}
        title="Unirse"
        desc="Prepara una reunión"
      />
      <HomeCard
        className="bg-purple"
        icon="GoCalendar"
        title="Programar reunión"
        desc="Prepara una reunión"
      />
      <HomeCard
        className="bg-yellow"
        icon="GoDeviceCameraVideo"
        title="Ver Grabaciones"
        desc="Prepara una reunión"
      />
    </section>
  );
};

export default HomeCardList;
