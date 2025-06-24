import { CustomTitle } from "../texts/CustomTitle";
import { IoMdClose } from "react-icons/io";
import { ButtonRemove } from "../../components/buttons/ButtonRemove";
import { ButtonCancel } from "../buttons/ButtonCancel";

export const ModalDelete = ({
  title,
  display,
  onRemove,
  onClose,
}: {
  title: string;
  display: "hidden" | "flex";
  onRemove: () => void;
  onClose: () => void;
}) => {
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
          <p>Tem certeza de que deseja remover o Plano de Ação?</p>
        </div>

        {/* Botões inferiores */}
        <div className="flex mt-4 gap-2 justify-end">
          <ButtonCancel label="Cancelar" onClick={onClose} />
          <ButtonRemove label="Remover" onClick={onRemove} />
        </div>
      </div>
    </div>
  );
};
