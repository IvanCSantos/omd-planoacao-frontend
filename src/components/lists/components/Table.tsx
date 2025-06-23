import React from "react";
import type { ReactNode } from "react";
import { FaAngleDown } from "react-icons/fa";
import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";
import type { ButtonOptions } from "../../../components/buttons/ButtonMenu";
import { ButtonMenu } from "../../../components/buttons/ButtonMenu";
import type { ListHeaderProps } from "./ListHeader";
import type { ListItemProps } from "./ListItem";

export interface TableProps<T> {
  headers: string[];
  data: T[];
  keys: (keyof T)[];
  buttons: (item: T) => ButtonOptions[];
}

export const Table = <T,>({ headers, data, keys, buttons }: TableProps<T>) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <ListHeader headers={headers} />
      </thead>
      <tbody>
        <ListItem<T> data={data} keys={keys} buttons={buttons} />
      </tbody>
    </table>
  );
};
