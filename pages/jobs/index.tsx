'use client';
import React from 'react';
import Container from '../../components/Container';
import { jobs } from '../../data/jobs';

const Jobs = () => {
  return (
    <Container
      tools={jobs}
      title="Jobs for dev"
    />
  );
};

export default Jobs;
