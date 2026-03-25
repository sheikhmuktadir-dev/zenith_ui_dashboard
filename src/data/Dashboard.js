import { MdBarChart } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { MdHome } from "react-icons/md";

export const dashboardCards = [
  {
    id: 1,
    title: "Earnings",
    value: "$340.5",
    icon: MdBarChart,
  },
  {
    id: 2,
    title: "Spend this month",
    value: "$642.39",
    icon: MdAttachMoney,
  },
  {
    id: 3,
    title: "Sales",
    value: "$574.34",
    icon: MdShoppingCart,
  },
  {
    id: 4,
    title: "Your Balance",
    value: "$1,000",
    icon: MdAccountBalanceWallet,
  },
  {
    id: 5,
    title: "New Tasks",
    value: "145",
    icon: MdTask,
  },
  {
    id: 6,
    title: "Total Projects",
    value: "$2433",
    icon: MdHome,
  },
];
