import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false); // default to hidden

  // Toggle the navigation menu on/off
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // Close the navigation when a menu item is clicked
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="relative">
      {/* Background visible only when the menu is open */}
      {openNavigation && (
        <div className="absolute inset-0 z-40 pointer-events-none">
          <HamburgerMenu />
        </div>
      )}

      {/* Header */}
      <div
        className={`fixed top-0 z-50 left-0 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-2">
          {/* Logo */}
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </a>

          {/* Navigation Menu */}
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } lg:flex lg:mx-auto lg:bg-transparent flex-col lg:flex-row absolute lg:static top-20 left-0 right-0 bg-n-8 lg:bg-transparent`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-x-6 lg:space-y-0">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick} // Close menu when clicked
                  className={`font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash.replace("#", "")
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-color-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop "New Account" and "Sign In" Buttons */}
          <a
            href="#signup"
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            New Account
          </a>

          <Button className="hidden lg:flex" href="#login">
            Sign In
          </Button>

          {/* Hamburger Menu Button (visible on small screens) */}
          <Button className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
