import { useState, FC, useEffect } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "@/components/ui/radio-group";
import SingleSelectMcqOption from "@/answer-Components/singleSelectMcq/singleSelectMcqOption";

interface OptionTemplateProps {
  initialSelected: string;
  value: string;
  label: string;
}

// Template component that provides a RadioGroup wrapper for the option.
// It holds local state using the initialSelected prop.
const OptionTemplate: FC<OptionTemplateProps> = ({
  initialSelected,
  value,
  label,
}) => {
  const [selected, setSelected] = useState(initialSelected);

  useEffect(() => {
    setSelected(initialSelected);
  }, [initialSelected]);

  return (
    <RadioGroup value={selected} onValueChange={setSelected}>
      <SingleSelectMcqOption value={value} label={label} />
    </RadioGroup>
  );
};

const meta: Meta<OptionTemplateProps> = {
  title: "AnswerComponents/SingleSelectMcq/Option",
  component: OptionTemplate,
  tags: ["autodocs"],
  // Expose controls for initialSelected, value, and label
  argTypes: {
    initialSelected: {
      control: "text",
      description:
        "Initial selected value to determine the active radio option",
    },
    value: {
      control: "text",
      description: "The value of the SingleSelectMcqOption",
    },
    label: {
      control: "text",
      description: "Display label for the option",
    },
  },
  // Provide default values that will be used for the Default story
  args: {
    initialSelected: "option1",
    value: "option1",
    label: "Option 1",
  },
};

export default meta;
type Story = StoryObj<OptionTemplateProps>;

// Story: Default where the option is selected initially.
export const Default: Story = {
  args: {
    initialSelected: "option1",
    value: "option1",
    label: "Option 1",
  },
};

// Story: NotSelected where nothing is initially selected.
export const NotSelected: Story = {
  args: {
    initialSelected: "",
    value: "option2",
    label: "Option 2",
  },
};
