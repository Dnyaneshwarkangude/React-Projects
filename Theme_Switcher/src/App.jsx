import { useState,useEffect } from 'react'
import Themebtn from './Themebtn'
import Card from './Card'
import { ThemeProvider  } from './theme'
 

function App() {
  const [themeMode , setThemeMode] = useState('light')

  const darkMode = () =>{
    setThemeMode('dark')
  }

  const lightMode = () =>{
    setThemeMode('light')
  }

  // code which change theme
  const changeTheme = document.querySelector('html').classList
  useEffect(() =>{
    changeTheme.remove('dark', 'light')
    changeTheme.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        < Card/>
                    </div>
                </div>
    </div>
    </ThemeProvider>

  )
}

export default App
