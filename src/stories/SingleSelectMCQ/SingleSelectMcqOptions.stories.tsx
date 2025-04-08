import { useState, FC, useEffect } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SingleSelectMcqOptions from "@/answer-Components/singleSelectMcq/singleSelectMcqOptions";
import SingleSelectMcqOption from "@/answer-Components/singleSelectMcq/singleSelectMcqOption";

interface TemplateProps {
  initialSelected: string;
}

// Template component encapsulating shared state logic and children usage.
const Template: FC<TemplateProps> = ({ initialSelected }) => {
  const [selected, setSelected] = useState(initialSelected);

  useEffect(() => {
    setSelected(initialSelected);
  }, [initialSelected]);
  return (
    <SingleSelectMcqOptions value={selected} onChange={setSelected}>
      <SingleSelectMcqOption value="option1" label="Option 1" />
      <SingleSelectMcqOption value="option2" label="Option 2" />
      <SingleSelectMcqOption value="option3" label="Option 3" />
    </SingleSelectMcqOptions>
  );
};

const meta: Meta<TemplateProps> = {
  title: "AnswerComponents/SingleSelectMcq/Options",
  component: Template,
  tags: ["autodocs"],
  // Expose the initialSelected prop via Storybook Controls.
  argTypes: {
    initialSelected: {
      control: "text",
      description: "The value of the option to preselect on initial render",
    },
  },
  // Define the default args for the Template.
  args: {
    initialSelected: "option1",
  },
};

export default meta;
type Story = StoryObj<TemplateProps>;

// Story: Default with a preselected option ("option1").
export const Default: Story = {
  args: { initialSelected: "option1" },
  render: (args) => <Template {...args} />,
};

// Story: NoPreselection where nothing is preselected.
export const NoPreselection: Story = {
  args: { initialSelected: "" },
  render: (args) => <Template {...args} />,
};
