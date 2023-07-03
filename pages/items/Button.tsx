interface ButtonInterface {
  placeholder?: string;
  onClick: () => void;
  disabled?: boolean;
  first?: boolean;
  second?: boolean;
}

const Button: React.FC<ButtonInterface> = ({
  placeholder,
  first,
  second,
  onClick,
  disabled,
}) => {
  return (
    <button
      style={{
        width: "120px",
        height: "40px",
        backgroundColor: `${first ? "red" : "white"}`,
        color: `${first ? "white" : "red"}`,
        fontWeight: "bold",
        borderRadius: "2px",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {placeholder}
    </button>
  );
};

export default Button;
