import {
  Avatar,
  Box,
  Button,
  Icon,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  SentimentVerySatisfiedOutlined,
  AlternateEmailOutlined,
  SmartToyOutlined,
  Download,
  SentimentSatisfiedOutlined,
  CelebrationOutlined,
  SportsEsportsOutlined,
  HeadphonesOutlined,
  LocalFloristOutlined,
  WavingHandOutlined,
  RocketLaunchOutlined,
  ElectricBoltOutlined,
  AutoAwesomeOutlined,
  ScienceOutlined,
  LocalCafeOutlined,
  FavoriteBorderOutlined,
  SchoolOutlined,
  WorkOutlineOutlined,
  WaterDropOutlined,
  LaptopChromebookRounded,
  LocalPizzaOutlined,
  CloudOutlined,
  LocalFireDepartmentOutlined,
  AttachFileOutlined,
  SavingsOutlined,
} from "@mui/icons-material";

const pfpIcons = [
  AlternateEmailOutlined,
  SentimentSatisfiedOutlined,
  SentimentVerySatisfiedOutlined,
  SmartToyOutlined,
  WavingHandOutlined,
  FavoriteBorderOutlined,
  CelebrationOutlined,
  AutoAwesomeOutlined,
  LocalFloristOutlined,
  WaterDropOutlined,
  CloudOutlined,
  ElectricBoltOutlined,
  LocalFireDepartmentOutlined,
  HeadphonesOutlined,
  SportsEsportsOutlined,
  LaptopChromebookRounded,
  LocalCafeOutlined,
  LocalPizzaOutlined,
  SchoolOutlined,
  WorkOutlineOutlined,
  ScienceOutlined,
  RocketLaunchOutlined,
  AttachFileOutlined,
  SavingsOutlined,
];

const pfpColors = [
  "#fe8311",
  "#fed811",
  "#73df84",
  "#1185fe",
  "#ef75ea",
  "#f55454",
];

function downloadPFP() {
  const svgElement = document.getElementById("pfp-container").innerHTML;
  const blob = new Blob([svgElement], { type: "image/svg+xml" });
  const blobUrl = URL.createObjectURL(blob);

  const img = new Image();
  img.src = blobUrl;
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 1000;
    const context = canvas.getContext("2d");
    context.drawImage(img, 0, 0, 1000, 1000);
    const pfpURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = pfpURL;
    link.target = "_blank";
    link.download = "BSKY-PFP-" + Date.now();
    link.click();
  };
}

function ToolContainer() {
  const [PfpIcon, setPfpIcon] = useState(pfpIcons[0]);
  const [pfpColor, setPfpColor] = useState(pfpColors[0]);

  return (
    <Paper
      elevation={6}
      sx={{
        p: { xs: 2, sm: 4 },
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Avatar id="pfp-container" sx={{ width: 100, height: 100 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          fill="white"
        >
          <rect width={100} height={100} fill={pfpColor} />
          <PfpIcon viewBox="-12 -12 48 48" />
        </svg>
      </Avatar>
      <Box>
        <Typography variant="overline" color="textSecondary">
          Select an emoji
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {pfpIcons.map((Icon, index) => {
            return (
              <IconButton
                size="small"
                key={index}
                onClick={() => {
                  setPfpIcon(pfpIcons[index]);
                }}
              >
                <Icon />
              </IconButton>
            );
          })}
        </Box>
        <Typography variant="overline" color="textSecondary">
          Select a color
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {pfpColors.map((color, index) => {
            return (
              <IconButton
                key={index}
                size="small"
                sx={{ bgcolor: color, ":hover": { bgcolor: color } }}
                onClick={() => setPfpColor(pfpColors[index])}
              >
                <Icon />
              </IconButton>
            );
          })}
        </Box>
        <Button
          variant="outlined"
          size="large"
          startIcon={<Download />}
          sx={{ mt: 4, width: "100%" }}
          onClick={downloadPFP}
        >
          Download
        </Button>
      </Box>
    </Paper>
  );
}

export default ToolContainer;
