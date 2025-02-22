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
  }

  fetchCoins = async () => {
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
      this.error = "Failed to fetch rates.";
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const coinStore = new CoinStore();
export default coinStore;
