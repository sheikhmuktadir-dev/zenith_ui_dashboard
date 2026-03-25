import DashboardCard from "../../components/Card/DashboardCard";
import DailyTrafficChart from "../../components/Chart/DailyTrafficChart";
import PieBoxChart from "../../components/Chart/PieBoxChart";
import RevenueChart from "../../components/Chart/RevenueChart";
import WeeklyRevenueChart from "../../components/Chart/WeeklyRevenueChart";
import { dashboardCards } from "../../data/Dashboard";
import Style from "./dashboard.module.css";
import { tableColumns, tableData } from "../../data/TableData";
import Table from "../../components/Table/Table";

export default function Dashboard() {
  return (
    <div className={Style.dashboardMain}>
      <div className={Style.dashboardCardGrid}>
        {dashboardCards.map((card) => {
          const Icon = card.icon;

          return (
            <DashboardCard
              key={card.id}
              title={card.title}
              value={card.value}
              Icon={Icon}
            />
          );
        })}
      </div>

      <div className={Style.dashboarChartTop}>
        <RevenueChart />
      </div>

      <div className={Style.dashboarChartTop}>
        <WeeklyRevenueChart />
      </div>

      <div className={Style.dashboarTableBottom}>
        <Table
          title="Project Overview"
          columns={tableColumns}
          data={tableData}
          showCheckbox={true}
        />
      </div>

      <div className={Style.dashboarChartBottom}>
        <DailyTrafficChart />
      </div>

      <div className={Style.dashboarChartBottom}>
        <PieBoxChart />
      </div>
    </div>
  );
}
