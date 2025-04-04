import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { generateRandomString } from "@/utilities/jsUtils";

export interface MultiSelectMcqOptionProps
  extends Omit<CheckboxProps, "onChange"> {
  value: string;
  label: string;
  checked?: boolean;
  outerClassName?: string;
  onChange?: (checked: boolean) => void;
}

const MultiSelectMcqOption: React.FC<MultiSelectMcqOptionProps> = ({
  value,
  label,
  checked,
  onChange,
  outerClassName,
  id,
  name,
  ...props
}: MultiSelectMcqOptionProps) => {
  id = id ?? generateRandomString(4);
  return (
    <label
      htmlFor={id}
      className={
        outerClassName ??
        "flex items-center cursor-pointer gap-2"
      }
    >
      <Checkbox
        value={value}
        checked={checked}
        onCheckedChange={onChange}
        id={id}
        {...props}
      />
      {label}
    </label>
  );
};

export default MultiSelectMcqOption;
