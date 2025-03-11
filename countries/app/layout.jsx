"use client"
import '@/app/ui/globals.css';
import { nunito } from '@/app/ui/fonts';
import ThemeProvider from '@/app/components/theme-provider'
import ThemeSwitcher from '@/app/components/theme-switcher';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased dark:bg-darkmodeVeryBlue`}>
        <ThemeProvider>
          <div className="min-h-screen w-full px-4 desktop:px-0 dark:bg-darkmodeVeryBlue">
            <div className="w-full space-y-6 desktop:space-y-12">
              <header className="w-full shadow-lg py-8 px-4 desktop:px-20 dark:bg-darkmodeBlue">
                <div className="flex justify-between items-center">
                  <h1 className="font-extrabold text-sm desktop:text-2xl">
                    Where in the world?
                  </h1>
                  < ThemeSwitcher />
                </div>
              </header>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
);
}
