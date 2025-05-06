import React from "react";
import { Search, Bell, Menu, Cast, Info } from "lucide-react";
import { useIsMobile } from "@hooks/use-mobile";
import logo from "@/assets/logo.png";
import n from "@/assets/n.png";

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-2 md:px-12 py-2">
      <div className="flex items-center justify-between">
        {isMobile ? (
          // Mobile Navigation - Based on the provided screenshot
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
                <div className="w-6 h-6 bg-white/20 rounded"></div>
              </div>
            </div>

            {/* Horizontal Navigation Menu */}
            <div className="px-4 flex space-x-6 overflow-x-auto hide-scrollbar">
              <a
                href="/tv-shows"
                className="text-white text-sm whitespace-nowrap"
              >
                TV Shows
              </a>
              <a
                href="/movies"
                className="text-white text-sm whitespace-nowrap"
              >
                Movies
              </a>
              <div className="relative text-white text-sm whitespace-nowrap">
                Categories
                <span className="ml-1 inline-block">▼</span>
              </div>
            </div>
          </header>
        ) : (
          // Desktop Navigation
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
                  Home
                </a>
                <a
                  href="/tv-shows"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  TV Shows
                </a>
                <a
                  href="/movies"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  Movies
                </a>
                <a
                  href="/new"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  New & Popular
                </a>
                <a
                  href="/my-list"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  My List
                </a>
                <a
                  href="/browse-languages"
                  className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
                >
                  Browse by Languages
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-6">
              <Search className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <a
                href="/kids"
                className="text-gray-300 hover:text-white transition text-base md:text-xl font-medium"
              >
                Kids
              </a>
              <Bell className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <div className="h-8 w-8 bg-gray-500 rounded-sm"></div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
