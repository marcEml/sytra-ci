/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function ScannerView() {
  const [bagList, setBagList] = useState<number[]>([]);
  const [sellBagList, setSellBagList] = useState<number[]>([]);
  const [nationality, setNationality] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const scanFlag = useRef(false);

  const handleResult = (text: any) => {
    setName("Kouassi Yao Fieni");
    setNationality("Ivoirienne");
    setPhone("0797674576");
  };

  const handleBag = (numberToAdd: number) => {
    if (!scanFlag.current) {
      setBagList([...bagList, numberToAdd]);
      setSellBagList([...bagList, numberToAdd]);
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

  const [part, setPart] = useState(0);

  useEffect(() => {
    try {
      const localName = localStorage.getItem("name");
      const localPhone = localStorage.getItem("numero");
      const localNationality = localStorage.getItem("nationality");
      const localSellBagList = localStorage.getItem("sellBag");

      if (localName && localPhone && localNationality && localSellBagList) {
        setName(localName);
        setPhone(localPhone);
        setNationality(localNationality);
        setSellBagList(JSON.parse(localSellBagList));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleTransaction = () => {
    const data = {
      user: {
        nom: name,
        phone: phone,
        natilonality: nationality,
      },
      bags: sellBagList,
      amount: sellBagList.length * 60 * 1000,
    };

    localStorage.setItem("transaction", JSON.stringify(data));
  };

  return (
    <div className="mt-24 min-h-screen flex flex-col items-center text-center text-gray-900 p-4">
      {part == 0 ? (
        <div>
          <h1 className="text-2xl font-bold mb-6">
            Scannez la carte de l&apos;agriculteur
          </h1>
          <Scanner
            enabled={true}
            options={scannerOptions}
            onResult={(text, result) => handleResult(text)}
            onError={(error) => console.log(error?.message)}
          />
          <h1 className="text-left mt-11 text-xl">
            Nom:{" "}
            <span className="font-bold text-xl text-orange-600">{name}</span>
          </h1>
          <h1 className="text-left mt-4 text-xl">
            Numéro:{" "}
            <span className="font-bold text-xl text-orange-600">{phone}</span>
          </h1>
          <h1 className="text-left mt-4 text-xl">
            Nationalité:{" "}
            <span className="font-bold text-xl text-orange-600">
              {nationality}
            </span>
          </h1>
          <button
            onClick={() => {
              localStorage.setItem("name", name);
              localStorage.setItem("numero", phone);
              localStorage.setItem("nationality", nationality);
              setPart(1);
            }}
            className="px-11 py-2 rounded-lg bg-orange-600 text-lg text-white mt-11"
          >
            Suivant
          </button>
        </div>
      ) : part == 1 ? (
        <div>
          <h1 className="text-2xl font-bold mb-6">
            Scannez les différents sacs
          </h1>
          <Scanner
            options={scannerOptions}
            onResult={() => handleBag(60)}
            onError={(error) => console.log(error?.message)}
          />
          <div className="mt-11">
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
              onClick={() => setPart(0)}
              className="px-8 py-2 rounded-full bg-orange-600 text-lg text-white mt-11"
            >
              Précédent
            </button>
            <button
              onClick={() => {
                localStorage.setItem("sellBag", JSON.stringify(sellBagList));
                setPart(2);
              }}
              className="px-8 py-2 rounded-full bg-orange-600 text-lg text-white mt-11"
            >
              Suivant
            </button>
          </div>
        </div>
      ) : part == 2 ? (
        <div className="w-full">
          <h1 className="text-2xl text-left font-bold">Récapitulatif</h1>
          <div className="mt-6">
            <h1 className="text-left text-xl font-bold mb-4">
              Info sur l&apos;Agriculeur
            </h1>
            <p className="text-left text-xl">
              Nom: <span className="font-bold">{name}</span>
            </p>
            <p className="text-left text-xl">
              Numéro: <span className="font-bold">{phone}</span>
            </p>
            <p className="text-left text-xl">
              Nationalité: <span className="font-bold">{nationality}</span>
            </p>
          </div>
          <div className="mt-6">
            <h1 className="text-left text-xl font-bold mb-4">
              Info sur la commande
            </h1>
            {sellBagList.map((bag, index) => (
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
            <h1 className="text-left mt-6">Montant de la transaction</h1>
            <p className="text-left text-2xl font-bold">
              {sellBagList.length * 60 * 1000} Fcfa
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setPart(1)}
                className="px-8 py-2 rounded-full bg-orange-600 text-lg text-white mt-11"
              >
                Précédent
              </button>
              <Link href="/etat">
                <button
                  onClick={() => {
                    handleTransaction();
                  }}
                  className="px-8 py-2 rounded-full bg-orange-600 text-lg text-white mt-11"
                >
                  Valider la transaction
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
