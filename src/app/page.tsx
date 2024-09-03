"use client";
import { useEffect, useState } from "react";
import { CoinFlip } from "../components/coinflip";
import Prob from "@/components/probability";

export default function Home() {
  const [state, setState] = useState<{ probability: string }[]>();
  const [coinflip, setCoinflip] = useState<boolean[]>([]);

  useEffect(() => {
    setInterval(() => {
      const randomVal = Math.random();
      const lessThanHalf = randomVal < 0.5;

      setState((prevSt) => [
        ...(prevSt ?? []),
        {
          probability: randomVal.toString(),
        },
      ]);

      setCoinflip((prev) => [...prev, lessThanHalf]);
    }, 3000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center uppercase mb-4 underline">Coin tosser</h1>
      <div className="flex gap-2">
        <CoinFlip results={coinflip} />
        <Prob items={state!} />
      </div>
    </main>
  );
}
