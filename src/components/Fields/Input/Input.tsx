import type { InputHTMLAttributes } from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
} from "react-hook-form";
import { cn } from "../../../utils/styles";

type Props<T extends FieldValues> = {
  label?: string;
  error?: FieldError;
  register: UseFormRegister<T>;
  name: Path<T>;
  defaultValue?: PathValue<T, Path<T>>;
  placeholder?: string;
  required?: boolean;
  type?: string;
  min?: number;
  max?: number;
  rootClassName?: string;
  inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder = "Enter you value",
  required = false,
  rootClassName = "",
  inputClassName = "",
  ...rest
}: Props<T>) => (
  <label className={cn("filter-field", rootClassName)}>
    {!!label && label}
    <input
      type={type}
      className={cn("filter-input", inputClassName)}
      placeholder={placeholder}
      {...register(name, { required })}
      {...rest}
    />
    {error && (
      <p className="absolute -bottom-5 text-[#f70000]">{error.message}</p>
    )}
  </label>
);

export default Input;
