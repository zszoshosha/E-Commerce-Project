import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import MainHeading from "./components/header/MainHeading";
import Hero from "./components/hero/Hero";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <MainHeading />
<Box>
          <Hero />
</Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
