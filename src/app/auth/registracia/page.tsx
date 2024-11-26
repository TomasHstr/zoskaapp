// src/app/registracia/page.tsx

"use client";

import { Box, Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const handleGoogleRegister = () => {
    signIn("google"); // Redirects to Google sign-in, creating a new account if needed
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2, maxWidth: "400px" }}
        onClick={handleGoogleRegister}
      >
        Register with Google
      </Button>
    </Box>
  );
}
