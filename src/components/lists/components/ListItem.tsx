import React from "react";
import { ButtonMenu } from "../../buttons/ButtonMenu";
import { FaAngleDown } from "react-icons/fa6";
import type { ButtonOptions } from "../../buttons/ButtonMenu";

export interface ListItemProps {
  data: Array<Record<string, string | number | boolean>>;
  buttons: ButtonOptions[];
}

export const ListItem = ({ data, buttons }: ListItemProps) => {
  return (
    <>
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
    </>
  );
};
