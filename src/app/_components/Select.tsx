interface OptionProps {
  value: string | number;
  label: string;
}

interface SelectProps {
  label: string;
  options: OptionProps[];
  value: string | number;
  onChange: (value: string | number) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
