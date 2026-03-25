import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import { weeklyChartData } from "../../data/Charts";
import Style from "./chart.module.css";
import { MdBarChart } from "react-icons/md";

export default function WeeklyRevenueChart() {
  return (
    <div className={Style.chartBox}>
      <div className={Style.chartBoxFlex}>
        <div className={Style.chartBoxHeading}>
          <div className={Style.chartBoxTitle}>Weekly Revenue</div>
        </div>
        <div className={Style.chartHeadingBox}>
          <MdBarChart />
        </div>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={weeklyChartData}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#a3aed0",
              fontSize: 13,
              fontWeight: 500,
            }}
          />

          <Tooltip
            cursor={false}
            contentStyle={{
              color: "#fff",
              borderRadius: 10,
              minWidth: 140,
              padding: 15,
              border: "none",
              background: "rgba(0,0,0,0.7)",
            }}
          />

          {/* Bottom (Blue) */}
          <Bar
            dataKey="bottom"
            stackId="a"
            fill="#6ad2ff"
            radius={[0, 0, 0, 0]} // bottom rounded
            barSize={16}
            isAnimationActive={false}
          />

          {/* Middle (Purple) */}
          <Bar dataKey="mid" stackId="a" fill="#422afb" barSize={16} />

          {/* Top (Light Gray) */}
          <Bar
            dataKey="top"
            stackId="a"
            fill="#f2f6fc"
            radius={[10, 10, 0, 0]} // top rounded
            barSize={16}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
