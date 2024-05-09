/*CONTAINER  flex \
e-commerce stack
search bar 
two icons .... done 
 search{
  border

}




*/

import { Container, IconButton, Stack, Typography, } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import SimpleListMenuTwo from "./menuTwo";

const Header2 = () => {
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    flexGrow:0.4,
    borderRadius: theme.shape.borderRadius,
    border: "2px solid 777",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));



  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between", }}>
      {/* e-commerce */}
      <Stack alignItems={"center"} sx={{minWidth:"100px"}}>
        <ShoppingCartOutlinedIcon />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>
      {/* search bar */}
      <Stack sx={{flexGrow: 0.6 }}>
        <Search sx={{ display: "flex", borderRadius: "22px" ,border:2 ,justifyContent: "space-between"  }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SimpleListMenuTwo />
        </Search>
      </Stack>
      {/* third bart */}
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton>
          <Badge badgeContent={7} color="primary">
            <MailIcon color="action" />
          </Badge>
        </IconButton>

        <IconButton>
          <Person2OutlinedIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;
