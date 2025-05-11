import React from "react";
import { Search, Bell, Menu, Cast, Info } from "lucide-react";
import { useIsMobile } from "@hooks/use-mobile";
import { useDictionaries } from "@core/contexts/dictionariesContext";
import logo from "@/assets/logo.png";
import n from "@/assets/n.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const isMobile = useIsMobile();
  const dictionaries = useDictionaries();
  const text = dictionaries.text || {};

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-2 md:px-12 py-2">
      <div className="flex items-center justify-between">
        {isMobile ? (
          <header className="fixed top-0 left-0 right-0 z-50">
            <div className="p-4 flex justify-between items-center">
              {/* Netflix N Logo */}
              <div className="w-8 h-8">
                <img
                  src={n.src}
                  alt="Netflix"
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Right Icons */}
              <div className="flex items-center space-x-4">
                <Cast className="w-6 h-6 text-white" />
                <LanguageSwitcher />
                <div className="w-6 h-6 bg-white/20 rounded"></div>
              </div>
            </div>

            {/* Horizontal Navigation Menu */}
            <div className="px-4 flex space-x-6 overflow-x-auto hide-scrollbar">
              <a
                href="/tv-shows"
                className="text-white text-sm whitespace-nowrap"
              >
                {text.tv_shows}
              </a>
              <a
                href="/movies"
                className="text-white text-sm whitespace-nowrap"
              >
                {text.movies}
              </a>
              <div className="relative text-white text-sm whitespace-nowrap">
                {text.categories}
                <span className="ml-1 inline-block">▼</span>
              </div>
            </div>
          </header>
        ) : (
          <>
            <div className="flex items-center space-x-8">
              {/* Netflix Logo */}
              <div className="h-30 aspect-square mr-12">
                <img
                  src={logo.src}
                  alt="Netflix Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation Links */}
              <nav className="flex space-x-6">
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  {text.home}
                </a>
                <a
                  href="/tv-shows"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  {text.tv_shows}
                </a>
                <a
                  href="/movies"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  {text.movies}
                </a>
                <a
                  href="/new"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  {text.new_and_popular}
                </a>
                <a
                  href="/my-list"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  {text.my_list}
                </a>
                <a
                  href="/browse-languages"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  {text.browse_by_languages}
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <a
                href="/kids"
                className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
              >
                {text.kids}
              </a>
              <Bell className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <LanguageSwitcher />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
