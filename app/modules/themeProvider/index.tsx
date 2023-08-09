'use client'

import { createContext } from 'react'

export default function ThemeProvider({ children }) {

    const ThemeContext = createContext({})

    return (
        <ThemeContext.Provider value={'dark'}>
            {children}
        </ThemeContext.Provider>
    )
}