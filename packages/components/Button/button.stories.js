import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './index';

export default { title: 'Button component', decorators: [withKnobs] };

export const button = () => {
  const message = text('Text', 'Click here now!');
  return <Button message={message} />;
};
