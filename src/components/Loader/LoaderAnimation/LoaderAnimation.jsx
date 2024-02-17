import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LoaderAnimation = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          right: "20px",
        }}
      >
        <Box sx={{ margin: 2 }}>
          <Skeleton
            sx={{ bgcolor: "#00d1b237" }}
            variant="circular"
            width={90}
            height={90}
            animation="wave"
          />
        </Box>
        <Box
          sx={{
            marginRight: 3,
            width: "2px",
          }}
        >
          <Skeleton
            sx={{
              bgcolor: "#00d1b237",
            }}
            width="2px"
            height={160}
            animation="wave"
          >
            <Typography>.</Typography>
          </Skeleton>
        </Box>
        <Box
          sx={{
            width: "300px",
            "@media (max-width: 440px)": {
              width: "260px",
            },
            "@media (min-width: 700px)": {
              width: "400px",
            },
          }}
        >
          <Skeleton
            sx={{
              bgcolor: "#00d1b237",
            }}
            width="100%"
            height={180}
            animation="wave"
          >
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
    </div>
  );
};

export default LoaderAnimation;

{
  /* <Skeleton
            sx={{
              width: "300px",
              height: "150px",
              bgcolor: "#00d1b237",
              "@media (max-width: 430px)": {
                width: "250px",
              },
            }}
            animation="wave"
          >
            <Typography>.</Typography>
          </Skeleton> */
}
