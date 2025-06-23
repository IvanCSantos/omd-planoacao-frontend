import React from "react";
import { CustomTitle } from "../texts/CustomTitle";

export const Header = () => {
  return (
    <header className="w-full h-24 bg-white">
      <div className="max-w-[700px] mx-auto h-full flex items-center">
        <CustomTitle
          title="Controle de Planos de Ação"
          styles="text-4xl font-bold text-center"
        />
      </div>
    </header>
  );
};
