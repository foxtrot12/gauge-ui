import { useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import MultiSelectMcqOptions from "@/answer-Components/multiSelectMcq/multiSelectMcqOptions";
import MultiSelectMcqOption from "@/answer-Components/multiSelectMcq/multiSelectMcqOption";

// Define the type for a single option
type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

// The props our wrapper component will accept, which are exposed in Storybook Controls.
type MultiSelectMcqOptionsStoryProps = {
  options: Option[];
  initialSelected: string[];
};

// This component wraps the MultiSelectMcqOptions component with local state management.
// It renders the options based on the passed props.
const RenderOptionsWrapper = ({
  options,
  initialSelected,
}: MultiSelectMcqOptionsStoryProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(initialSelected);

  useEffect(()=>{
    // Update selectedValues when initialSelected changes for storybook purposes
    setSelectedValues(initialSelected);
  },[initialSelected])

  return (
    <MultiSelectMcqOptions selectedValues={selectedValues} onChange={setSelectedValues}>
      {options.map(({ value, label, disabled }) => (
        <MultiSelectMcqOption
          key={value}
          value={value}
          label={label}
          disabled={disabled}
        />
      ))}
    </MultiSelectMcqOptions>
  );
};

// Define default options (this will be used as the default value in the controls)
const defaultOptions: Option[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const meta: Meta<MultiSelectMcqOptionsStoryProps> = {
  title: "AnswerComponents/MultiSelectMcq/Options",
  component: RenderOptionsWrapper,
  tags: ["autodocs"],
  // Define argTypes to expose controls for options and initialSelected.
  argTypes: {
    options: {
      control: "object",
      description: "Array of option objects with value, label and optional disabled property",
    },
    initialSelected: {
      control: "object",
      description: "Array of option values to be pre-selected on initial render",
    },
  },
  // Set default args that appear when the story loads.
  args: {
    options: defaultOptions,
    initialSelected: [],
  },
};

export default meta;
type Story = StoryObj<MultiSelectMcqOptionsStoryProps>;

// The Default story uses the default args from meta.
export const Default: Story = {
  render: (args) => <RenderOptionsWrapper {...args} />,
};

// A story with one option pre-selected.
export const WithPreselected: Story = {
  args: {
    initialSelected: ["option1"],
  },
};

// A story where all options are disabled. In this example, we update the options array.
export const AllDisabled: Story = {
  args: {
    options: defaultOptions.map((opt) => ({ ...opt, disabled: true })),
    initialSelected: ["option2"],
  },
};

// A story with mixed state: some options are enabled and some disabled.
export const MixedState: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3", disabled: true },
    ],
    initialSelected: ["option1", "option3"],
  },
};
