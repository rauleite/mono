import React from 'react';
// import { withKnobs, text } from '@storybook/addon-knobs';
import ButtonComponent from './index';

// export default { title: 'Button component', decorators: [withKnobs] };
export default {
  title: 'Button',
  component: ButtonComponent,
};

export const Button = (args) => <ButtonComponent {...args} />;

Button.args = {
  message: 'ola',
};
