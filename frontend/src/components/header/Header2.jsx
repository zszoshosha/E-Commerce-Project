/*CONTAINER  flex \
e-commerce stack
search bar 
two icons .... done 
 search{
  border

}




*/

import { Container, IconButton, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import SimpleListMenuTwo from "./menuTwo";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import { auth } from "../../../firebase";

const Header2 = () => {
  const {user} = useAuth();
  const handleAuthentication = () =>{
    auth.signOut();
  }
  const basket = useAuth();
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
    flexGrow: 0.4,
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
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between",alignItems:"center" }}>
      {/* e-commerce */}
<Link color="white" to={"/"} >
          <Stack
            alignItems={"center"}
            sx={{ minWidth: "100px", justifyContent: "center" }} 
          >
            <ShoppingCartOutlinedIcon />
            <Typography variant="body2">E-commerce</Typography>
          </Stack>
</Link>

      {/* search bar */}
      <Stack sx={{ flexGrow: 0.6, justifyContent: "center" }}>
        <Search
          sx={{
            display: "flex",
            borderRadius: "23px",
            border: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
      <Stack direction={"row"} sx={{ gap: 4, alignItems: "center" }}>
        <Link to={"/basket"}>
          <IconButton>
            <Badge badgeContent={`${basket.basket.length}`} color="primary">
              <ShoppingCartOutlinedIcon color="action" fontSize="medium" />
            </Badge>
          </IconButton>
        </Link>
        <Stack sx={{ p:0,gap:0,alignItems:"center",minWidth:"165px"}}>
          <Link to={!user && "/login"}>
            <IconButton onClick={handleAuthentication} size="small">
              {user? "sign out":"sign in"
              }
            </IconButton>
          </Link>
          <Typography variant="caption">hello {user?user.email:"guest"}</Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header2;
