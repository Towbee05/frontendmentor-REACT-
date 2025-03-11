import { useTheme } from "next-themes";
import { Moon, Sun } from "@/app/ui/moon";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const switchTheme = () => {
        setTheme(() => theme === 'light' ? 'dark' : 'light');
        
    };
    return (
        <button className="flex items-center gap-2" onClick={switchTheme}>
            { theme ==='light' ? <Moon /> : <Sun /> } 
            <p className="capitalize font-semibold text-xs desktop:text-base"> { theme === 'light' ? 'dark' : 'light' } mode </p>
        </button>
    )
};

export default ThemeSwitcher;