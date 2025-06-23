import React, { useEffect } from "react";
import { Table } from "./components/Table";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { getAllActionPlan } from "../../services/api";

interface ActionPlanListType {
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

  useEffect(() => {
    console.log(actionPlanList);
  }, [actionPlanList]);

  return (
    <div className="w-full">
      <Table<ActionPlanListType>
        headers={["Titulo", "Objetivo", "Status", "Data de Criação", "Ações"]}
        data={actionPlanList}
        keys={["title", "goal", "status", "creationDate"]}
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
