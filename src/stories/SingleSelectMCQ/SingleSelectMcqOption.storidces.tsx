import { Meta, StoryObj } from "@storybook/react";
import SingleSelectMcqOption, {
  SingleSelectMcqOptionProps,
} from "@/answer-Components/singleSelectMcq/singleSelectMcqOption";

const meta: Meta<typeof SingleSelectMcqOption> = {
  title: "AnswerComponents/SingleSelectMcq/Option",
  component: SingleSelectMcqOption,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SingleSelectMcqOption>;

export const Default: Story = {
  args: {
    value: "option1",
    label: "Option 1",
  } as SingleSelectMcqOptionProps,
};
