// @ts-nocheck
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTheme } from "@mui/material";
import IconSection from "../hero/iconSection";
import photoOne from "../../Assets/sliderOne.jpg";
import photoTwo from "../../Assets/SliderTwo.jpg"
import smallPhotoOne from '../../Assets/smallPhotoOne.jpg'
import smallPhotoTwo from '../../Assets/smallphotoTwo.jpg'


const MySlider = [
  { text: "men", link: photoOne },
  { text: "women", link: photoTwo },
];

const Hero = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          pt: 2,
          mt: 2.5,
          display: "flex",
          gap: 3,
          alignItems: "center",
          px: 0,
        }}
      >
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {MySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />

                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  {/* the text inside photo */}
                  <Typography variant="h5" sx={{ color: "#222" }}>
                    LIFESTYLE COLLETION
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    sx={{ justifyContent: "center" }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: "#333", fontWeight: 400, mr: 1 }}
                    >
                      SALE UP TO
                    </Typography>{" "}
                    <Typography variant="h4" sx={{ color: "#D23F57" }}>
                      30% off
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                  >
                    get free shipping on orders over 99$
                  </Typography>
                  {/* button for shop now */}
                  <Button
                    variant="contained"
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69 , 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69 , 0.1)",
                        color: "#d44557",
                      },
                    }}
                  >
                    {" "}
                    Shop Now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src={smallPhotoOne} alt="" />

            <Stack
              sx={{
                position: "absolute",
                left: 25,
                top: "40%",
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "22px" }}
              >
                {" "}
                new arrival
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                  fontSize: "22px",
                }}
              >
                {" "}
                summer
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", mt: 1, fontSize: "22px" }}
              >
                Sale 20% off
              </Typography>
              <Link
                href="#"
                sx={{
                  display: "flex",
                  color: "#2B3445",
                  fontSize: "20px",
                  alignItems: "center",
                  gap: 1,
                  transition: "0.2s",
                  ":hover": { color: "#D23F57" },
                }}
              >
                {" "}
                shop now
                <KeyboardDoubleArrowRightOutlinedIcon fontSize="medium" />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src={smallPhotoTwo} alt="" />{" "}
            <Stack
              sx={{
                position: "absolute",
                left: 20,
                top: "45%",
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "22px" }}
              >
                {" "}
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                  fontSize: "22px",
                }}
              >
                {" "}
                DESKTOPS&
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", mt: 1, fontSize: "22px" }}
              >
                LAPTOPS
              </Typography>
              <Link
                href="#"
                sx={{
                  display: "flex",
                  color: "#2B3445",
                  fontSize: "20px",
                  alignItems: "center",
                  gap: 1,
                  transition: "0.2s",
                  ":hover": { color: "#D23F57" },
                }}
              >
                {" "}
                shop now
                <KeyboardDoubleArrowRightOutlinedIcon fontSize="medium" />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
};

export default Hero;
