import React from 'react';
import Image from 'next/image';

export const Section = () => {
  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-24 max-w-7xl mx-auto">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
          <div className="pr-12 sm:pr-0">
            <div className="relative max-w-xs mb-12">
              <Image
                className="object-bottom rounded-md"
                src="/man-eating-noodles.jpg"
                alt=""
                width={300}
                height={300}
              />

              <Image
                className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                src="/smiling-businessman.jpg"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Work effectively.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Tools4dev is a suite of tools to enhance your web development experience and boost your productivity.
              Tools for professional web developers. Made to improve and ease your daily development experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
