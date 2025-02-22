import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "#9290C3" }}
      >
        Coin Prices
      </Typography>
      {children}
    </>
  );
};
