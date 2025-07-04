import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { cn } from "../../../utils/styles";

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  rootClassName?: string;
};

const Checkbox = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  rootClassName = "",
}: Props<T>) => (
  <label
    className={cn(
      "font-normal cursor-pointer select-none gap-3 flex items-center",
      rootClassName
    )}
  >
    <input type="checkbox" {...register(name)} />
    {label}
    {error && (
      <p className="absolute -bottom-5 text-[#f70000]">{error.message}</p>
    )}
  </label>
);

export default Checkbox;
