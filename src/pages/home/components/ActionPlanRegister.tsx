import React from "react";
import { CustomTitle } from "../../../components/texts/CustomTitle";
import { ButtonNew } from "../../../components/buttons/ButtonNew";
import { RiAddFill } from "react-icons/ri";
import { ModalRegister } from "../../../components/modals/ModalRegister";
import { InputText } from "../../../components/inputs/InputText";
import { createActionPlan } from "../../../services/api";
import { InputTextArea } from "../../../components/inputs/InputTextArea";

export const ActionPlanRegister = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    title: "",
    goal: "",
  });

  const openRegisterModal = () => {
    setModalRegisterIsOpen(true);
  };

  const closeRegisterModal = () => {
    setModalRegisterIsOpen(false);
    setFormValues({
      title: "",
      goal: "",
    });
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
      await createActionPlan(formValues);
      closeRegisterModal();
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex w-full justify-between mb-16">
        <CustomTitle title="Planos de Ação" styles="text-xl font-semibold" />
        <ButtonNew
          label="Adicionar novo"
          endIcon={<RiAddFill />}
          onClick={() => openRegisterModal()}
        />
      </div>

      <ModalRegister
        display={modalRegisterIsOpen ? "flex" : "hidden"}
        title="Novo Plano de Ação"
        onSubmit={handleSubmit}
        onClose={() => closeRegisterModal()}
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
    </>
  );
};
