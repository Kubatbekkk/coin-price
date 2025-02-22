import { Alert, Box } from "@mui/material";

interface ErrorProps {
  error: string;
}

export const Error = ({ error }: ErrorProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Alert severity="error">{error}</Alert>
    </Box>
  );
};
