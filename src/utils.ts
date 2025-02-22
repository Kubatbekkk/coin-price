import { TICKER_COIN_MAP } from "./constants";

export const getCoinName = (ticker: string): string =>
  TICKER_COIN_MAP[ticker] || ticker.toUpperCase();
