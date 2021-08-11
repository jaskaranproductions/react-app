import React, { useState } from "react";
import Counter from "./components/Counter";

export const ThemeC = React.createContext();

function App() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeC.Provider value={{ backgroundColor: theme }}>
      <Counter initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "red" ? "blue" : "red"))
        }
      >
        change
      </button>
    </ThemeC.Provider>
  );
}

export default App;
