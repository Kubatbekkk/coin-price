import { RELATED_TO_CURRENCY } from "./constants";
import { makeAutoObservable, runInAction } from "mobx";
import { type Coins, ApiResponseSchema } from "./types";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

class CoinStore {
  coins: Coins = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);

    this.fetchCoins();
  }

  fetchCoins = async () => {
    if (this.coins.length > 0 || this.loading) {
      return;
    }

    this.loading = true;
    this.error = null;

    try {
      const response = await axios.get(apiUrl);

      runInAction(() => {
        const validatedData = ApiResponseSchema.parse(response.data);
        const extractedCoins: Coins = [];

        for (const [baseCoin, coinData] of Object.entries(validatedData)) {
          if (RELATED_TO_CURRENCY in coinData) {
            extractedCoins.push([baseCoin, coinData[RELATED_TO_CURRENCY]]);
          }
        }

        this.coins = extractedCoins;
      });
    } catch {
      runInAction(() => {
        this.error = "Failed to fetch rates.";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  getCoinDetails = (ticker: string) => {
    return this.coins.find(([coinTicker]) => coinTicker === ticker);
  };
}

const coinStore = new CoinStore();
export default coinStore;
