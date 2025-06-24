import React, { useState } from "react";
import { Table } from "./components/Table";
import { InputText } from "../inputs/InputText";
import { ButtonSave } from "../buttons/ButtonSave";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { createAction, editAction, removeAction } from "../../services/api";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FcCancel } from "react-icons/fc";
import { BiSolidSave } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";

export interface ActionListType {
  id: number;
  title: string;
  status: string;
  dueDate: string;
}

const statusLabels = {
  PENDING: "Pendente",
  IN_PROGRESS: "Em andamento",
  COMPLETED: "Concluído",
};

const statusOptions = ["PENDING", "IN_PROGRESS", "COMPLETED"];

export const ActionList = ({
  actionPlanId,
  actionList,
  reload,
}: {
  actionPlanId: number;
  actionList: ActionListType[];
  reload: () => void;
}) => {
  const [newAction, setNewAction] = useState({
    title: "",
    status: "PENDING",
    dueDate: "",
  });

  const [editActionId, setEditActionId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<Partial<ActionListType>>({});

  const handleAdd = async () => {
    try {
      await createAction({
        actionPlanId,
        ...newAction,
      });
      setNewAction({ title: "", status: "PENDING", dueDate: "" });
      reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveEdit = async (item: ActionListType) => {
    try {
      await editAction({
        id: item.id,
        ...editValues,
      });
      setEditActionId(null);
      setEditValues({});
      reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await removeAction(id);
      reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1">Título</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Prazo</th>
            <th className="border px-2 py-1">Ações</th>
          </tr>
        </thead>
        <tbody>
          {actionList.map((item, index) => (
            <tr
              key={item.id}
              className="py-2 border-b-1 border-gray-300 align-middle"
            >
              {editActionId === item.id ? (
                <>
                  <td className="px-2 py-1">
                    <input
                      value={editValues.title ?? item.title}
                      onChange={(e) =>
                        setEditValues((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      className="border rounded px-1 py-0.5 w-full text-sm"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <select
                      value={editValues.status ?? item.status}
                      onChange={(e) =>
                        setEditValues((prev) => ({
                          ...prev,
                          status: e.target.value,
                        }))
                      }
                      className="border rounded px-1 py-0.5 w-full text-sm"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {statusLabels[status as keyof typeof statusLabels]}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-2 py-1">
                    <input
                      type="date"
                      value={editValues.dueDate ?? item.dueDate}
                      onChange={(e) =>
                        setEditValues((prev) => ({
                          ...prev,
                          dueDate: e.target.value,
                        }))
                      }
                      className="border rounded px-1 py-0.5 w-full text-sm"
                    />
                  </td>
                  <td className="px-2 py-1 flex gap-2">
                    <button
                      onClick={() => handleSaveEdit(item)}
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      <BiSolidSave />
                    </button>
                    <button
                      onClick={() => {
                        setEditActionId(null);
                        setEditValues({});
                      }}
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      <FcCancel />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="px-2 py-1">{item.title}</td>
                  <td className="px-2 py-1">
                    {statusLabels[item.status as keyof typeof statusLabels] ??
                      item.status}
                  </td>
                  <td className="px-2 py-1">
                    {Intl.DateTimeFormat("pt-BR").format(
                      new Date(item.dueDate)
                    )}
                  </td>
                  <td className="px-2 py-1 flex gap-2">
                    <button
                      onClick={() => setEditActionId(item.id)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      <MdModeEdit />
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      <RiDeleteBin5Fill />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}

          <tr>
            <td className="px-2 py-2">
              <input
                value={newAction.title}
                onChange={(e) =>
                  setNewAction((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Título"
                className="border rounded px-1 py-0.5 w-full text-sm"
              />
            </td>
            <td className="px-2 py-1">
              <select
                value={newAction.status}
                onChange={(e) =>
                  setNewAction((prev) => ({ ...prev, status: e.target.value }))
                }
                className="border rounded px-1 py-0.5 w-full text-sm "
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {statusLabels[status as keyof typeof statusLabels]}
                  </option>
                ))}
              </select>
            </td>
            <td className="px-2 py-1">
              <input
                type="date"
                value={newAction.dueDate}
                onChange={(e) =>
                  setNewAction((prev) => ({ ...prev, dueDate: e.target.value }))
                }
                className="border rounded px-1 py-0.5 w-full text-sm "
              />
            </td>
            <td className="px-2 py-1 flex justify-center">
              <button
                onClick={handleAdd}
                className="bg-blue-700 text-white text-sm rounded px-2 py-1 flex items-center gap-1 hover:bg-blue-800"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
