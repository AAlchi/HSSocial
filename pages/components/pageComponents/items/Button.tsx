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
  second,
  onClick,
  disabled,
  sideBySide,
}) => {
  return (
    <button
      style={{
        width: "120px",
        height: "40px",
        backgroundColor: `${first ? "red" : "white"}`,
        color: `${first ? "white" : "red"}`,
        fontWeight: "bold",
        borderRadius: `${sideBySide ? "0px 2px 2px 0px" : "2px"}`,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {placeholder}
    </button>
  );
};

export default Button;
