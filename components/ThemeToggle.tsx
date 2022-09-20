import React from "react";
import { Button } from "@modulz/design-system";
import { useTheme } from "next-themes";
// import { darkTheme } from 'stiches'

export const ThemeToggle = (props: any) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      {...props}
      aria-label="toggle a light and dark color scheme"
    >
      {theme == "light" ? (
        "toggle dark"
      ) : (
        "toggle light"
      )}
    </Button>
  );
};
