export const CustomText = ({
  text,
  styles = "",
}: {
  text: string;
  styles?: string;
}) => {
  return <p className={`flex-1 ${styles} text-[#111827] `}>{text}</p>;
};
