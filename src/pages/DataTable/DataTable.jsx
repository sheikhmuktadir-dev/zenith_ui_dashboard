import Style from "./datatable.module.css";
import Table from "../../components/Table/Table";
import {
  tableColumns,
  tableData,
  ordersColumns,
  ordersData,
  projectColumns,
  projectData,
  usersColumns,
  usersData,
} from "../../data/TableData";

export default function DataTable() {
  return (
    <div className={Style.dataTabledMain}>
      <div className={Style.dataTableBox}>
        <Table
          title="Project Overview"
          columns={tableColumns}
          data={tableData}
          showCheckbox={true}
        />
      </div>

      <div className={Style.dataTableBox}>
        <Table
          title="Recent Orders"
          columns={ordersColumns}
          data={ordersData}
          showCheckbox={true}
        />
      </div>

      <div className={Style.dataTableBox}>
        <Table
          title="Active Projects"
          columns={projectColumns}
          data={projectData}
          showCheckbox={true}
        />
      </div>

      <div className={Style.dataTableBox}>
        <Table
          title="User Management"
          columns={usersColumns}
          data={usersData}
          showCheckbox={true}
        />
      </div>
    </div>
  );
}
