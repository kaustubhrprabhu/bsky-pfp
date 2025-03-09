import { Box, Link, Typography } from "@mui/material";
import React from "react";

function AboutSection() {
  return (
    <Box id="about" sx={{ my: 4, textAlign: "center" }}>
      <Typography variant="body1">
        This tool lets you create an emoji avatar/PFP (profile picture) similar
        to the one Bluesky offers during the sign-up process, but with a few
        additional emojis, thanks to Material UI Icons. Made by{" "}
        <Link
          href="https://bsky.app/profile/kaustubhrprabhu.bsky.social"
          color="inherit"
          underline="always"
        >
          @kaustubhrprabhu
        </Link>
      </Typography>
    </Box>
  );
}

export default AboutSection;
