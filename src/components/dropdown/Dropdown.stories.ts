import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import { fn } from '@storybook/test';

const meta = {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { onchange: fn() },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { label: "placeholder" },
};

export const Secondary: Story = {
  args: { label: "placeholder" },
};

export const WithOnClick: Story = {
  args: { label: "placeholder" },
};

export const Disabled: Story = {
  args: { label: "placeholder" },
};

export const successSelect: Story = {
  args: { label: "placeholder", validstate: "success", message: "Success",defaultalue:10 },
};

export const ErrorSelect: Story = {
  args: { label: "placeholder", validstate: "error", message: "This field is required" },
};
export const WarningSelect: Story = {
  args: { label: "placeholder", validstate: "warning", message: "Warning" },
};