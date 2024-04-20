import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetStatus, setResetStatus] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    sendResetLink();
  };

  const sendResetLink = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setResetStatus("Password reset link has been sent to your email.");
      } else {
        setResetStatus("Failed to send password reset link. Please try again.");
      }
    } catch (error) {
      setResetStatus("An error occurred. Please try again later.");
      console.error("Error sending password reset link:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2C2C2C",
        borderRadius: "16px",
        p: 3,
        margin: "0 auto",
        maxWidth: 400,
      }}
    >
      <Typography variant="h4" color="white" mb={2}>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit}>
       <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#484848",
              },
              "&:hover fieldset": {
                borderColor: "#555555",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#555555",
              },
            },
          }}
          InputProps={{
            style: {
              color: "white",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#ffffff70",
            },
          }}
        ></TextField>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isLoading}
          sx={{
            mt: 2,
            backgroundColor: "#484848",
            color: "white",
            "&:hover": {
              backgroundColor: "#555555",
            },
          }}
        >
          {isLoading ? "Sending..." : "Reset Password"}
        </Button>
        {resetStatus && (
          <Typography variant="body2" color="white" mt={2}>
            {resetStatus}
          </Typography>
        )}
      </form>
    </Box>
  );
};

export default ForgotPassword;