import React from "react";
import { CustomTitle } from "../texts/customTitle";
import { IoMdClose } from "react-icons/io";
import { ButtonSave } from "../../components/buttons/ButtonSave";

interface ModalRegisterProps {
  id: number;
  title: string;
}

export const ModalRegister = ({
  data,
  title,
  display,
  onSubmit,
  onClose,
}: {
  title: string;
  data?: ModalRegisterProps;
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
        <CustomTitle title={title} styles="text-lg font-bold text-left" />

        {/* Conteúdo principal */}
        <div className="flex-1"></div>

        {/* Botões inferiores */}
        <div className="flex mt-4 justify-end">
          <ButtonSave label="Salvar" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};
