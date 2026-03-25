import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

import Style from "./chart.module.css";
import { dailyTrafficData } from "../../data/Charts";

export default function DailyTrafficChart() {
  return (
    <div className={Style.chartBox}>
      <div className={Style.chartBoxTop}>
        <div className={Style.chartBoxFlex}>
          <div className={Style.chartBoxHeading}>
            <p className={Style.chartBoxSmallTitle}>Daily Traffic</p>
          </div>
          <p className={Style.chartBoxIncrement}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.4em"
              width="1.4em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 14l5-5 5 5z" />
            </svg>
            <span>+2.45%</span>
          </p>
        </div>

        <div className={Style.chartVisitor}>
          <h3>2.579</h3>
          <p className={Style.chartBoxSmallTitle}>Visitors</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={dailyTrafficData}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#a3aed0", fontSize: 13, fontWeight: 500 }}
          />

          {/* Gradient */}
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#422afb" />
              <stop offset="100%" stopColor="rgba(67, 24, 255, 0.28)" />
            </linearGradient>
          </defs>

          <Bar
            dataKey="value"
            fill="url(#barGradient)"
            radius={[10, 10, 0, 0]} // rounded top
            barSize={16}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
