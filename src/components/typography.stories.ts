import type { Meta, StoryObj } from "@storybook/react";
import { H1 } from "./typography";

const meta = {
  title: "Typography/H1",
  component: H1,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof H1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    children: "Hello world!",
  },
};
