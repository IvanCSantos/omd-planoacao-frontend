import React from "react";
import type { ReactNode } from "react";
import { FaAngleDown } from "react-icons/fa";
import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";
import type { ButtonOptions } from "../../../components/buttons/ButtonMenu";
import { ButtonMenu } from "../../../components/buttons/ButtonMenu";
import type { ListHeaderProps } from "./ListHeader";
import type { ListItemProps } from "./ListItem";

export interface TableProps {
  headers: string[];
  data: Array<Record<string, string | number | boolean>>;
  buttons: ButtonOptions[];
}

export const Table = ({ headers, data, buttons }: TableProps) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <ListHeader headers={headers} />
      </thead>
      <tbody>
        <ListItem data={data} buttons={buttons} />
      </tbody>
    </table>
  );
};
