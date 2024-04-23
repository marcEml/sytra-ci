/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export default function TimeLineView() {
  const [bag, setbag] = useState([]);
  const [transaction, setTransaction]: any = useState();

  useEffect(() => {
    try {
      const localBagList = localStorage.getItem("bag");
      const localTransaction = localStorage.getItem("transaction");

      if (localBagList) {
        setbag(JSON.parse(localBagList));
      }

      if (localTransaction) {
        setTransaction(JSON.parse(localTransaction));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ol className="ml-6 mb-5 mt-24 p-4 relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-3">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Récolte{" "}
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
            Latest
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          dernière mise à jour : 23-04-2024
        </time>
        {bag.map((bag, index) => (
          <div
            className="mt-2 w-full flex gap-8 items-center gap-4 px-4 py-2 bg-gray-100 rounded-xl"
            key={index}
          >
            <img
              className="h-9"
              src="https://img.icons8.com/pulsar-color/48/chocolate-tree.png"
              alt="chocolate-tree"
            />
            <p className="text-gray-700 font-bold">
              Sac {index + 1} -- Poids:{" "}
              <span className="text-orange-600">{bag}</span>
            </p>
          </div>
        ))}
      </li>
      <li className="mb-10 ms-3">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Transport{" "}
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"></span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          dernière mise à jour : 23-04-2024
        </time>
        {transaction != null ? (
          <div>
            {transaction.bags.map((bag: any, index: any) => (
              <div
                className="mt-2 w-full flex gap-8 items-center gap-4 px-4 py-2 bg-gray-100 rounded-xl"
                key={index}
              >
                <img
                  className="h-9"
                  src="https://img.icons8.com/pulsar-color/48/chocolate-tree.png"
                  alt="chocolate-tree"
                />
                <p className="text-gray-700 font-bold">
                  Sac {index + 1} -- Poids:{" "}
                  <span className="text-orange-600">{bag}</span>
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Vente
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          dernière mise à jour : 23-04-2024
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Agriculteur.
        </p>
        {transaction != null ? (
          <div>
            <p className="">{transaction.user.nom}</p>
            <p className="">
              {transaction.user.phone} - {transaction.user.natilonality}
            </p>
          </div>
        ) : null}
        <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Marchandise.
        </p>
        {transaction != null ? (
          <div>
            {transaction.bags.map((bag: any, index: any) => (
              <div
                className="mt-2 w-full flex gap-8 items-center gap-4 px-4 py-2 bg-gray-100 rounded-xl"
                key={index}
              >
                <img
                  className="h-9"
                  src="https://img.icons8.com/pulsar-color/48/chocolate-tree.png"
                  alt="chocolate-tree"
                />
                <p className="text-gray-700 font-bold">
                  Sac {index + 1} -- Poids:{" "}
                  <span className="text-orange-600">{bag}</span>
                </p>
              </div>
            ))}
            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Montant de la transaction
            </p>
            <p className="text-2xl font-bold">{transaction.amount}</p>
          </div>
        ) : null}
      </li>
      <li className="ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Etape suivante
        </h3>
      </li>
    </ol>
  );
}
