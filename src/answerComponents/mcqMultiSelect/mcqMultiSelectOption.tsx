import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { ClassAttributes, LabelHTMLAttributes, memo, useCallback } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";

export interface MultiSelectOptionParams
  extends Omit<CheckboxProps, "onCheckedChange"> {
  onOptionUpdate(
    checkedState: string | boolean,
    value: string | number | readonly string[] | undefined
  ): unknown;
  value : string | number
  labelProps?: ClassAttributes<HTMLLabelElement> &
    LabelHTMLAttributes<HTMLLabelElement>;
  label?: string;
  outerClassName?: string;
}

function MCQMultiSelectOption(props: MultiSelectOptionParams) {
  const onCheckedChange = useCallback((checkedState: CheckedState) => {
    props.onOptionUpdate(checkedState, props.value);
  }, []);

  return (
    <div className={props.outerClassName ?? `flex gap-2 items-center`}>
      <Checkbox
        onCheckedChange={onCheckedChange}
        className={``}
        {...props}
      ></Checkbox>
      {props.label && (
        <label className={``} htmlFor={props.id} {...props.labelProps}>
          {props.label}
        </label>
      )}
    </div>
  );
}

export default memo(MCQMultiSelectOption);
