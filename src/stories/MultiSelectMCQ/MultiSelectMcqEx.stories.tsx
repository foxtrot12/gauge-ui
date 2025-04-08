import { useState,useEffect } from "react";
import { Meta, StoryObj } from "@storybook/react";
import MultiSelectMcqOptions from "@/answer-Components/multiSelectMcq/multiSelectMcqOptions";
import MultiSelectMcqOption from "@/answer-Components/multiSelectMcq/multiSelectMcqOption";

// Define the Option type.
type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

// Props for our wrapper component
interface RenderMultiSelectProps {
  options: Option[];
  initialSelected?: string[];
  question?: string;
}

// Helper component that renders the multi-select along with a question and grid layout.
const RenderMultiSelect = ({
  options,
  initialSelected = [],
  question = "If you could invite characters to a party, who would it be?",
}: RenderMultiSelectProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(initialSelected);

    useEffect(()=>{
      // Update selectedValues when initialSelected changes for storybook purposes
      setSelectedValues(initialSelected);
    },[initialSelected])
  return (
    <>
      <p className="p-2 font-semibold">{question}</p>
      <MultiSelectMcqOptions
        selectedValues={selectedValues}
        onChange={setSelectedValues}
        className="grid grid-cols-2 gap-4"
      >
        {options.map(({ value, label, disabled }) => (
          <MultiSelectMcqOption
            key={value}
            value={value}
            label={label}
            disabled={disabled}
          />
        ))}
      </MultiSelectMcqOptions>
    </>
  );
};

// Base options shared across stories.
const baseOptions: Option[] = [
  { value: "bananaNinja", label: "Banana Ninja" },
  { value: "pirateUnicorn", label: "Pirate Unicorn" },
  { value: "dancingTaco", label: "Dancing Taco" },
  { value: "wizardPotato", label: "Wizard Potato" },
];

const meta: Meta<RenderMultiSelectProps> = {
  title: "AnswerComponents/MultiSelectMcq",
  component: RenderMultiSelect,
  tags: ["autodocs"],
  // Expose controls for options, initialSelected, and question
  argTypes: {
    options: {
      control: "object",
      description: "Array of options (each with a value, label, and an optional disabled flag)",
    },
    initialSelected: {
      control: "object",
      description: "List of option values to be pre-selected on initial render",
    },
    question: {
      control: "text",
      description: "Title text displayed above the multi-select",
    },
  },
  // Default args for the controls.
  args: {
    options: baseOptions,
    initialSelected: [],
    question: "If you could invite characters to a party, who would it be?",
  },
};

export default meta;
type Story = StoryObj<RenderMultiSelectProps>;

// Story: Example (default) - Uses the default args.
export const Example: Story = {
  render: (args) => <RenderMultiSelect {...args} />,
};

// Story: With preselected option(s)
export const WithPreselected: Story = {
  args: {
    initialSelected: ["pirateUnicorn"],
  },
  render: (args) => <RenderMultiSelect {...args} />,
};

// Story: All options disabled
export const AllDisabled: Story = {
  args: {
    options: baseOptions.map((opt) => ({ ...opt, disabled: true })),
  },
  render: (args) => <RenderMultiSelect {...args} />,
};

// Story: Mixed state with some options disabled, including pre-selection
export const MixedState: Story = {
  args: {
    options: baseOptions.map((opt) => {
      if (opt.value === "pirateUnicorn") return { ...opt, disabled: true };
      return opt;
    }),
    initialSelected: ["bananaNinja", "wizardPotato"],
    question: "Mixed state of options",
  },
  render: (args) => <RenderMultiSelect {...args} />,
};
