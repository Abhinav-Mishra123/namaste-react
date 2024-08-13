import { createContext, useContext } from "react";

const ThemeContext = createContext({
    theme: "dark",
    setTheme: ()=> {}
})

export const ThemeSwitcher = ()=>{
    const { theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = ()=>{
        setTheme(theme === "dark" ? "light": "dark")
    }
    return <button onClick={toggleTheme}>Switch Theme</button>;
}

export default ThemeContext;