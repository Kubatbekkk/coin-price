import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{
          color: "#fff",
          padding: 2,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#3E5879",
          zIndex: 1000,
          boxShadow: 1,
        }}
      >
        YouHodler CC Rates
      </Typography>
      {children}
    </>
  );
};
