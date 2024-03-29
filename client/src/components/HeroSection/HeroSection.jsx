import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

import "./HeroSection.css";

const HeroSection = ({}) => {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={0} paddingX={"20px"}>
        <Grid item xs={12} sm={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "50px auto", // Center horizontally and reduce top margin
            }}
          >
            <Typography variant="bannerH1" align="center">
              CareerCompass
            </Typography>
            <Typography variant="tagLine" align="center" marginTop={"-20px"}>
              “Connecting Talent With Opportunity”
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          spacing={3}
          container
          justifyContent="center" 
          marginY={"-20px"} // Adjusted negative margin
        >
          <Grid item>
            <Button variant="header" size="large">
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button variant="header" size="large">
              SIGN UP
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
