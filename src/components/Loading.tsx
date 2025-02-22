import { Box, CircularProgress } from "@mui/material";

interface LoadingProps {
  fullPage?: boolean;
}

export const Loading = ({ fullPage = false }: LoadingProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: fullPage ? "100vh" : "100%",
        width: fullPage ? "100vw" : "100%",
        position: fullPage ? "fixed" : "static",
        top: 0,
        left: 0,
        zIndex: fullPage ? 9999 : "auto",
        backgroundColor: fullPage ? "rgba(0, 0, 0, 0.5)" : "transparent",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
