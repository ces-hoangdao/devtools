'use client';
import React from 'react';
import Container from '../../components/Container';
import { chromeExtensions } from '../../data/chromeExtensions';

const ChromeExtensions = () => {
  return (
    <Container
      tools={chromeExtensions}
      title="Chrome extensions"
    />
  );
};

export default ChromeExtensions;
