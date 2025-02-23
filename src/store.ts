import { makeAutoObservable, runInAction, computed } from "mobx";
import { RELATED_TO_CURRENCY } from "./constants";
import { type Coins, type SortBy, ApiResponseSchema } from "./types";
import axios from "axios";
import { getCoinName } from "./utils";

const apiUrl = import.meta.env.VITE_API_URL;

class CoinStore {
  coins: Coins = [];
  loading: boolean = false;
  error: string | null = null;
  sortBy: SortBy = null;

  constructor() {
    makeAutoObservable(this, { sortedCoins: computed });

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

  setSortBy = (criteria: SortBy) => {
    this.sortBy = criteria;
  };

  get sortedCoins() {
    if (!this.sortBy) {
      return this.coins;
    }

    return [...this.coins].sort((a, b) => {
      const [tickerA, coinA] = a;
      const [tickerB, coinB] = b;

      switch (this.sortBy) {
        case "name-az":
          return getCoinName(tickerA).localeCompare(getCoinName(tickerB));
        case "name-za":
          return getCoinName(tickerB).localeCompare(getCoinName(tickerA));
        case "rate-asc":
          return coinA.rate - coinB.rate;
        case "rate-desc":
          return coinB.rate - coinA.rate;
        case null:
          return 0;
        default: {
          const _exhaustiveCheck: never = this.sortBy;
          throw new Error(`Unhandled sortBy value: ${_exhaustiveCheck}`);
        }
      }
    });
  }

  getCoinDetails = (ticker: string) => {
    return this.coins.find(([coinTicker]) => coinTicker === ticker);
  };
}

const coinStore = new CoinStore();
export default coinStore;
