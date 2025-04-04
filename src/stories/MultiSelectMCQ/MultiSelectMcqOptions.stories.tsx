import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import MultiSelectMcqOptions from "@/answer-Components/multiSelectMcq/multiSelectMcqOptions";
import MultiSelectMcqOption from "@/answer-Components/multiSelectMcq/multiSelectMcqOption";

const meta: Meta<typeof MultiSelectMcqOptions> = {
  title: "AnswerComponents/MultiSelectMcq/Options",
  component: MultiSelectMcqOptions,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MultiSelectMcqOptions>;

export const Default: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ];
    return (
      <MultiSelectMcqOptions
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      >
        {options.map((option) => (
          <MultiSelectMcqOption
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </MultiSelectMcqOptions>
    );
  },
};

export const WithPreselected: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(["option1"]);
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ];
    return (
      <MultiSelectMcqOptions
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      >
        {options.map((option) => (
          <MultiSelectMcqOption
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </MultiSelectMcqOptions>
    );
  },
};
