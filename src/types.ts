import { z } from "zod";

export const CoinSchema = z.object({
  rate: z.number(),
  ask: z.number(),
  bid: z.number(),
  diff24h: z.number(),
});

export const ApiResponseSchema = z.record(
  z.string(),
  z.record(z.string(), CoinSchema),
);

type Coin = z.infer<typeof CoinSchema>;

export type Coins = [string, Coin][];
