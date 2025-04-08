import { RadioGroupItem } from "@/components/ui/radio-group";
import { generateRandomString } from "@/utilities/jsUtils";
import { RadioGroupItemProps } from "@radix-ui/react-radio-group";
import { FC } from "react";

export interface SingleSelectMcqOptionProps extends RadioGroupItemProps {
  value: string;
  label: string;
  outerClassname?: string;
}

const SingleSelectMcqOption: FC<SingleSelectMcqOptionProps> = ({
  value,
  label,
  id,
  outerClassname,
  ...props
}) => {
  id = id ?? generateRandomString(4);
  return (
    <div
      className={outerClassname ? outerClassname : "gap-2 flex items-center"}
    >
      <RadioGroupItem value={value} id={id} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default SingleSelectMcqOption;
