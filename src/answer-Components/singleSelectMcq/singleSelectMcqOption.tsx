import {RadioGroupItem } from "@/components/ui/radio-group";
import {FC} from "react";

export interface SingleSelectMcqOptionProps {
  value: string;
  label: string;
}

const SingleSelectMcqOption: FC<SingleSelectMcqOptionProps> = ({
  value,
  label,
}) => {
  return (
    <div>
      <RadioGroupItem value={value} id={value} />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

export default SingleSelectMcqOption;
export type { SingleSelectMcqOptionProps };