import React from "react";
import type { ReactNode } from "react";
import { FaAngleDown } from "react-icons/fa";
import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";
import type { ButtonOptions } from "../../../components/buttons/ButtonMenu";
import { ButtonMenu } from "../../../components/buttons/ButtonMenu";

interface TableProps {
  headers: string[];
  data: Array<Record<string, string | number | boolean>>;
  buttons: ButtonOptions[];
}

export const Table = ({ headers, data, buttons }: TableProps) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.keys(item).map((key) => (
              <td key={key} className="border px-4 py-2">
                {String(item[key as keyof typeof item])}
              </td>
            ))}
            <td>
              <ButtonMenu
                label="Opções"
                endIcon={<FaAngleDown />}
                buttons={buttons}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <ListHeader />
      <ListItem />
    </table>
  );
};
