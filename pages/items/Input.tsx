interface InputInterface {
  type: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
}

const Input: React.FC<InputInterface> = ({
  type,
  placeholder,
  onChange,
  disabled,
  value,
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
        border: "1px solid black",
        outline: "none",
        paddingLeft: "2%",
        borderRadius: "5px",
      }}
    />
  );
};

export default Input;
