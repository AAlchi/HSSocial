interface ButtonInterface {
  placeholder?: string;
  onClick: () => void;
  disabled?: boolean;
  first?: boolean;
  second?: boolean;
  sideBySide?: boolean;
}

const Button: React.FC<ButtonInterface> = ({
  placeholder,
  first, 
  onClick,
  disabled,  
}) => {
  return (
    <button 
      className={`${first ? "bg-[red] text-[white]" : "bg-[white] text-[red]"} rounded-lg font-bold px-7 py-2`}
      onClick={onClick}
      disabled={disabled}
    >
      {placeholder}
    </button>
  );
};

export default Button;
