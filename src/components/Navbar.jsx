import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Book, Mail, Info, Instagram, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1] || "home";
    setActiveItem(currentPath);
  }, [location.pathname]);

  const navItems = [
    { id: "home", icon: Home, label: "Home", path: "/" },
    { id: "books", icon: Book, label: "Books", path: "/books" },
    { id: "contact", icon: Mail, label: "Contact", path: "/contact" },
    { id: "about", icon: Info, label: "About", path: "/about" },
  ];

  const handleNavClick = (itemId) => {
    setActiveItem(itemId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-3 print:hidden">
        <nav
          className={`
          bg-white/95 backdrop-blur-xl border border-gray-200/50
          rounded-full px-4 sm:px-6 py-3 flex items-center gap-3 sm:gap-6
          transition-all duration-300 ease-out
          shadow-xl shadow-gray-900/10
          ${isScrolled ? "scale-95 bg-white/98 shadow-2xl" : "scale-100"}
          hover:scale-100 sm:hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/15
          max-w-3xl hidden md:flex
        `}
        >
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 pr-2 sm:pr-4 sm:border-r border-gray-200/70"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">
                  VP
                </span>
              </div>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-1 sm:gap-2 flex-1 justify-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setActiveItem(item.id)}
                  className={`
                    relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2
                    transition-all duration-300 ease-out group
                    ${
                      isActive
                        ? "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white shadow-md shadow-slate-500/30 scale-100 sm:scale-105"
                        : "text-gray-600 hover:text-slate-800 hover:bg-slate-50"
                    }
                  `}
                  title={item.label}
                >
                  <Icon
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                      isActive
                        ? "scale-100 sm:scale-110"
                        : "group-hover:scale-110"
                    }`}
                  />
                  <span className="hidden lg:inline text-xs sm:text-sm font-medium">
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 via-slate-700/10 to-slate-900/10 rounded-full -z-10"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Instagram Link */}
          <div className="pl-2 sm:pl-4 sm:border-l border-gray-200/70">
            <a
              href="https://www.instagram.com/untold_stories.official?igsh=ZWZoOWU1cGZucGd1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2
                transition-all duration-300 ease-out group
                text-gray-600 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50
                hover:shadow-md hover:shadow-pink-500/20
              "
              title="Follow on Instagram"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden lg:inline text-xs sm:text-sm font-medium">
                Instagram
              </span>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[60] p-3 md:hidden print:hidden">
        <nav
          className={`
          bg-white/95 backdrop-blur-xl border border-gray-200/50
          rounded-full px-4 py-3 flex items-center justify-between
          transition-all duration-300 ease-out
          shadow-xl shadow-gray-900/10
          ${isScrolled ? "scale-95 bg-white/98 shadow-2xl" : "scale-100"}
        `}
        >
          {/* Mobile Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">VP</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-blue-400 rounded-full border-2 border-white animate-pulse shadow-sm"></div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-gray-600 hover:text-slate-800 hover:bg-slate-50 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`
          fixed top-20 left-3 right-3 z-50
          bg-white/95 backdrop-blur-xl border border-gray-200/50
          rounded-2xl shadow-2xl shadow-gray-900/20
          transition-all duration-300 ease-out
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }
        `}
        >
          <div className="p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white shadow-md shadow-slate-500/30"
                        : "text-gray-700 hover:text-slate-800 hover:bg-slate-50"
                    }
                  `}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? "scale-110" : ""
                    }`}
                  />
                  <span className="font-medium text-base">{item.label}</span>
                </Link>
              );
            })}

            {/* Mobile Instagram Link */}
            <div className="border-t border-gray-200/50 pt-2 mt-4">
              <a
                href="https://www.instagram.com/untold_stories.official?igsh=ZWZoOWU1cGZucGd1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  flex items-center gap-3 px-4 py-3 rounded-xl
                  text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50
                  transition-all duration-300 ease-out
                "
              >
                <Instagram className="w-5 h-5" />
                <span className="font-medium text-base">
                  Follow on Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
