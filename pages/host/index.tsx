'use client';
import React from 'react';
import Container from '../../components/Container';
import { host } from '../../data/host';

const Host = () => {
  return (
    <Container
      tools={host}
      title="Hosting / Domain"
    />
  );
};

export default Host;
