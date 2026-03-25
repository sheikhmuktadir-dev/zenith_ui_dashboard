import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import Style from "./chart.module.css";
import { revenueChartdata } from "../../data/Charts";
import { MdBarChart } from "react-icons/md";

export default function RevenueChart() {
  return (
    <div className={Style.chartBox}>
      <div className={Style.chartBoxTop}>
        <div className={Style.chartBoxFlex}>
          <div className={Style.chartBoxHeading}>
            <p className={Style.chartBoxSmallTitle}>Total Spent</p>
          </div>
          <div className={Style.chartHeadingBox}>
            <MdBarChart />
          </div>
        </div>

        <div className={Style.chartCount}>
          <h3>$37.5K</h3>
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
      </div>

      <ResponsiveContainer width="100%" height="75%">
        <LineChart data={revenueChartdata}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            padding={{ left: 20, right: 20 }}
            tick={{
              fill: "#a3aed0",
              fontSize: 13,
              fontWeight: 500,
            }}
            tickFormatter={(value) => value.toUpperCase()}
          />

          <Tooltip
            contentStyle={{
              color: "#fff",
              borderRadius: 10,
              minWidth: 140,
              padding: 15,
              border: "none",
              background: "rgba(0,0,0,0.7)",
            }}
          />

          {/* Purple Line */}
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#422afb"
            strokeWidth={5}
            dot={false}
          />

          {/* Blue Line */}
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#6ad2ff"
            strokeWidth={5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
