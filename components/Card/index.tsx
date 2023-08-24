import React from 'react';
import Image from 'next/image';
import { Tool } from '../../types';

const index = ({ tool }: { tool: Tool }) => {
  return (
    <div className="overflow-hidden bg-white dark:bg-[#2D2D2D] rounded shadow hover:scale-105 transition ease-linear duration-300">
      <div className="p-5 flex flex-col h-full">
        <div className="relative">
          <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            title=""
            className="block aspect-w-4 aspect-h-3"
          >
            <Image
              className="w-full cursor-pointer h-[230px]"
              src={tool.image}
              alt={tool.description}
              width={380}
              height={230}
            />
          </a>
        </div>
        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          {tool.createAt}
        </span>
        <p className="mt-5 text-2xl font-semibold">
          <a
            href={tool.url}
            target="_blank"
            title=""
            rel="noreferrer"
            className="text-black dark:text-gray-200"
          >
            {tool.name}
          </a>
        </p>
        <div className="mt-4 text-base text-gray-600">
          Recommend by: {tool.recommendBy}
        </div>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-200 line-clamp-4 mb-4">
          {tool.description}
        </p>
        <a
          href={tool.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex mt-auto items-center w-32 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 :bg-blue-600"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default index;
