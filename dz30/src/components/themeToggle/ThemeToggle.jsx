import React from "react";
import useTheme from "../../hooks/useTheme";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const ThemeToggle = () => {
  const { theme, setTheme, THEMES } = useTheme();

  const toggleTheme = () => {
    theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT);
  };

  return (
    <Container>
      <Button color="secondary" variant="outlined" onClick={toggleTheme}>
        Change Theme
      </Button>
    </Container>
  );
};

export default ThemeToggle;
