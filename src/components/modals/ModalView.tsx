import React from "react";
import { CustomTitle } from "../texts/CustomTitle";
import { CustomText } from "../texts/CustomText";
import { IoMdClose } from "react-icons/io";
import { ButtonSave } from "../../components/buttons/ButtonSave";
import { ButtonNew } from "../buttons/ButtonNew";

interface ModalViewProps {
  id: number;
  title: string;
  goal: string;
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
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full ${display} items-center justify-center bg-black/50 z-50`}
      onClick={onClose}
    >
      <div
        className="w-[clamp(300px,20vw,600px)] min-h-48 bg-white rounded-lg p-6 shadow-lg relative flex flex-col"
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
        </div>

        {/* Botões inferiores */}
        <div className="flex mt-4 gap-2 justify-end">
          <ButtonNew label="Nova Ação" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};
