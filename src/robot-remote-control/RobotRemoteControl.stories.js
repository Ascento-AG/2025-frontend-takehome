import { fn } from '@storybook/test';
import { RobotRemoteControl } from './RobotRemoteControl';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'RobotRemoteControl',
  component: RobotRemoteControl,
  parameters: {
    layout: 'centered',
  },
  args: { move: fn(), stop: fn() },
};

export const Primary = {
  args: {},
};
