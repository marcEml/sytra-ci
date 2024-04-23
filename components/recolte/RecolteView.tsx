/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, useEffect } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function RecolteView() {
  const [bagList, setBagList] = useState<number[]>([]);
  const scanFlag = useRef(false); // Add a ref to track whether a bag has already been added

  useEffect(() => {
    try {
      const localBagList = localStorage.getItem("bag");
      if (localBagList) {
        setBagList(JSON.parse(localBagList));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleBag = (numberToAdd: number) => {
    if (!scanFlag.current) {
      setBagList([...bagList, numberToAdd]);
      scanFlag.current = true; // Set the flag to true after adding a bag
      setTimeout(() => {
        scanFlag.current = false; // Reset the flag after a delay
      }, 2000);
    }
  };

  const scannerOptions = {
    delayBetweenScanSuccess: 2000,
    delayBetweenScanAttempts: 2000,
  };

  const handleSave = () => {
    localStorage.setItem("bag", JSON.stringify(bagList));
  };

  const handleClear = () => {
    localStorage.clear();
    setBagList([]);
  };

  return (
    <div className="flex flex-col mt-24 items-center px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Scannez les différents sacs</h1>
      <Scanner
        options={scannerOptions}
        onResult={() => handleBag(60)}
        onError={(error) => console.log(error?.message)}
      />
      <div className="mt-11 w-full">
        {bagList.map((bag, index) => (
          <div
            className="mt-2 w-full flex gap-8 items-center gap-4 px-4 py-2 bg-gray-200 rounded-xl"
            key={index}
          >
            <img
              className="h-9"
              src="https://img.icons8.com/pulsar-color/48/chocolate-tree.png"
              alt="chocolate-tree"
            />
            <p className="text-gray-700 font-bold">
              Sac {index + 1} -- Poids: {bag}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => handleSave()}
          className="px-8 py-2 rounded-full bg-orange-600 text-lg text-white mt-11"
        >
          valider
        </button>
        <button
          onClick={() => handleClear()}
          className="px-8 py-2 rounded-full bg-orange-600 text-lg text-white mt-11"
        >
          Effacer
        </button>
      </div>
    </div>
  );
}
