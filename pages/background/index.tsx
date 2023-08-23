'use client';
import React from 'react';
import Container from '../../components/Container';
import { backgrounds } from '../../data/backgrounds';

const Background = () => {
  return (
    <Container
      tools={backgrounds}
      title="Background / Blobs / Waves"
    />
  );
};

export default Background;
