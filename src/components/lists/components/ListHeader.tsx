export type ListHeaderProps = string[];

export const ListHeader = ({ headers }: { headers: ListHeaderProps }) => {
  return (
    <tr>
      {headers.map((header) => (
        <th key={header} className="text-left text-md px-2 py-2">
          {header}
        </th>
      ))}
    </tr>
  );
};
