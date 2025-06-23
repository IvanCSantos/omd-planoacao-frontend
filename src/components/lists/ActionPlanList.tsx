import React from "react";
import { CustomTitle } from "../texts/customTitle";
import { Table } from "./components/Table";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { ButtonNew } from "../buttons/ButtonNew";
import { RiAddFill } from "react-icons/ri";
import { ModalRegister } from "../modals/ModalRegister";

export const ActionPlanList = () => {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = React.useState(false);

  const openRegisterModal = () => {
    setModalRegisterIsOpen(true);
  };

  const closeRegisterModal = () => {
    setModalRegisterIsOpen(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-16">
        <CustomTitle title="Planos de Ação" styles="text-xl font-semibold" />
        <ButtonNew
          label="Adicionar novo"
          endIcon={<RiAddFill />}
          onClick={() => openRegisterModal()}
        />
      </div>

      <ModalRegister
        display={modalRegisterIsOpen ? "flex" : "hidden"}
        title="Cadastrar Plano de Ação"
        onSubmit={() => console.log("clicou")}
        onClose={() => closeRegisterModal()}
      />

      <Table
        headers={["Titulo", "Objetivo", "Status", "Data de Criação", "Ações"]}
        data={[
          {
            title: "Plan A",
            objective: "Implement improvements",
            status: "Completed",
            date: "06/22/2025",
          },
          {
            title: "Plan B",
            objective: "Organize team",
            status: "Pending",
            date: "06/21/2025",
          },
        ]}
        buttons={[
          {
            label: "Visualizar",
            icon: <FaEye />,
            onClick: () => console.log("Clicou"),
          },
          {
            label: "Editar",
            icon: <MdEdit />,
            onClick: () => console.log("Clicou"),
          },
          {
            label: "Remover",
            icon: <AiFillDelete />,
            onClick: () => console.log("Clicou"),
          },
        ]}
      />
    </div>
  );
};
