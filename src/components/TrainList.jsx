import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { Columns } from "./columns";
import Filter from "./filter";

const TrainList = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <React.Fragment>
      <div className="trainlist" align="center">
        <h2>Find Trains Here</h2>
        <Filter filter={globalFilter} setFilter={setGlobalFilter} />
        <div class="container">
          <table class="table table-bordered" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrainList;
