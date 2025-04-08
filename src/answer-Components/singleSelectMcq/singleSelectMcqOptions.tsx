import { FC, ReactNode } from "react";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupProps } from "@radix-ui/react-radio-group";

export interface SingleSelectMcqOptionsProps
  extends Omit<RadioGroupProps, "onChange"> {
  children: ReactNode;
  value: string;
  onChange: (value: string) => void;
}

const SingleSelectMcqOptions: FC<SingleSelectMcqOptionsProps> = ({
  children,
  value,
  onChange,
  ...props
}) => {
  return (
    <RadioGroup value={value} onValueChange={onChange} {...props}>
      {children}
    </RadioGroup>
  );
};

export default SingleSelectMcqOptions;
