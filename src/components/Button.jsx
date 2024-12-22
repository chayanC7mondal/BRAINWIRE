import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, white }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={onClick}
        className="relative z-10 px-6 py-3 text-sm font-medium bg-transparent border-none"
      >
        <span className="relative">{children}</span>
      </button>
      <ButtonSvg white={white} />
    </div>
  );
};

export default Button;
