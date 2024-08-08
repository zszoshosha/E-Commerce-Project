import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import MainHeading from "./components/header/MainHeading";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/footer";
import ScrollBarButton from "./components/main/ScrollBarButton";
import Login from "./components/login/login";
import { auth } from "../firebase";
import { useAuth } from "./components/context/GlobalState";
import { useEffect } from "react";
import Main from "./components/main/main";
import { Basket } from "./components/basket/basket";

function App() {
  const [theme, colorMode] = useMode();
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainHeading />
                <Box
                  bgcolor={
                    // @ts-ignore
                    theme.palette.bg.main
                  }
                >
                  <Hero />
                  <Main />
                </Box>
                <Footer />
                <ScrollBarButton />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/basket"
            element={
              <>
                <MainHeading />
                <Box
                  bgcolor={
                    // @ts-ignore
                    theme.palette.bg.main
                  }
                >
                  <Basket />
                </Box>{" "}
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
