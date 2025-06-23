import React, { useEffect } from "react";
import { Header } from "../../components/header/Header";
import { ActionPlanRegister } from "./components/ActionPlanRegister";
import {
  ActionPlanList,
  type ActionPlanListType,
} from "../../components/lists/ActionPlanList";
import { getAllActionPlan } from "../../services/api";

export const Home = () => {
  const [actionPlanList, setActionPlanList] = React.useState<
    ActionPlanListType[]
  >([]);

  const loadActionPlans = React.useCallback(async () => {
    try {
      const response = await getAllActionPlan();
      setActionPlanList(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadActionPlans();
  }, [loadActionPlans]);

  return (
    <>
      <ActionPlanRegister onSuccess={loadActionPlans} />
      <ActionPlanList
        actionPlanList={actionPlanList}
        loadActionPlans={loadActionPlans}
      />
    </>
  );
};
