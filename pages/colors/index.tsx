'use client';
import React from 'react';
import Container from '../../components/Container';
import { colors } from '../../data/colors';

const Colors = () => {
  return (
    <Container
      tools={colors}
      title="Color Palettes / Gradients"
    />
  );
};

export default Colors;
