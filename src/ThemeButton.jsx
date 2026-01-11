import { useContext } from "react"
import ThemeContext from "./ThemeContext"
const ThemeButton = () => {
    const { theme, toggleTheme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}
    style={{
        padding: "10px 20px",
        margin: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: theme === "light"? "pink" : "black",
        color: theme === "light"? "black" : "pink"
    }}
    >
        Current Theme: {theme} (click to toggle)
    </button>
  )
}

export default ThemeButton