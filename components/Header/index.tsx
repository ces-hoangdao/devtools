import React, {
  useState,
  useEffect
} from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <header className="sticky top-0 z-40  ">
      <div className="bg-white  border-b border-gray-200 ">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 w-full">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <Link
              className="text-base font-medium text-black"
              href="/"
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={112}
                height={60}
              />
            </Link>
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <Link
                className="text-base font-medium text-black"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-base font-medium text-black"
                href="/about-me"
              >
                About me
              </Link>
              <Link
                className="text-base font-medium text-black"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="text-base font-medium text-black"
                target="_blank"
                href="https://www.paypal.com/paypalme/hoanghelios"
              >
                Buy me a coffee
              </Link>
              <button
                className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
                onClick={() =>
                  setTheme(
                    theme === 'dark'
                      ? 'light'
                      : 'dark'
                  )
                }
              >
                {theme === 'light'
                  ? 'Dark'
                  : 'Light'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
