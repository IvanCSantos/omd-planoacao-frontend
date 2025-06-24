import React, { useEffect } from "react";
import { Table } from "./components/Table";
import { FaEye } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import {
  getAllActionPlan,
  editActionPlan,
  removeActionPlan,
} from "../../services/api";
import { ModalRegister } from "../modals/ModalRegister";
import { ModalView } from "../modals/ModalView";
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

export const ActionPlanList = ({
  actionPlanList,
  loadActionPlans,
}: {
  actionPlanList: ActionPlanListType[];
  loadActionPlans: () => void;
}) => {
  const [modalEditIsOpen, setModalEditIsOpen] = React.useState(false);
  const [modalViewIsOpen, setModalViewIsOpen] = React.useState(false);
  const [modalRemoveIsOpen, setModalRemoveIsOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    id: 0,
    title: "",
    goal: "",
  });

  const openEditModal = () => {
    setModalEditIsOpen(true);
  };

  const openViewModal = () => {
    setModalViewIsOpen(true);
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

  const closeViewModal = () => {
    setModalViewIsOpen(false);
    setFormValues({
      id: 0,
      title: "",
      goal: "",
    });
    loadActionPlans();
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

  const handleViewButton = (item: ActionPlanListType) => {
    setFormValues({
      id: item.id,
      title: item.title,
      goal: item.goal || "",
    });
    openViewModal();
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

      loadActionPlans();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async () => {
    try {
      const response = await removeActionPlan(formValues.id);
      closeRemoveModal();

      loadActionPlans();
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
            label: "Gerenciar ações",
            icon: <IoMdSettings />,
            onClick: () => handleViewButton(item),
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
      <ModalView
        title="Visualizar Plano de Ação"
        display={modalViewIsOpen ? "flex" : "hidden"}
        data={formValues}
        onSubmit={handleSubmit}
        onClose={() => closeViewModal()}
      />
    </div>
  );
};
