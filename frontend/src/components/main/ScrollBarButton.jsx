import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollBarButton = () => {
  return (
    <Zoom in={useScrollTrigger({threshold: 400})}>
      <Fab onClick={()=>{
        window.scrollTo(0,0);
      }}
        color="primary"
        aria-label="add"
        size="small"
        variant="extended"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollBarButton;
