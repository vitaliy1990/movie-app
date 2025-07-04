import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { cn } from "../../../utils/styles";
import type { Option } from "../../../types";

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  options: Option[];
  required?: boolean;
  placeholder?: string;
  rootClassName?: string;
};

const Select = <T extends FieldValues>({
  label,
  name,
  register,
  options,
  error,
  placeholder,
  required = false,
  rootClassName = "",
}: Props<T>) => (
  <label className={cn("filter-field", rootClassName)}>
    {label}
    <select
      className="filter-select"
      {...register(name, { required })}
      defaultValue=""
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && (
      <p className="absolute -bottom-5 text-[#f70000]">{error.message}</p>
    )}
  </label>
);

export default Select;
