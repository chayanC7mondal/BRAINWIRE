import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ children, white }) => (
  <div className="relative inline-block">
    <button className="relative px-6 py-3 bg-transparent text-white">
      <span>{children}</span>
      <ButtonSvg white={white} />
    </button>
  </div>
);

export default Button;
