import { Label } from "@/components/ui/label";
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
    <Label
      htmlFor={id}
      className={
        outerClassname ??
        `gap-2 flex items-center p-2 ${
          props.disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`
      }
    >
      <RadioGroupItem
        className="cursor-pointer"
        value={value}
        id={id}
        {...props}
      />
      {label}
    </Label>
  );
};

export default SingleSelectMcqOption;
