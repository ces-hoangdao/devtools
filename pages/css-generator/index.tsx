'use client';
import React from 'react';
import Container from '../../components/Container';
import { cssGenerators } from '../../data/cssGenerator';

const cssGenerator = () => {
  return (
    <Container
      tools={cssGenerators}
      title="CSS Framework"
    />
  );
};

export default cssGenerator;
