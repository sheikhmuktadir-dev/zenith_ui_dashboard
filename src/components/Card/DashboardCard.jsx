import Style from "./card.module.css";

export default function DashboardCards({ title, value, Icon }) {
  return (
    <div className={Style.dashboardCard}>
      <div className={Style.cardIcon}>{Icon && <Icon />}</div>

      <div className={Style.cardright}>
        <p className={Style.cardTitle}>{title}</p>
        <h5 className={Style.cardValue}>{value}</h5>
      </div>
    </div>
  );
}
