import Style from "./analytics.module.css";
import RevenueChart from "../../components/Chart/RevenueChart";
import WeeklyRevenueChart from "../../components/Chart/WeeklyRevenueChart";
import DailyTrafficChart from "../../components/Chart/DailyTrafficChart";
import PieBoxChart from "../../components/Chart/PieBoxChart";
import ProgressChart from "../../components/Chart/ProgressChart";
import DonutChart from "../../components/Chart/DonutChart";

export default function Analytics() {
  return (
    <div className={Style.analyticsMain}>
      <div className={Style.analyticsChartSmall}>
        <DonutChart />
      </div>
      <div className={Style.analyticsChartSmall}>
        <DailyTrafficChart />
      </div>
      <div className={Style.analyticsChartSmall}>
        <RevenueChart />
      </div>
      <div className={Style.analyticsChartSmall}>
        <PieBoxChart />
      </div>
      <div className={Style.analyticsChartLarge}>
        <ProgressChart />
      </div>
      <div className={Style.analyticsChartLarge}>
        <WeeklyRevenueChart />
      </div>
    </div>
  );
}
