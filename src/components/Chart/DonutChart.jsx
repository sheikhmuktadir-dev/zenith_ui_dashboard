import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { HiChartPie } from "react-icons/hi";
import Style from "./chart.module.css";

const data = [
  { name: "Used", value: 75 },
  { name: "Remaining", value: 25 },
];

export default function DonutChart() {
  return (
    <div className={Style.chartBox}>
      <div className={Style.chartBoxFlex}>
        <div className={Style.chartBoxHeading}>
          <div className={Style.chartBoxTitle}>Storage Usage</div>
        </div>
        <div className={Style.chartHeadingBox}>
          <HiChartPie />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
          >
            <Cell fill="rgb(67, 24, 255)" />
            <Cell fill="#e6edf9" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Text */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>75%</h2>
        <p style={{ margin: 0, color: "#a3aed0", fontSize: 13 }}>Used</p>
      </div>
    </div>
  );
}
