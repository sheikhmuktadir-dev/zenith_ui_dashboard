import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";
import Style from "./chart.module.css";
import { MdBarChart } from "react-icons/md";
import { areaData } from "../../data/Charts";

export default function AreaChartBox() {
  return (
    <div className={Style.chartBox}>
      <div className={Style.chartBoxFlex}>
        <div className={Style.chartBoxHeading}>
          <div className={Style.chartBoxTitle}>Revenue Growth</div>
        </div>
        <div className={Style.chartHeadingBox}>
          <MdBarChart />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={areaData}>
          <defs>
            <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#422afb" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#422afb" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#422afb"
            fill="url(#colorArea)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
