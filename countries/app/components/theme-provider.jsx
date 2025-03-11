"use client"
import { useEffect, useState } from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"

export default function ThemeProvider ({children}) {
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    
    return <NextThemeProvider attribute="class" defaultTheme="light"> {children} </NextThemeProvider>
};