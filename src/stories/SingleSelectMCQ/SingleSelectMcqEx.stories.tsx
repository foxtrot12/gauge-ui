import { useState, FC } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SingleSelectMcqOptions from "@/answer-Components/singleSelectMcq/singleSelectMcqOptions";
import SingleSelectMcqOption from "@/answer-Components/singleSelectMcq/singleSelectMcqOption";

const meta: Meta<typeof SingleSelectMcqOptions> = {
  title: "AnswerComponents/SingleSelectMcq",
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
    <>
      <p className="font-semibold py-2.5">What's the main ingredient in "air pie"?</p>
      <SingleSelectMcqOptions
        className="grid grid-cols-2 w-1/2"
        value={selected}
        onChange={setSelected}
      >
        <SingleSelectMcqOption value="flour" label="Flour" />
        <SingleSelectMcqOption value="sugar" label="Sugar" />
        <SingleSelectMcqOption value="hopes&dreams" label="Hopes and dreams" />
        <SingleSelectMcqOption value="invisibleFruit" label="Invisible fruit" />
      </SingleSelectMcqOptions>
    </>
  );
};

export const Example: Story = {
  render: () => <Template initialSelected="option1" />,
};
