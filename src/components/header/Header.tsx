import React from "react";
import { CustomTitle } from "../texts/customTitle";

export const Header = () => {
  return (
    <header className="w-full h-24 bg-white">
      <div className="max-w-[700px] mx-auto h-full flex items-center">
        <CustomTitle
          title="OMD - Plano de ação"
          styles="text-4xl font-bold text-center"
        />
      </div>
    </header>
  );
};
