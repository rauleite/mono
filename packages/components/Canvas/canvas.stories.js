import React from 'react';
// import { withKnobs, text } from '@storybook/addon-knobs';
import Canvas from './index';
import CardBusiness from './CardBusiness';

export default { title: 'Canvas component' };

// const message = text('Text', 'Click here now!');
export const canvas = () => <Canvas drawerWidth={300} />;
export const cardBusiness = () => <CardBusiness drawerWidth={300} />;
