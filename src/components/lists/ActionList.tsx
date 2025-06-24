import { useState } from "react";
import { createAction, editAction, removeAction } from "../../services/api";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FcCancel } from "react-icons/fc";
import { BiSolidSave } from "react-icons/bi";

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
  isCreating,
  handleCreateAction,
}: {
  actionPlanId: number;
  actionList: ActionListType[];
  reload: () => void;
  isCreating: boolean;
  handleCreateAction: (status: boolean) => void;
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
      handleCreateAction(false);
      reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveEdit = async (item: ActionListType) => {
    try {
      await editAction({
        id: item.id,
        title: editValues.title ?? item.title,
        status: editValues.status ?? item.status,
        dueDate: editValues.dueDate ?? item.dueDate,
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
      {actionList.length === 0 && !isCreating ? (
        <p className="text-sm text-center py-4">Nenhuma ação cadastrada.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="font-medium px-2 py-1 rounded-tl-sm">Título</th>
              <th className="font-medium px-2 py-1">Status</th>
              <th className="font-medium px-2 py-1">Prazo</th>
              <th className="font-medium px-2 py-1 rounded-tr-sm">Ações</th>
            </tr>
          </thead>
          <tbody>
            {actionList.map((item) => (
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
                        className="text-blue-600 hover:underline text-sm  cursor-pointer"
                      >
                        <MdModeEdit />
                      </button>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-600 hover:underline text-sm  cursor-pointer"
                      >
                        <RiDeleteBin5Fill />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}

            {isCreating && (
              <tr>
                <td className="px-2 py-2">
                  <input
                    value={newAction.title}
                    onChange={(e) =>
                      setNewAction((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Título"
                    className="border rounded px-1 py-0.5 w-full text-sm"
                  />
                </td>
                <td className="px-2 py-1">
                  <select
                    value={newAction.status}
                    onChange={(e) =>
                      setNewAction((prev) => ({
                        ...prev,
                        status: e.target.value,
                      }))
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
                      setNewAction((prev) => ({
                        ...prev,
                        dueDate: e.target.value,
                      }))
                    }
                    className="border rounded px-1 py-0.5 w-full text-sm "
                  />
                </td>
                <td className="px-2 py-1 flex justify-center">
                  <button
                    onClick={handleAdd}
                    className="bg-blue-700 text-white text-sm rounded px-2 py-1 flex items-center gap-1 hover:bg-blue-800 cursor-pointer"
                  >
                    +
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};
