import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import coinStore from "../store";
import { Loading, Error } from "../components";

export const CoinDetails = observer(() => {
  const { ticker } = useParams<{ ticker: string }>();

  if (!ticker) {
    return null;
  }

  const coinData = coinStore.coins.find(([c]) => c === ticker);

  useEffect(() => {
    if (!coinData) {
      coinStore.fetchCoins();
    }
  }, [ticker, coinData]);

  if (coinStore.loading) {
    return <Loading />;
  }

  if (coinStore.error) {
    return <Error error={coinStore.error} />;
  }

  if (!coinData) {
    return <Error error="Coin not found." />;
  }

  const [tickerSymbol, coin] = coinData;

  return (
    <Box
      p={3}
      sx={{
        minHeight: "100vh",
        backgroundColor: "#333",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ backgroundColor: "transparent", width: "100%" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#9290C3", textAlign: "center" }}
        >
          {tickerSymbol.toUpperCase()}
        </Typography>
        <CardContent sx={{ backgroundColor: "#3E5879" }}>
          <TableContainer
            component={Paper}
            sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#9290C3" }} align="left">
                    Rate
                  </TableCell>
                  <TableCell sx={{ color: "#9290C3" }} align="center">
                    Ask
                  </TableCell>
                  <TableCell sx={{ color: "#9290C3" }} align="center">
                    Bid
                  </TableCell>
                  <TableCell sx={{ color: "#9290C3" }} align="right">
                    Change (24h)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ color: "#F6F4F0" }} align="left">
                    {coin.rate.toFixed(6)}
                  </TableCell>
                  <TableCell sx={{ color: "#F6F4F0" }} align="center">
                    {coin.ask.toFixed(6)}
                  </TableCell>
                  <TableCell sx={{ color: "#F6F4F0" }} align="center">
                    {coin.bid.toFixed(6)}
                  </TableCell>
                  <TableCell sx={{ color: "#F6F4F0" }} align="right">
                    {coin.diff24h}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              backgroundColor: "#9290C3",
              "&:hover": {
                backgroundColor: "#7874A3",
              },
            }}
          >
            Back to List
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
});
