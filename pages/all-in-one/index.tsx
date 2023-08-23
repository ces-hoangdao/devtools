'use client';
import React from 'react';
import { allInOne } from '../../data/allInOne';
import Container from '../../components/Container';

const AllInOne = () => {
  return (
    <Container
      tools={allInOne}
      title="All-in-one"
    />
  );
};

export default AllInOne;
