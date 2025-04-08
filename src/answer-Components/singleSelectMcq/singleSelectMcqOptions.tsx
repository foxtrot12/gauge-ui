import {FC} from "react";
import { RadioGroup } from "@/components/ui/radio-group";
import  SingleSelectMcqOption  from "./singleSelectMcqOption";

export interface Option {
  value: string;
  label: string;
}

export interface SingleSelectMcqOptionsProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SingleSelectMcqOptions: FC<SingleSelectMcqOptionsProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <RadioGroup value={value} onValueChange={onChange}>
      {options.map((option) => (
        <SingleSelectMcqOption
          key={option.value}
          value={option.value}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

export default SingleSelectMcqOptions;