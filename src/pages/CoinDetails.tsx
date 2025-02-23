import { observer } from "mobx-react-lite";
import { useParams, Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid2 as Grid,
} from "@mui/material";
import coinStore from "../store";
import { Loading, Error } from "../components";
import { getCoinName } from "../utils";
import { CoinItem } from "../components/CoinItem";
import { RELATED_TO_CURRENCY } from "../constants";

const CoinDetails = observer(() => {
  const { ticker } = useParams<{ ticker: string }>();

  if (!ticker) {
    return;
  }

  const coinData = coinStore.getCoinDetails(ticker);

  if (coinStore.loading) {
    return <Loading fullPage />;
  }

  if (coinStore.error) {
    return <Error error={coinStore.error} />;
  }

  if (!coinData) {
    return <Error error="Coin not found." />;
  }

  const [tickerSymbol, coin] = coinData;

  const prefix = RELATED_TO_CURRENCY === "usd" ? "$" : undefined;

  const details = [
    { label: "Rate", value: coin.rate.toFixed(6), prefix },
    { label: "Ask", value: coin.ask.toFixed(6), prefix },
    { label: "Bid", value: coin.bid.toFixed(6), prefix },
    { label: "Change (24h)", value: coin.diff24h, prefix },
  ];

  return (
    <Grid
      container
      sx={{
        paddingTop: {
          xs: 10,
          md: 6,
        },
      }}
    >
      <Card
        sx={{
          borderRadius: "5px",
          backgroundColor: "transparent",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
            {getCoinName(ticker)} - {tickerSymbol.toUpperCase()} /{" "}
            {RELATED_TO_CURRENCY.toUpperCase()}
          </Typography>

          <Grid container spacing={2} sx={{ mt: 3 }}>
            {details.map(({ label, value, prefix }, index) => (
              <CoinItem
                key={index}
                label={label}
                value={value}
                prefix={prefix}
              />
            ))}
          </Grid>
        </CardContent>

        <CardActions>
          <Button
            component={Link}
            fullWidth
            to="/"
            variant="contained"
            sx={{
              backgroundColor: "#3E5879",
              "&:hover": {
                backgroundColor: "#7874A3",
                color: "#fff",
              },
            }}
          >
            Back to List
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
});

export default CoinDetails;
