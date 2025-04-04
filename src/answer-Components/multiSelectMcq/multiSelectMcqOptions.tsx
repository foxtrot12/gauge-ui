import React, {
  HTMLAttributes,
  FC,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";
import { MultiSelectMcqOptionProps } from "./multiSelectMcqOption";

export interface MultiSelectMcqOptionsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  selectedValues: string[];
  onChange: (newValues: string[]) => void;
  children: ReactElement<MultiSelectMcqOptionProps>[];
}

const MultiSelectMcqOptions: FC<MultiSelectMcqOptionsProps> = ({
  selectedValues,
  onChange,
  children,
  ...props
}) => {
  const handleToggle = (optionValue: string, isChecked: boolean) => {
    if (isChecked) {
      // add the value if it's not already selected
      if (!selectedValues.includes(optionValue)) {
        onChange([...selectedValues, optionValue]);
      }
    } else {
      // remove the value if unchecked
      onChange(selectedValues.filter((val) => val !== optionValue));
    }
  };

  return (
    <div {...props}>
      {React.Children.map(children, (child) => {
        if (isValidElement(child)) {
          const { value } = child.props;
          return cloneElement(child, {
            checked: selectedValues.includes(value),
            onChange: (isChecked: boolean) => handleToggle(value, isChecked),
          });
        }
        return child;
      })}
    </div>
  );
};

export default MultiSelectMcqOptions;