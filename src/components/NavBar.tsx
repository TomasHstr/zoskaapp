// src/components/NavBar.tsx

"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { Home } from "@mui/icons-material";
import { useSession, signOut } from "next-auth/react";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession(); // Check session status

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/"); // Home
        break;
      case 1:
        router.push("/prispevok"); // Navigate to "Prispevok" page
        break;
      case 2:
        router.push("/auth/prihlasenie"); // Login page
        break;
      case 3:
        router.push("/auth/registracia"); // Registration page
        break;
      default:
        break;
    }
  };

  const handleLogoff = () => {
    signOut(); // Sign out the user
    router.push("/"); // Redirect to home page after log out
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
      >
        <BottomNavigationAction label="Home" icon={<Home />} showLabel />

        <BottomNavigationAction label="Prispevky" icon={<FavoriteIcon />} showLabel />

        {!session ? (
          <>
            <BottomNavigationAction label="Login" icon={<LoginIcon />} showLabel onClick={() => router.push("/auth/prihlasenie")} />
            <BottomNavigationAction label="Registracia" icon={<HowToRegIcon />} showLabel onClick={() => router.push("/auth/registracia")} />
          </>
        ) : (
          <BottomNavigationAction label="Log off" icon={<LogoutIcon />} showLabel onClick={handleLogoff} />
        )}
      </BottomNavigation>
    </Box>
  );
}
