import React, { useState } from "react";
import { Table } from "./components/Table";
import { InputText } from "../inputs/InputText";
import { ButtonSave } from "../buttons/ButtonSave";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { createAction, editAction, removeAction } from "../../services/api";

export interface ActionListType {
  id: number;
  title: string;
  status: string;
  dueDate: string;
}

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
    status: "",
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
      setNewAction({ title: "", status: "", dueDate: "" });
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
          {actionList.map((item) => (
            <tr key={item.id}>
              {editActionId === item.id ? (
                <>
                  <td className="border px-2 py-1">
                    <input
                      value={editValues.title ?? item.title}
                      onChange={(e) =>
                        setEditValues((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      className="border rounded px-1 py-0.5 w-full"
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      value={editValues.status ?? item.status}
                      onChange={(e) =>
                        setEditValues((prev) => ({
                          ...prev,
                          status: e.target.value,
                        }))
                      }
                      className="border rounded px-1 py-0.5 w-full"
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="date"
                      value={editValues.dueDate ?? item.dueDate}
                      onChange={(e) =>
                        setEditValues((prev) => ({
                          ...prev,
                          dueDate: e.target.value,
                        }))
                      }
                      className="border rounded px-1 py-0.5 w-full"
                    />
                  </td>
                  <td className="border px-2 py-1 flex gap-2">
                    <ButtonSave
                      label="Salvar"
                      onClick={() => handleSaveEdit(item)}
                    />
                    <button
                      onClick={() => {
                        setEditActionId(null);
                        setEditValues({});
                      }}
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      Cancelar
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="border px-2 py-1">{item.title}</td>
                  <td className="border px-2 py-1">{item.status}</td>
                  <td className="border px-2 py-1">{item.dueDate}</td>
                  <td className="border px-2 py-1 flex gap-2">
                    <button
                      onClick={() => setEditActionId(item.id)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Remover
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}

          <tr>
            <td className="border px-2 py-1">
              <input
                value={newAction.title}
                onChange={(e) =>
                  setNewAction((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Título"
                className="border rounded px-1 py-0.5 w-full"
              />
            </td>
            <td className="border px-2 py-1">
              <input
                value={newAction.status}
                onChange={(e) =>
                  setNewAction((prev) => ({ ...prev, status: e.target.value }))
                }
                placeholder="Status"
                className="border rounded px-1 py-0.5 w-full"
              />
            </td>
            <td className="border px-2 py-1">
              <input
                type="date"
                value={newAction.dueDate}
                onChange={(e) =>
                  setNewAction((prev) => ({ ...prev, dueDate: e.target.value }))
                }
                className="border rounded px-1 py-0.5 w-full"
              />
            </td>
            <td className="border px-2 py-1 flex justify-center">
              <button
                onClick={handleAdd}
                className="bg-blue-700 text-white rounded px-2 py-1 flex items-center gap-1 hover:bg-blue-800"
              >
                <AiOutlinePlus /> Adicionar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
