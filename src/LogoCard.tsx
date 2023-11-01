import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function LogoCard() {
  return (
    <>
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px", // Ustaw wysokość na całą wysokość widoku
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
            SRAY-TASMA
          </Typography>
        </Box>
      </Container>
    </>
  );
}
