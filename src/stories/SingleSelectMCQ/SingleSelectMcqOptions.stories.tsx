import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SingleSelectMcqOptions from "@/answer-Components/singleSelectMcq/singleSelectMcqOptions";

const meta: Meta<typeof SingleSelectMcqOptions> = {
  title: "AnswerComponents/SingleSelectMcq/Options",
  component: SingleSelectMcqOptions,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SingleSelectMcqOptions>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>("option1");
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ];
    return (
      <SingleSelectMcqOptions
        options={options}
        value={selected}
        onChange={setSelected}
      />
    );
  },
};

export const NoPreselection: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>("");
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ];
    return (
      <SingleSelectMcqOptions
        options={options}
        value={selected}
        onChange={setSelected}
      />
    );
  },
};
