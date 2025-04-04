import { Meta, StoryObj } from "@storybook/react";
import MultiSelectMcqOption, {
  MultiSelectMcqOptionProps,
} from "@/answer-Components/multiSelectMcq/multiSelectMcqOption";
import { useState } from "react";

const meta: Meta<typeof MultiSelectMcqOption> = {
  title: "AnswerComponents/MultiSelectMcq/Option",
  component: MultiSelectMcqOption,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MultiSelectMcqOption>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (newChecked: boolean) => {
      setChecked(newChecked);
      console.log("Checkbox toggled:", newChecked);
    };
    return (
      <MultiSelectMcqOption
        value="option1"
        label="Option 1"
        checked={checked}
        onChange={handleChange}
      />
    );
  },
};

export const Checked: Story = {
  args: {
    value: "option1",
    label: "Option 1",
    checked: true,
    onChange: (checked: boolean) => {
      console.log("Checkbox toggled:", checked);
    },
  } as MultiSelectMcqOptionProps,
};

export const Unchecked: Story = {
  args: {
    value: "option2",
    label: "Option 2",
    checked: false,
    onChange: (checked: boolean) => {
      console.log("Checkbox toggled:", checked);
    },
  } as MultiSelectMcqOptionProps,
};
