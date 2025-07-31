import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as GoIcons from "react-icons/go";

const iconPacks = {
  fa: FaIcons,
  md: MdIcons,
  gr: GrIcons,
  go: GoIcons,
};

interface DynamicIconProps {
  pack?: "fa" | "md" | "gr" | "go";
  name: string;
  size?: number;
  color?: string;
  className?: string;
}
const DynamicIcon = ({
  pack,
  name,
  size = 16,
  color = "",
  className,
}: DynamicIconProps) => {
  const actualPack = pack || name?.slice(0, 2).toLowerCase();

  const iconSet = iconPacks[actualPack];
  const Icon = iconSet?.[name];

  if (!Icon) {
    return <span className="text-sm text-red-500">Not a valid icon</span>;
  }

  return <Icon size={size} color={color} className={className} />;
};

export default DynamicIcon;
