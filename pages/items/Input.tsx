interface InputInterface {
  type: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
  sideBySide?: boolean;
}

const Input: React.FC<InputInterface> = ({
  type,
  placeholder,
  onChange,
  disabled,
  value,
  sideBySide,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
      style={{
        width: "100%",
        height: "40px",
        backgroundColor: "white",
        color: "black",
        outline: "none",
        paddingLeft: "2%",
        borderRadius: `${sideBySide ? "5px 0px 0px 5px" : "5px"}`,
        fontSize: "15px",
      }}
    />
  );
};

export default Input;
