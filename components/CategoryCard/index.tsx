import React from 'react';
import { Category } from '../../types';
import Link from 'next/link';

const index = ({
  category
}: {
  category: Category;
}) => {
  return (
    <Link
      className="lg:basis-[23%] md:basis-[32%] sm:basis-[48%] basis-full"
      href={category.page}
    >
      <div className="bg-white hover:bg-black focus:bg-black h-20 p-4 rounded-lg px-4 py-4 text-black border-black  focus:text-white hover:text-white border text-xl flex justify-center  items-center text-center font-semibold transition ease-linear duration-200 hover:scale-105">
        {category.name}
      </div>
    </Link>
  );
};

export default index;
