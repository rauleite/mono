import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { AppDrawer } from './_stories';
import { appDrawerPrefix } from './src';

it('renders simples appDrawer', () => {
  const {
    getByTestId,
    queryByTestId
  } = render(<AppDrawer {...AppDrawer.args} />);

  const buttonLeft = getByTestId(appDrawerPrefix('left'))
  const buttonRight = getByTestId(appDrawerPrefix('right'))
  const buttonTop = queryByTestId(appDrawerPrefix('top'))

  expect(buttonLeft).toBeValid()
  expect(buttonRight).toBeValid()
  expect(buttonTop).toBeNull()
});
