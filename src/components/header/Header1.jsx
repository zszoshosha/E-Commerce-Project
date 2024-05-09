import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SimpleListMenu from "./menuR";


const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: "#2B3445" , color: "#fff" , py: ' 4px',
    borderBottomRightRadius: 14  
    ,borderBottomLeftRadius: 14  
    }} >
<Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            Hot
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "300", color: "#fff" }}
            variant="body2"
          >
            free express shipping
          </Typography>
  
          <Box flexGrow={1} />
  
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined  sx={{fontSize: '22px'}} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{fontSize: '22px'}} />
              </IconButton>
            )}
          </div>
            <SimpleListMenu/>
          <FacebookIcon sx={{fontSize: '22px'}} />
            <TwitterIcon  sx={{fontSize: '22px' , mx: 1}} />
            <InstagramIcon  sx={{fontSize: '22px'}}/>
  
        </Stack>
</Container>
    </Box>
  );
};

export default Header1;
