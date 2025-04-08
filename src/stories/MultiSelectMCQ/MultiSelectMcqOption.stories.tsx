import { Meta, StoryObj } from "@storybook/react";
import MultiSelectMcqOption from "@/answer-Components/multiSelectMcq/multiSelectMcqOption";

const meta: Meta<typeof MultiSelectMcqOption> = {
  title: "AnswerComponents/MultiSelectMcq/Option",
  component: MultiSelectMcqOption,
  tags: ["autodocs"],
  argTypes: {
    // Text controls for string props
    value: { control: "text" },
    label: { control: "text" },
    // Boolean controls for flags
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    // Action control for event handlers
    onChange: { action: "onChange" },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelectMcqOption>;

/**
 * Default story demonstrates internal state changes using useState.
 * Here we control the initial checked value via args while still managing
 * state within the story.
 */
export const Default: Story = {
  render: (args) => {
    // Initialize local state with args.checked (or fallback to false)
    return (
      <div className="w-1/5">
        <MultiSelectMcqOption
          {...args}
        />
      </div>
    );
  },
  args: {
    value: "option-default",
    label: "Option (Default)",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    value: "option-checked",
    label: "Checked Option",
    checked: true,
  },
};

export const DefaultChecked: Story = {
  args: {
    value: "option-checked",
    label: "Checked Option",
    defaultChecked: true,
  },
};

export const Unchecked: Story = {
  args: {
    value: "option-unchecked",
    label: "Unchecked Option",
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    value: "option-disabled",
    label: "Disabled Option",
    checked: false,
    disabled: true,
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    value: "option-checked-disabled",
    label: "Checked & Disabled",
    checked: true,
    disabled: true,
  },
};
