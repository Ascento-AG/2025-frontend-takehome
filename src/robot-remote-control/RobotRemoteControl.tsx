import React from 'react';

export interface JoystickEvent {
  // x and y are in the range of -1 to 1
  // where 0 is the center, -1 is left or down, and 1 is right or up
  x: number;
  y: number;
}

// Please don't change the signature of this component
export const RobotRemoteControl = (props: {
  // move is called when the user interacts with the joystick
  // This callback can be called as quickly and often as the user moves the joystick
  // Down the line this will be throttled to a reasonable rate to not overload the robot
  move: (event: JoystickEvent) => void;

  // stop is called when the user stops the interactions with the joystick
  // This triggers a signal to the robot to stop following user-commands and stay in it's current position
  stop: () => void;
}) => {
  return (
    <div>
      Please build me 🤠
    </div>
  );
};

