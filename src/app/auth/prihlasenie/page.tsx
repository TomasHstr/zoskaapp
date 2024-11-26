  // src/app/login/page.tsx

  "use client";

  import { Box, Button, Typography } from "@mui/material";
  import { signIn } from "next-auth/react";

  export default function LoginPage() {
    const handleGoogleLogin = () => {
      signIn("google"); // Initiates Google login through NextAuth
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
          Login
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, maxWidth: "400px" }}
          onClick={handleGoogleLogin}
        >
          Login with Google
        </Button>
      </Box>
    );
  }
