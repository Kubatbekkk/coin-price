import { Paper, Typography, Grid2 as Grid } from "@mui/material";

interface DetailItemProps {
  label: string;
  value: string | number;
  prefix?: string;
}

export const CoinItem = ({ label, value }: DetailItemProps) => {
  return (
    <Grid size={{ md: 6, xs: 12 }}>
      <Paper
        sx={{
          padding: 2,
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "1px solid #535C91",
          borderRadius: "5px",
          color: "#F6F4F0",
          "&:hover": {
            backgroundColor: "#141E61",
            border: "1px solid #9290C3",
          },
        }}
      >
        <Typography sx={{ color: "#9290C3" }} align="center">
          {label}
        </Typography>

        <Typography sx={{ color: "#F6F4F0" }} align="center">
          ${value}
        </Typography>
      </Paper>
    </Grid>
  );
};
