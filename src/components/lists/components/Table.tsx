import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";
import type { ButtonOptions } from "../../../components/buttons/ButtonMenu";

export interface TableProps<T> {
  headers: string[];
  data: T[];
  keys: (keyof T)[];
  buttons?: (item: T) => ButtonOptions[];
}

export const Table = <T,>({ headers, data, keys, buttons }: TableProps<T>) => {
  return (
    <table className="border-collapse w-full">
      <thead className="bg-gray-50 text-gray-700 rounded-tl-xl rounded-tr-xl overflow-hidden">
        <ListHeader headers={headers} />
      </thead>
      <tbody>
        <ListItem<T> data={data} keys={keys} buttons={buttons} />
      </tbody>
    </table>
  );
};
