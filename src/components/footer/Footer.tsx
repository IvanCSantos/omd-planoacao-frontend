import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="w-[600px] mx-auto h-full flex flex-col items-center">
        <p className="text-sm">
          Sistema de gerenciamento de Planos de Ação, para aplicação em um teste
          na empresa{" "}
          <a href="https://omd.com.br/">
            <strong>OMD</strong>
          </a>
        </p>
        <p className="text-sm">
          Desenvolvido por:{" "}
          <a href="https://ivansantos.dev">
            <strong>Ivan Carlos dos Santos</strong>
          </a>
        </p>
      </div>
    </footer>
  );
};
