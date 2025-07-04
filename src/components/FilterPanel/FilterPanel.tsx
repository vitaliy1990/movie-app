import { useState } from "react";
import { cn } from "../../utils/styles";
import FilterForm from "../FilterForm/FilterForm";

const FilterPanel = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4">
      <button
        className="flex text-[#764ba2] hover:text-[#5a3a7a] font-semibold cursor-pointer items-center gap-2 transition-colors delay-300 ease"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={cn("flex transition-transform delay-100 ease size-5", {
            "rotate-180": isOpen,
          })}
        >
          🔽
        </span>
        {isOpen ? "Hide Advanced Options" : "Advanced Search Options"}
      </button>
      {isOpen && <FilterForm />}
    </div>
  );
};

export default FilterPanel;
