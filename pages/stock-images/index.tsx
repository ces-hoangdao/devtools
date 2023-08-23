'use client';
import React from 'react';
import Container from '../../components/Container';
import { stock } from '../../data/stock';

const Stock = () => {
  return (
    <Container
      tools={stock}
      title="Stock Images"
    />
  );
};

export default Stock;
