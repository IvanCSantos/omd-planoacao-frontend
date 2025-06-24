import React, { useEffect } from "react";
import { CustomTitle } from "../texts/CustomTitle";
import { CustomText } from "../texts/CustomText";
import { IoMdClose } from "react-icons/io";
import { ButtonSave } from "../../components/buttons/ButtonSave";
import { InputText } from "../../components/inputs/InputText";
import { ButtonNew } from "../buttons/ButtonNew";
import { getActionsByActionPlan, createAction } from "../../services/api";
import { ActionList } from "../lists/ActionList";

interface ModalViewProps {
  id: number;
  title: string;
  goal: string;
}

interface ActionProps {
  id: number;
  title: string;
  status: string;
  dueDate: string;
}

export const ModalView = ({
  data,
  title,
  display,
  onSubmit,
  onClose,
}: {
  title: string;
  data: ModalViewProps;
  display: "hidden" | "flex";
  onSubmit: () => void;
  onClose: () => void;
}) => {
  const [actionList, setActionList] = React.useState<ActionProps[]>([]);
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = React.useState(false);

  const [formValues, setFormValues] = React.useState<ActionProps>({
    id: 0,
    title: "",
    status: "",
    dueDate: "",
  });

  const loadActionList = React.useCallback(async () => {
    if (data?.id !== 0) {
      try {
        const response = await getActionsByActionPlan(data.id);
        setActionList(response);
      } catch (error) {
        console.error(error);
      }
    }
  }, [data.id]);

  useEffect(() => {
    loadActionList();
  }, [loadActionList]);

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
      await createAction({
        actionPlanId: data.id,
        title: formValues.title,
        status: formValues.status,
        dueDate: formValues.dueDate,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full ${display} items-center justify-center bg-black/50 z-50`}
      onClick={onClose}
    >
      <div
        className="w-[90vw] 
    sm:w-[80vw] 
    md:w-[60vw] 
    lg:w-[clamp(500px,40vw,700px)] 
    xl:w-[clamp(500px,30vw,800px)]
    min-h-48 
    bg-white 
    rounded-lg 
    p-6 
    shadow-lg 
    relative 
    flex 
    flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do modal */}
        <button
          className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black cursor-pointer"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
        <CustomTitle title={title} styles="text-lg font-medium text-left" />

        {/* Conteúdo principal */}
        <div className="flex-1 py-8">
          <CustomText text={`Plano de ação: ${data.title ?? ""}`} />
          <CustomText text={`Objetivo: ${data.goal ?? ""}`} />
          <div className="mt-6">
            <CustomTitle
              title="Ações deste Plano:"
              styles="text-md font-medium mb-4"
            />
            {actionList.length === 0 ? (
              <p className="text-sm">Nenhuma ação cadastrada.</p>
            ) : (
              <ActionList
                actionPlanId={data.id}
                actionList={actionList}
                reload={loadActionList}
              />
            )}
          </div>
        </div>

        {/* Botões inferiores */}
        <div className="flex mt-4 gap-2 justify-end">
          <ButtonNew label="Nova Ação" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};
