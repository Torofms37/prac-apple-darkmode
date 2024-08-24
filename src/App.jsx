import { AppleMac } from "iconoir-react";
import useThemeDetector from "./components/useThemeDetector";

function App() {

  const {toggleChooseTheme} = useThemeDetector();

  return (
    <div className="h-screen flex justify-center items-center dark:bg-gray-800">
      <AppleMac className="text-7xl stroke-0 dark:fill-gray-100 dark:hover:fill-gray-800 fill-gray-800 hover:fill-gray-100 duration-300 hover:cursor-pointer" 
        onClick={toggleChooseTheme}
      />

      <div className="font-sans text-gray-800 bg-gray-100 dark:bg-gray-600 dark:text-gray-300 absolute bottom-0 text-md opacity-60 w-full flex justify-center">
        <h2>
          Made by <a href="poner url de github o red social">elsinmetodos</a>
        </h2>
      </div>
    </div>
  );
}

export default App;
