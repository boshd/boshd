import React from "react";
import { Button } from "@modulz/design-system";
import { useTheme } from "next-themes";
import GlossyButton from "./GlossyButton";
// import { darkTheme } from 'stiches'

export const ThemeToggle = (props: any) => {
  const { theme, setTheme } = useTheme();

  return (
    <GlossyButton className={"glossy"} onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}>{theme == "light" ? "toggle dark" : "toggle light"}</GlossyButton>
    // <Button
    //   variant="ghost"
    //   onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    //   {...props}
    //   aria-label="toggle a light and dark color scheme"
    //   className="font-body text-sm font-semibold"
    // >

    // </Button>
  );
};
