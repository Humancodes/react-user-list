import React from "react";
import LoaderAnimation from "./LoaderAnimation/LoaderAnimation";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
const Loader = () => {
  return (
    <div style={{ padding: "20px 50px", border: "1px solid #00d1b2;" }}>
      <Box
        sx={{
          padding: "20px 50px",
          border: "1px solid #00d1b2;",
          "@media (max-width: 430px)": {
            padding: "5px 0",
          },
        }}
      >
        <LoaderAnimation />
        <LoaderAnimation />
        <LoaderAnimation />
        <LoaderAnimation />
        <LoaderAnimation />
        <LoaderAnimation />
      </Box>
    </div>
  );
};

export default Loader;
