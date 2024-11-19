import React, { useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Stack, Typography } from "@mui/material";

function Header() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header
      style={{
        textAlign: "center",
        padding: "1rem",
        background: "#F244D6",
        color: "#fff",
      }}
    >
      <Typography variant="h3" fontWeight={800}>
        Task Management App
      </Typography>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ m: 4 }}
      >
        <AccessTimeFilledIcon />
        <Typography fontSize={25} fontWeight={800}>
          {currentTime}
        </Typography>
      </Stack>
    </header>
  );
}

export default Header;
