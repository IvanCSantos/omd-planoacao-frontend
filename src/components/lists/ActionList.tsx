import React from "react";
import { Table } from "./components/Table";

export interface ActionListType {
  id: number;
  title: string;
  status: string;
  dueDate: string;
}

export const ActionList = ({
  actionList,
}: {
  actionList: ActionListType[];
}) => {
  return (
    <div>
      <Table<ActionListType>
        headers={["Título", "Status", "Prazo"]}
        data={actionList}
        keys={["title", "status", "dueDate"]}
      ></Table>
    </div>
  );
};
