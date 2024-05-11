import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

// eslint-disable-next-line react/prop-types
const Links = ({ Name }) => {
  return (
    <Box
      sx={{
        ":hover .naV": { display: "block" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingBottom: 2,
        
      }}
    >
      <Typography className="Size" variant="body1" sx={{".Size":{fontSize:"18px",color:"red"}}}>{Name}</Typography>
      <ExpandMore />
      <Paper
        className="naV"
        sx={{
          position: "absolute",
          top: "100%",
          width: 180,
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
          zIndex:"2",
          ".MuiTypography-root":{fontSize:"14px",fontWeight:300}
        }}
      >
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{
                position: "relative",
                ":hover .sub-nav": { display: "block" },
              }}
            >
              <ListItemButton>
                <ListItemText primary="Products" />
                <Box flexGrow={1} />
                <KeyboardArrowRightOutlinedIcon />
              </ListItemButton>

              <Box
                className="sub-nav"
                sx={{
                  display: "none",
                  position: "absolute",
                  left: "100%",
                  top: 0,
                  cursor:"pointer"
                }}
              >
                <Paper sx={{ minWidth:150 }}>
                  <nav aria-label="secondary mailbox folders">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="add product" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                          <ListItemText primary="edit product" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </Paper>
              </Box>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="orders" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="profile" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Paper>
    </Box>
  );
};

export default Links;
