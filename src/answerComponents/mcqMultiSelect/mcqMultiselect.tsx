import { memo, useCallback, useEffect, useState } from "react";
import Option, { MultiSelectOptionParams } from "./mcqMultiSelectOption";

export interface MCQMultiSelectParams {
  options: Array<
    Omit<MultiSelectOptionParams, "name" | "id" | "onOptionUpdate">
  >;
  name: string;
  className?: string;
}

function MCQMultiSelect(props: MCQMultiSelectParams) {
  const [selectedValues, setSelectedValues] = useState<Array<number | string>>(
    []
  );
  const onOptionUpdate = useCallback(
    (checkedState: boolean, value: string | number) => {
      if (checkedState) {
        setSelectedValues([...selectedValues,value]);
      } else {
        setSelectedValues(
          selectedValues.filter((val) => {
            return val !== value;
          })
        );
      }
    },
    [selectedValues]
  );

  useEffect(() => {
    console.log(selectedValues);
  }, [selectedValues]);
  return (
    <div className={props.className ?? `flex flex-wrap`}>
      {props.options.map((option, index) => (
        <Option
          key={index}
          id={`${props.name}-${index}`}
          name={props.name}
          label={option.label}
          value={option.value}
          onOptionUpdate={onOptionUpdate}
        ></Option>
      ))}
    </div>
  );
}
export default memo(MCQMultiSelect);
