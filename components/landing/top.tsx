/* eslint-disable @next/next/no-img-element */

"use client";

export default function Top() {
  return (
    <div className="max-w-[85rem] mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2
        data-aos="zoom-y-out"
        className="h2 mb-20 dark:text-white text-center"
      >
        Votre profil
      </h2>

      <div className="flex flex-col justify-between lg:flex-row mx-auto max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="lg:rounded-l-lg rounded-t-lg max-h-[600px] min-w-[300px]"
            src="https://img.freepik.com/free-photo/portrait-african-senior-man_23-2148833070.jpg?t=st=1713800392~exp=1713803992~hmac=d18e82618bcb1a4e4153fb621c48ecd60d544eb0ef8dc83c01e2b1b6ab048785&w=826"
            alt=""
          />
        </a>
        <div className="p-5 flex flex-col justify-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Koffi Kouadio Jean Fieni
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Numéro de carte: CI000TZ75GD
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Profession: Agriculteur
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Date de naissance: 20-05-1970
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Sexe: Masculin, Taille: 1,80
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Nationalité: Ivoirienne
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lieu de naissance: Koffikro
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Date d&apos;expiration de la carte: 20-05-2030
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Date d&apos;émission: 20-05-2022
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            NNI: 76856458577
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Informations sur la parcelle
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lieu: Koffikro
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Superficie: 30 hectare
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Ancienneté: 6 ans
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Estimation de la production: 30 Tonnes / année
          </p>
        </div>
      </div>

      <div className="flex gap-8 justify-center">
        <div className="w-1/3">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
