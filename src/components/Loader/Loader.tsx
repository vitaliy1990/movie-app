import type { FC } from "react";
import { cn } from "../../utils/styles";

type Props = {
  infoText?: string;
  rootClassName?: string;
  loaderClassName?: string;
};

const Loader: FC<Props> = ({
  infoText,
  rootClassName = "",
  loaderClassName = "",
}) => {
  return (
    <div
      className={cn(
        "text-[#666] p-12 w-ful gap-4 flex flex-col items-center justify-center",
        rootClassName
      )}
    >
      <div
        className={cn(
          "animate-spin size-10 border-4 border-[#f0f0f0] border-t-[#764ba2] rounded-full",
          loaderClassName
        )}
      />
      {infoText && <p>{infoText}</p>}
    </div>
  );
};

export default Loader;
