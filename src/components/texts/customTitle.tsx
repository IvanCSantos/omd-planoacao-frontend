import React from "react";

export const CustomTitle = ({
  title,
  styles,
}: {
  title: string;
  styles: string;
}) => {
  return <h1 className={`flex-1 ${styles}`}>{title}</h1>;
};
