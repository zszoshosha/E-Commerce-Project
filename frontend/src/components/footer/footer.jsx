import { Box, Button, Typography } from "@mui/material";

const footer = () => {
  return (
    <Box
      sx={{
        py: 1.3,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        bgcolor: "#2b3445",
      }}
    >
      <Typography
        variant="h6"
        display={"flex"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          color: "HighlightText",
          fontSize: "18px",
        }}
      >
        designed and devolper by
        <Button
          sx={{
            mx: 1,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
        >
          zezo magdy
        </Button>
        2024
      </Typography>
    </Box>
  );
};

export default footer;
