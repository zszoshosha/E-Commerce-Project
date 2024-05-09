import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "@mui/material";

const options = ["All Categories", "CAR", "Clothes", "Electronics"];

export default function SimpleListMenuTwo() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{
          p: 0,
          m: 0,
          bgcolor:
            // @ts-ignore
            theme.palette.myColor.main,
          borderBottomRightRadius: "22px",
          padding: "0",
          borderTopRightRadius: "22px",
        }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ "&:hover": { cursor: "pointer" }, px: 2 }}
        >
          <ListItemText
            sx={{
              ".MuiTypography-root": { color: "grey", mY: 0   },
              width: "100px",
              height:"23px",
              textAlign: "center",
            }}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{ fontSize: "16px" }} />
        </ListItem>
      </List>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            sx={{ fontSize: "12px", p: "3px 10px", minHeight: "10px" }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
