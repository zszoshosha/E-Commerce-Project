import {
  Box,
  Stack,
  Container,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const IconSection = () => {
  return (
    <Container>
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        direction={"row"}
        alignItems={"center"}
        sx={{ flexWrap: "wrap" }}
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"fast delivery"}
          subTitle={"start from 10$"}
        />
        <MyBox
          icon={<CreditScoreIcon fontSize="large" />}
          title={"money guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmIcon fontSize="large" />}
          title={"365 days"}
          subTitle={"For Free return"}
        />
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        gap: 3,
        py: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1"> {title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
