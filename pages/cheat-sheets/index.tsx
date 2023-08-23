'use client';
import React from 'react';
import Container from '../../components/Container';
import { cheatsheets } from '../../data/cheatsheets';

const Cheatsheets = () => {
  return (
    <Container
      tools={cheatsheets}
      title="Cheatsheets"
    />
  );
};

export default Cheatsheets;
