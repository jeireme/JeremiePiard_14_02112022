import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Table.css";

function Table() {
  const data = useSelector((state) => state.users);

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
        size: 150,
      },
      {
        accessorKey: "department",
        header: "Departement",
        size: 150,
      },
      {
        accessorKey: "dateOfBirth",
        header: "Date of Birth",
        size: 150,
      },
      {
        accessorKey: "street",
        header: "Street",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
        size: 100,
      },
      {
        accessorKey: "zipCode",
        header: "Zip Code",
        size: 100,
      },
    ],
    []
  );

  return (
    <div className="container">
      <h1 className="employee-header">Current Employees</h1>

      <div>
        <MaterialReactTable
          columns={columns}
          data={data}
          muiTablePaperProps={{
            elevation: 3,
          }}
        />
      </div>

      <Link className="home-link" to="/JeremiePiard_14_02112022/">
        Home
      </Link>
    </div>
  );
}

export default Table;
