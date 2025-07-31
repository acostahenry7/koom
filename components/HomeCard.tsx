import DynamicIcon from "@/components/DynamicIcon";
import React from "react";

interface HomeCardProps {
  className?: string;
  icon: string;
  iconSize?: number;
  title: string;
  desc: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  icon,
  iconSize,
  title,
  desc,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={`${className} rounded-xl h-full p-5 text-white flex flex-col justify-between min-h-[230px] w-full cursor-pointer`}
      onClick={handleClick}
    >
      <div className="glass-box !bg-[#ECF0FF]/50 h-14  min-w-14 flex items-center justify-center !rounded-lg">
        <DynamicIcon name={icon} size={iconSize || 36} />
      </div>
      <div className="">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm font-extralight text-white/80">{desc}</p>
      </div>
    </div>
  );
};

export default HomeCard;
