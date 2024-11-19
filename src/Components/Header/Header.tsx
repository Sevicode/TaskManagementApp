import React, { useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Typography } from "@mui/material";

function Header() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString()); // Format in local date and time
    };

    // Initial call and interval setup
    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header
      style={{
        textAlign: "center",
        padding: "1rem",
        background: "#D991CF",
        color: "#fff",
      }}
    >
      <h1>Task Management App</h1>
      <Typography>
        <AccessTimeFilledIcon />
      </Typography>
      <Typography>{currentTime}</Typography>
    </header>
  );
}

export default Header;
