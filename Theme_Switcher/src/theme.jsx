import { useContext,createContext } from "react";

export const themeContex  = createContext({
    themeMode : "light",
    darkMode : () =>{},
    lightMode : () =>{},
});

export const ThemeProvider = themeContex.Provider;

const useTheme = () =>{
    return useContext(themeContex);
}

export default useTheme