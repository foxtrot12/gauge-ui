import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { generateRandomString } from "@/utilities/jsUtils";
import { Label } from "@/components/ui/label";

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
    <Label
      htmlFor={id}
      className={outerClassName ?? `flex items-center gap-2 p-2 ${props.disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
      <Checkbox
        value={value}
        checked={checked}
        onCheckedChange={onChange}
        id={id}
        {...props}
      />
      {label}
    </Label>
  );
};

export default MultiSelectMcqOption;
