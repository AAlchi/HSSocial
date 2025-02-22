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
}) => {
  return (
    <input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={typeof value === "string" ? value : ""}
    disabled={disabled}
    autoComplete="off"
    aria-label={placeholder}
    className={`w-full py-2 bg-white text-black rounded-lg pl-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`} 
    />
  );
};

export default Input;
