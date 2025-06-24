export const ButtonRemove = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="px-4 py-2 cursor-pointer bg-[#C5172E] hover:bg-[#8A0000] text-white rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
