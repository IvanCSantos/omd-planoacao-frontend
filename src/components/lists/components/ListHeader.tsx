import React from "react";

export type ListHeaderProps = string[];

export const ListHeader = ({ headers }: { headers: ListHeaderProps }) => {
  return (
    <tr>
      {headers.map((header) => (
        <th key={header} className="text-left">
          {header}
        </th>
      ))}
    </tr>
  );
};
