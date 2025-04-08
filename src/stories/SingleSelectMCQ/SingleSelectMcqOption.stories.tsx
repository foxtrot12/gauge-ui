import { useState, FC } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "@/components/ui/radio-group";
import SingleSelectMcqOption from "@/answer-Components/singleSelectMcq/singleSelectMcqOption";

const meta: Meta<typeof SingleSelectMcqOption> = {
  title: "AnswerComponents/SingleSelectMcq/Option",
  component: SingleSelectMcqOption,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SingleSelectMcqOption>;

interface OptionTemplateProps {
  initialSelected: string;
  value: string;
  label: string;
}

// Template component that provides a RadioGroup wrapper for the option
const OptionTemplate: FC<OptionTemplateProps> = ({
  initialSelected,
  value,
  label,
}) => {
  const [selected, setSelected] = useState(initialSelected);
  return (
    <RadioGroup value={selected} onValueChange={setSelected}>
      <SingleSelectMcqOption value={value} label={label} />
    </RadioGroup>
  );
};

export const Default: Story = {
  render: () => (
    <OptionTemplate
      initialSelected="option1"
      value="option1"
      label="Option 1"
    />
  ),
};

export const NotSelected: Story = {
  render: () => (
    <OptionTemplate initialSelected="" value="option2" label="Option 2" />
  ),
};
