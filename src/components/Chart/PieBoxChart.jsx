import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { HiChartPie } from "react-icons/hi";
import Style from "./chart.module.css";

const data = [
  { name: "Your Files", value: 63, color: "rgb(67, 24, 255)" },
  { name: "System", value: 25, color: "#6ad2ff" },
  { name: "Other", value: 12, color: "#e6edf9" },
];

export default function PieBoxChart() {
  return (
    <div className={Style.chartBox}>
      <div className={Style.chartBoxFlex}>
        <div className={Style.chartBoxHeading}>
          <div className={Style.chartBoxTitle}>Your Pie Chart</div>
        </div>
        <div className={Style.chartHeadingBox}>
          <HiChartPie />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <defs>
            {/* Shadow filter */}
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow
                dx="0"
                dy="3"
                stdDeviation="3"
                floodColor="#000"
                floodOpacity="0.1"
              />
            </filter>
          </defs>

          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            startAngle={100}
            endAngle={-260}
            outerRadius={90}
            innerRadius={0}
            paddingAngle={2}
            filter="url(#shadow)"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} stroke="none" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Bottom Section */}
      <div className={Style.pieBottom}>
        <div>
          <p className={Style.legendText}>
            <span className={Style.dotPurple}></span> Your Files
          </p>
          <h5>63%</h5>
        </div>

        <div className={Style.divider}></div>

        <div>
          <p className={Style.legendText}>
            <span className={Style.dotBlue}></span> System
          </p>
          <h5>25%</h5>
        </div>
      </div>
    </div>
  );
}
