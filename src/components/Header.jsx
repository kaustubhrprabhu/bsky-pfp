import { Box, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Box sx={{ my: 4, textAlign: "center" }}>
      <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
        Bluesky PFP
      </Typography>
    </Box>
  );
}

export default Header;
