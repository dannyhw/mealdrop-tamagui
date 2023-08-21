import { StoryObj, Meta } from "@storybook/react";
import { ShoppingCart } from "@tamagui/lucide-icons";
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    clear: false,
    large: false,
    rounded: false,
    withIcon: false,
    disabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1005%3A2974&t=8pzYUq8GyzmMGjJ2-4",
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Clear: Story = {
  args: {
    clear: true,
  },
};

export const Icon: Story = {
  args: {
    children: undefined,
    icon: ShoppingCart,
    "aria-label": "cart",
  },
};

export const IconAndText: Story = {
  args: {
    icon: ShoppingCart,
    children: "Order €8",
  },
};
