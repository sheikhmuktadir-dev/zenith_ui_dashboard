import { MdHome, MdOutlineShoppingCart, MdPerson } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

export const sidebarData = [
  {
    name: "Main Dashboard",
    path: "/",
    icon: MdHome,
    end: true,
  },
  {
    name: "NFT Marketplace",
    path: "/nft-marketplace",
    icon: MdOutlineShoppingCart,
  },
  {
    name: "Data Tables",
    path: "/data-tables",
    icon: MdOutlineBarChart,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: MdPerson,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: IoAnalytics,
  },
  {
    name: "General Settings",
    path: "/general-settings",
    icon: IoIosSettings,
  },
];

export const upgradeData = {
  title: "Upgrade to PRO",
  description:
    "Improve your development process and start doing more with Zenith UI PRO!",
};

export const profileMenuData = [
  {
    name: "View Profile",
    path: "/profile",
  },
  {
    name: "Upgrade to Pro",
    path: "/upgrade",
  },
];
