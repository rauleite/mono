import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from './button.stories';

it('renders the button in the primary state', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  render(<Button {...Button.args} />);
  expect(screen.getByRole('button')).toHaveTextContent('ola');
});
