export const CustomTitle = ({
  title,
  styles,
}: {
  title: string;
  styles: string;
}) => {
  return <h1 className={`flex-1 ${styles} text-[#111827] `}>{title}</h1>;
};
