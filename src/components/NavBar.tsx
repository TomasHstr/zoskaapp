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

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/home");
        break;
      case 1:
        router.push("/prispevok");
        break;
      case 2:
        router.push("/auth/prihlasenie");
        break;
      case 3:
        router.push("/registracia");
        break;
      default:
        break;
    }
  };

  const handleLogoff = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed", // Fixes navbar at the top
        bottom: 0,         // Fixes it to the bottom if it's a bottom navbar, change to 'top: 0' if you want it at the top
        zIndex: 1000,      // Ensures it stays above other elements
        backgroundColor: "#fff", // Adds background color to avoid transparency
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
      >
        <BottomNavigationAction key="Domov" label="Home" icon={<Home/>} />

        <BottomNavigationAction label="Prispevky" icon={<FavoriteIcon />} />

        {!isLoggedIn ? [
          <BottomNavigationAction key="login" label="Login" icon={<LoginIcon />} />,
          <BottomNavigationAction key="register" label="Registracia" icon={<HowToRegIcon />} />,
        ] : (
          <BottomNavigationAction label="Log off" icon={<LogoutIcon />} onClick={handleLogoff} />
        )}
      </BottomNavigation>
    </Box>
  );
}