import { FC } from "react";

type CoinFlipProps = {
  results: boolean[];
};

export const CoinFlip: FC<CoinFlipProps> = ({ results }) => (
  <div className="flex flex-col gap-2">
    {results.map((item, index) => (
      <div key={index}>{item ? "heads" : "tails"}</div>
    ))}
  </div>
);
