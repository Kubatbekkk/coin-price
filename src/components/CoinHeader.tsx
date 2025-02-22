import { Typography, Card, CardContent, Grid2 as Grid } from "@mui/material";

export const CoinHeader = () => (
  <Grid size={12}>
    <Card sx={{ backgroundColor: "transparent" }}>
      <CardContent sx={{ backgroundColor: "#3E5879", borderRadius: "5px" }}>
        <Grid container>
          <Grid size={1}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "#9290C3" }}
            >
              #
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "#9290C3" }}
            >
              Name
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "#9290C3" }}
            >
              Ticker
            </Typography>
          </Grid>
          <Grid size={3} sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "#9290C3" }}
            >
              Rate (USD)
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Grid>
);
