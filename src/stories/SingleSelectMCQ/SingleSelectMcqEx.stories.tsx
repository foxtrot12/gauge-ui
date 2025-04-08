import { useState, FC, useEffect } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SingleSelectMcqOptions from "@/answer-Components/singleSelectMcq/singleSelectMcqOptions";
import SingleSelectMcqOption from "@/answer-Components/singleSelectMcq/singleSelectMcqOption";

interface TemplateProps {
  initialSelected: string;
  question?: string;
}

// Template component encapsulating shared state logic and children usage
const Template: FC<TemplateProps> = ({
  initialSelected,
  question = "What's the main ingredient in \"air pie\"?",
}) => {
  const [selected, setSelected] = useState(initialSelected);

  useEffect(()=>{
    setSelected(initialSelected);
  },[initialSelected])
  return (
    <>
      <p className="font-semibold py-2.5">{question}</p>
      <SingleSelectMcqOptions
        className="grid grid-cols-2 w-2/3"
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

const meta: Meta<TemplateProps> = {
  title: "AnswerComponents/SingleSelectMcq",
  component: Template,
  tags: ["autodocs"],
  argTypes: {
    initialSelected: {
      control: "text",
      description: "The value of the pre-selected option.",
    },
    question: {
      control: "text",
      description: "The question prompt displayed above the options.",
    },
  },
  args: {
    // Ensure the default pre-selected value matches one of the options
    initialSelected: "flour",
  },
};

export default meta;
type Story = StoryObj<TemplateProps>;

export const Example: Story = {
  render: (args) => <Template {...args} />,
};
