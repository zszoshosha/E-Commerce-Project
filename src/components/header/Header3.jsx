import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import ComputerIcon from "@mui/icons-material/Computer";
import ArrowDownwardIcon from "@mui/icons-material/ExpandMore";

import PedalBikeIcon from "@mui/icons-material/PedalBike";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Close } from "@mui/icons-material";
import Links from "./Links";
const Header3 = () => {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between",
        mt: 5,
      }}
    >
      <Box sx={{ display: "flex", alignContent: "space-between" }}>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              border: 1,
              width: "240px",
              // @ts-ignore
              background: theme.palette.myColor.main,
            }}
          >
            <WindowIcon />
            <Typography sx={{ paddingX: 1, textTransform: "capitalize" }}>
              {" "}
              Dashboard
            </Typography>
            <Box flexGrow={1}></Box>
            <ArrowRightIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              ".MuiPaper-root": {
                width: 220,
                // @ts-ignore
                background: theme.palette.myColor.main,
              },
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <PedalBikeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Bikes</ListItemText>
              <Typography variant="body2" color="text.secondary"></Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ComputerIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Computer</ListItemText>
              <Typography variant="body2" color="text.secondary"></Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <MenuBookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Books</ListItemText>
              <Typography variant="body2" color="text.secondary"></Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SportsEsportsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
              <Typography variant="body2" color="text.secondary"></Typography>
            </MenuItem>
          </Menu>
        </div>
      </Box>
{
  useMediaQuery("(min-width:1200px)") && (
<Stack direction={"row"} alignItems={"center"} gap={3} >
        <Links Name={"Home"}/>
        <Links Name={"Mega menu"}/>
        <Links Name={"Full screen menu"}/>
        <Links Name={"Pages"}/>
        <Links Name={"User account"}/>
        <Links Name={"Vendor account"}/>
</Stack >
  )
}


      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root": { height: "80%" } }}
      >
        <Box
          sx={{
            width: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
            ".MuiPaper-root": { height: "auto" },
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "blue",
              ":hover": {
                rotate: "180deg",
                transition: "0.3s",
                background: "red",
              },
            }}
          >
            <Close />
          </IconButton>
          {[
            { mainLink: "home", subLink: ["link1", "link2", "link3"] },
            { mainLink: "mega menu", subLink: ["link1", "link2", "link3"] },
            { mainLink: "full screen", subLink: ["link1", "link2", "link3"] },
            { mainLink: "pages", subLink: ["link1", "link2", "link3"] },
            { mainLink: "user account", subLink: ["link1", "link2", "link3"] },
            { mainLink: "vendor acount", subLink: ["link1", "link2", "link3"] },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={5}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List sx={{ py: 0, my: 0 }}>
                    {item.subLink.map((link) => {
                      return (
                        <ListItem key={link} disablePadding>
                          <ListItemButton>
                            <ListItemText primary={link} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>{" "}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
