import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import ButtonSvg from "./assets/svg/ButtonSvg";
import Button from "./components/Button";

const App = () => (
  <>
    <ButtonGradient />
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Button white={false}>Something</Button>
    </div>
  </>
);

export default App;
