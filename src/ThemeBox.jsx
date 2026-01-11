import { useContext } from "react"
import ThemeContext from "./ThemeContext"

const ThemeBox = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <div style={{
        width: "200px",
        height: "100px",
        margin: "30px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme === "light" ? "pink" : "black",
        color: theme === "light" ? "black" : "pink",
    }}>
        This is a {theme} themed box
    </div>
  );
}

export default ThemeBox