import React from "react";

export const Filter = ({ filter, setFilter }) => {
  return (
    <span>
      <input
        type="text"
        placeholder="Search..."
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default Filter;
