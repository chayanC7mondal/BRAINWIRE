import ButtonSvg from "./ButtonSvg";
import ButtonGradientDefs from "./ButtonGradientDefs";
import Button from "./components/Button"; // Assuming Button component exists

const App = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      {/* Gradient Definitions */}
      <ButtonGradientDefs />

      {/* Main Content */}
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold underline text-gray-800">
          Hello world!
        </h1>
      </header>

      <section className="flex flex-col items-center pt-16 lg:pt-20 overflow-hidden">
        <ButtonGradientDefs />
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </section>

      {/* Example of using ButtonSvg directly */}
      <div className="relative mt-10">
        <ButtonSvg white={false} />
        <button className="relative z-10 mt-5 px-8 py-2 bg-blue-500 text-white rounded-md">
          Button with SVG
        </button>
      </div>
    </div>
  );
};

export default App;
