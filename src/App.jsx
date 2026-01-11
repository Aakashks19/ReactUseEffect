import { useState } from "react"
import Refer from "./Refer"
import ThemeBox from "./ThemeBox"
import ThemeButton from "./ThemeButton"
import ThemeContext from "./ThemeContext"
import UseEffect from "./UseEffect"

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme =() =>{
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  };
  return (
    <>
      <UseEffect/>
      {/* <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <ThemeButton/>
        <ThemeBox/>
      </ThemeContext.Provider>
      <Refer/> */}
    </>
  )
}

export default App
