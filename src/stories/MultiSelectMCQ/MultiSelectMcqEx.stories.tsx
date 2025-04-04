import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import MultiSelectMcqOptions  from "@/answer-Components/multiSelectMcq/multiSelectMcqOptions";
import  MultiSelectMcqOption  from "@/answer-Components/multiSelectMcq/multiSelectMcqOption";

const meta: Meta<typeof MultiSelectMcqOptions> = {
  title: "AnswerComponents/MultiSelectMcq",
  component: MultiSelectMcqOptions,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MultiSelectMcqOptions>;

export const Example: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const options = [
      { value: "bananaNinja", label: "Banana Ninja" },
      { value: "pirateUnicorn", label: "Pirate Unicorn" },
      { value: "dancingTaco", label: "Dancing Taco" },
      { value: "wizardPotato", label: "Wizard Potato" },
    ];

    return (
      <>
        <p className="p-2 font-semibold">
          If you could invite characters to a party, who would it be?
        </p>
        <MultiSelectMcqOptions
          selectedValues={selectedValues}
          onChange={setSelectedValues}
          className="grid grid-cols-2 gap-4"
        >
          {options.map((option) => (
            <MultiSelectMcqOption
              key={option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </MultiSelectMcqOptions>
      </>
    );
  },
};
