import Style from "./table.module.css";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Table({
  columns,
  data,
  showCheckbox = false,
  title = "Table",
}) {
  return (
    <div className={Style.tableBox}>
      <div className={Style.tableBoxFlex}>
        <div className={Style.tableTitle}>{title}</div>
        <div className={Style.tableTitleBox}>
          <HiDotsHorizontal />
        </div>
      </div>
      <div className={Style.tableWrapper}>
        <table className={Style.table}>
          <thead>
            <tr>
              {showCheckbox && <th></th>}
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {showCheckbox && (
                  <td>
                    <input type="checkbox" />
                  </td>
                )}

                {columns.map((col) => (
                  <td key={col.key} data-label={col.label}>
                    {col.key === "name" ? (
                      <div className={Style.nameCell}>{row[col.key]}</div>
                    ) : col.render ? (
                      col.render(row[col.key], row)
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
