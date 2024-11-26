// src/app/notifikacie/page.tsx
"use client";

import { Container, Typography, Button } from "@mui/material";
import { signOut } from "next-auth/react";

// export const metadata = { title: "Odhlasenie | ZoškaSnap" };

export default function LogOff() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Odhlasenie
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signOut()} 
        sx={{ mt: 2 }}
      >
        Log out
      </Button>
    </Container>
  );
}
