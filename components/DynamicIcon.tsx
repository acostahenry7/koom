import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";

const iconPacks = {
  fa: FaIcons,
  md: MdIcons,
  gr: GrIcons,
};

interface DynamicIconProps {
  pack?: "fa" | "md" | "gr";
  name: string;
  size?: number;
  color?: string;
  className?: string;
}
const DynamicIcon = ({
  pack = "fa",
  name,
  size = 16,
  color = "",
  className,
}: DynamicIconProps) => {
  const iconSet = iconPacks[pack];
  const Icon = iconSet?.[name];

  if (!Icon) {
    return <span className="text-sm text-red-500">Not a valid icon</span>;
  }

  return <Icon size={size} color={color} className={className} />;
};

export default DynamicIcon;
