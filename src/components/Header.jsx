import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  return (
    <div className="fixed top-3 z-50 left-0 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav className="hidden lg:flex lg:mx-auto lg:bg-transparent">
          <div className="flex flex-row items-center justify-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-color-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
