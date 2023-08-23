'use client';
import React from 'react';
import Container from '../../components/Container';
import { optimization } from '../../data/optimization';

const Optimization = () => {
  return (
    <Container
      tools={optimization}
      title="Image Optimization"
    />
  );
};

export default Optimization;
