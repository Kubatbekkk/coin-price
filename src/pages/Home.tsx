import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Link as MuiLink,
  Card,
  CardContent,
  Grid2 as Grid,
} from "@mui/material";
import coinStore from "../store";
import { getCoinName } from "../utils";
import { Loading, Error, CoinHeader } from "../components";

const Home = observer(() => {
  if (coinStore.loading) {
    return <Loading />;
  }

  if (coinStore.error) {
    return <Error error={coinStore.error} />;
  }

  return (
    <Box
      p={3}
      sx={{
        minHeight: "100vh",
        p: {
          sm: 0,
          md: 3,
        },
      }}
    >
      <Grid container spacing={1}>
        <CoinHeader />

        {coinStore.coins.map(([ticker, coin], index) => (
          <Grid size={12} key={ticker}>
            <Card sx={{ backgroundColor: "transparent" }}>
              <MuiLink
                component={Link}
                to={`/${ticker}`}
                underline="none"
                sx={{
                  color: "#F6F4F0",
                  "&:hover .MuiCardContent-root": {
                    backgroundColor: "#141E61",
                    border: "1px solid #9290C3",
                    borderRadius: "5px",
                  },
                }}
              >
                <CardContent
                  sx={{
                    border: "1px solid transparent",
                    borderBottom: "1px solid #535C91",
                    backgroundColor: "#68565",
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid size={1}>
                      <Typography sx={{ color: "#fff" }}>
                        {index + 1}
                      </Typography>
                    </Grid>
                    <Grid size={4}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "#fff" }}
                      >
                        {getCoinName(ticker)}
                      </Typography>
                    </Grid>
                    <Grid size={4}>
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        {ticker.toUpperCase()}
                      </Typography>
                    </Grid>
                    <Grid size={3} sx={{ textAlign: "right" }}>
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        ${coin.rate.toFixed(6)}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </MuiLink>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default Home;
