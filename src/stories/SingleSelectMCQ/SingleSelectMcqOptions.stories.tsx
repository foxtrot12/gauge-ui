import { useState, FC } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SingleSelectMcqOptions from "@/answer-Components/singleSelectMcq/singleSelectMcqOptions";
import SingleSelectMcqOption from "@/answer-Components/singleSelectMcq/singleSelectMcqOption";

const meta: Meta<typeof SingleSelectMcqOptions> = {
  title: "AnswerComponents/SingleSelectMcq/Options",
  component: SingleSelectMcqOptions,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SingleSelectMcqOptions>;

interface TemplateProps {
  initialSelected: string;
}

// Template component encapsulating shared state logic and children usage
const Template: FC<TemplateProps> = ({ initialSelected }) => {
  const [selected, setSelected] = useState(initialSelected);
  return (
    <SingleSelectMcqOptions value={selected} onChange={setSelected}>
      <SingleSelectMcqOption value="option1" label="Option 1" />
      <SingleSelectMcqOption value="option2" label="Option 2" />
      <SingleSelectMcqOption value="option3" label="Option 3" />
    </SingleSelectMcqOptions>
  );
};

export const Default: Story = {
  render: () => <Template initialSelected="option1" />,
};

export const NoPreselection: Story = {
  render: () => <Template initialSelected="" />,
};
