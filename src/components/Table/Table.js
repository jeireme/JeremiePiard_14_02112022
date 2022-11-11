import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Table.css";

function Table() {
  // In order to make testing easier, 30 fake employees had been added to the database (stored in mockedData.js)
  const data = useSelector((state) => state.users);

  // useMemo memoizes a value that doesn't need to be recalculated, it improves performances
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
    <div className="container" role="main">
      <h1 className="employee-header">Current Employees</h1>

      <div>
        <MaterialReactTable
          columns={columns}
          data={data}
          // muiTablePaperProps is used for styling shadow
          muiTablePaperProps={{
            elevation: 3,
          }}
        />
      </div>

      {/* Link to go back to the form page */}
      <Link className="home-link" to="/JeremiePiard_14_02112022/">
        Home
      </Link>
    </div>
  );
}

export default Table;
