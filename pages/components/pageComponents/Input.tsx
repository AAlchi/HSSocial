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
      value={value}
      disabled={disabled} 
      className="w-full py-2 bg-white text-black rounded-lg pl-3"
    />
  );
};

export default Input;
