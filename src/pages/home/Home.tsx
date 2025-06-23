import React from "react";
import { Header } from "../../components/header/Header";
import { ActionPlanList } from "../../components/lists/ActionPlanList";
import { ActionPlanRegister } from "./components/ActionPlanRegister";

export const Home = () => {
  return (
    <>
      <ActionPlanRegister />
      <ActionPlanList />
    </>
  );
};
