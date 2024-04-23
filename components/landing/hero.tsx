/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden h-[750px] object-cover before:absolute before:top-0 before:start-1/2 before:bg-[url('https://res.cloudinary.com/di6go353l/image/upload/v1713799566/aeuypvweukvyjvlwfwhk.jpg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="mt-24">
            <h1
              data-aos="zoom-y-out"
              data-aos-delay="200"
              className="[text-shadow:_2px_4px_4px_rgb(0_0_0_/_40%)] block flex flex-col text-4xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"
            >
              Bienvenue
              <span>Sur votre espace Agriculteur</span>
            </h1>
            <div className="flex gap-4">
              <div
                data-aos="zoom-y-out"
                data-aos-delay="550"
                className="mt-7 grid gap-3 sm:inline-flex"
              >
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-orange-600 hover:bg-gray-800"
                >
                  <span>Voir l&apos;actualité</span>
                  <svg
                    className="w-3 h-3 fill-white shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* <div
            className="relative ms-4"
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-delay="700"
          >
            <img
              className="w-full h-[37em] object-cover rounded-md"
              src="https://res.cloudinary.com/di6go353l/image/upload/v1711192486/rf8gwczyiyncywa5dpxm.jpg"
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

            <div className="absolute bottom-0 start-0">
              <svg
                className="w-2/3 ms-auto h-auto text-white dark:text-slate-900"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
