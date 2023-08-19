import type { NextPage } from "next";
import Banner from "../components/Banner";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

import Image from "next/image";
import { categories } from "../data/categories";

const Home: NextPage = () => {
  return (
    <div className="">
      <main className="h-screen">
        <div className="container max-w-7xl mx-auto">
          <Banner />
          <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                <div className="relative lg:mb-12">
                  <Image
                    className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                    src="/dots-pattern.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="pl-12 pr-6">
                    <Image
                      className="relative"
                      src="/girl-working-on-laptop.jpg"
                      alt=""
                      width={450}
                      height={450}
                    />
                  </div>
                </div>

                <div className="2xl:pl-16">
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                    It build for all developer
                  </h2>
                  <p className="text-xl leading-relaxed text-gray-900 mt-9">
                    Welcome to our all-in-one developer&#39;s paradise! Whether
                    you&#39;re a seasoned coder or just starting out on your
                    development journey, we&#39;ve curated a comprehensive list
                    of must-have resources that will supercharge your skills and
                    streamline your workflow.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Categories
                </h2>
                <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                  Discover useful tools that you may not have known.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {categories &&
                  categories.map((category, index) => {
                    return <CategoryCard key={index} category={category} />;
                  })}
              </div>
            </div>
          </section>
          <section className="py-10 bg-white sm:py-16 lg:py-24">
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
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Work effectively.
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    Tools4dev is a suite of tools to enhance your web
                    development experience and boost your productivity. Tools
                    for professional web developers. Made to improve and ease
                    your daily development experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
