import React, { useEffect } from "react";
import { Table } from "./components/Table";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import {
  getAllActionPlan,
  editActionPlan,
  removeActionPlan,
} from "../../services/api";
import { ModalRegister } from "../modals/ModalRegister";
import { ModalDelete } from "../modals/ModalDelete";
import { InputText } from "../inputs/InputText";
import { InputTextArea } from "../inputs/InputTextArea";

export interface ActionPlanListType {
  id: number;
  title: string;
  goal?: string;
  creationDate: string;
  status: string;
  actions?: string[];
}

export const ActionPlanList = () => {
  const [actionPlanList, setActioPlanList] = React.useState<
    ActionPlanListType[]
  >([]);
  const [modalEditIsOpen, setModalEditIsOpen] = React.useState(false);
  const [modalRemoveIsOpen, setModalRemoveIsOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    id: 0,
    title: "",
    goal: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actionPlans = await getAllActionPlan();
        setActioPlanList(actionPlans);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const openEditModal = () => {
    setModalEditIsOpen(true);
  };

  const openRemoveModal = () => {
    setModalRemoveIsOpen(true);
  };

  const closeEditModal = () => {
    setModalEditIsOpen(false);
    setFormValues({
      id: 0,
      title: "",
      goal: "",
    });
  };

  const closeRemoveModal = () => {
    setModalRemoveIsOpen(false);
    setFormValues({
      id: 0,
      title: "",
      goal: "",
    });
  };

  const handleEditButton = (item: ActionPlanListType) => {
    setFormValues({
      id: item.id,
      title: item.title,
      goal: item.goal || "",
    });
    openEditModal();
  };

  const handleRemoveButton = (item: ActionPlanListType) => {
    setFormValues({
      id: item.id,
      title: item.title,
      goal: item.goal || "",
    });
    openRemoveModal();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await editActionPlan(formValues);
      closeEditModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async () => {
    try {
      const response = await removeActionPlan(formValues);
      closeRemoveModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <Table<ActionPlanListType>
        headers={["Titulo", "Objetivo", "Status", "Data de Criação", "Ações"]}
        data={actionPlanList}
        keys={["title", "goal", "status", "creationDate"]}
        buttons={(item) => [
          {
            label: "Visualizar",
            icon: <FaEye />,
            onClick: () => console.log("Visualizar", item),
          },
          {
            label: "Editar",
            icon: <MdEdit />,
            onClick: () => handleEditButton(item),
          },
          {
            label: "Remover",
            icon: <AiFillDelete />,
            onClick: () => handleRemoveButton(item),
          },
        ]}
      />
      <ModalRegister
        display={modalEditIsOpen ? "flex" : "hidden"}
        title="Editar Plano de Ação"
        onSubmit={handleSubmit}
        onClose={() => closeEditModal()}
      >
        <InputText
          id="title"
          name="title"
          label="Título"
          value={formValues.title}
          onChange={handleChange}
          required
        />
        <InputTextArea
          id="goal"
          name="goal"
          label="Objetivo"
          value={formValues.goal}
          onChange={handleChange}
        />
      </ModalRegister>
      <ModalDelete
        title="Remover Plano de Ação"
        display={modalRemoveIsOpen ? "flex" : "hidden"}
        onRemove={handleRemove}
        onClose={() => closeRemoveModal()}
      />
    </div>
  );
};
