import { ButtonMenu } from "../../buttons/ButtonMenu";
import { FaAngleDown } from "react-icons/fa6";
import type { ButtonOptions } from "../../buttons/ButtonMenu";

export interface ListItemProps<T> {
  data: T[];
  keys: (keyof T)[];
  buttons?: (item: T) => ButtonOptions[];
}

export const ListItem = <T,>({ data, keys, buttons }: ListItemProps<T>) => {
  const formatValue = (key: string, value: unknown) => {
    if (key === "creationDate") {
      return new Date(value as string).toLocaleDateString("pt-BR");
    }
    if (key === "status" && typeof value === "string") {
      switch (value) {
        case "PENDING":
          return "Pendente";
        case "COMPLETED":
          return "Concluído";
        case "IN_PROGRESS":
          return "Em Andamento";
        default:
          return String(value);
      }
    }
    return String(value ?? "");
  };

  return (
    <>
      {data.map((item, index) => (
        <tr key={index} className="border-b-1 border-gray-100">
          {keys.map((key) => (
            <td key={String(key)} className=" px-4 py-2 text-sm">
              {formatValue(String(key), item[key])}
            </td>
          ))}
          {buttons && (
            <td className=" px-4 py-2">
              <ButtonMenu
                label="Opções"
                item={item}
                endIcon={<FaAngleDown />}
                buttons={buttons}
              />
            </td>
          )}
        </tr>
      ))}
    </>
  );
};
