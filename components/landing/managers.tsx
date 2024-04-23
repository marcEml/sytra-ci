/* eslint-disable @next/next/no-img-element */
import "@/app/css/additional-styles/utility-patterns.css";
import Link from "next/link";

export default function Managers() {
  const managers = [
    {
      name: "Mentorat",
      link_image:
        "https://plus.unsplash.com/premium_photo-1661766444310-014137fc422c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Le corro",
      link_image:
        "https://plus.unsplash.com/premium_photo-1681494154423-93ba20262dd4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Opportunités",
      link_image:
        "https://images.unsplash.com/photo-1620915283474-18ef99f53a5f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-[#101827]">
      <div className="max-w-[1200px] mx-auto text-center py-24 px-14 md:pb-20">
        <p
          data-aos="zoom-y-out"
          data-aos-delay="150"
          className="text-orange-600 text-left mb-5"
        >
          Que gagnez vous ?
        </p>
        <h2
          data-aos="zoom-y-out"
          data-aos-delay="350"
          className="h1 text-white text-left dark:text-white"
        >
          Avantages de la 2ALSY
        </h2>
        <p
          data-aos="zoom-y-out"
          data-aos-delay="650"
          className="text-left mt-5 text-gray-200 max-w-xl"
        >
          Notre association est là pour vous accompagner tout au long de votre
          parcours à l’ESATIC sur divers points.
        </p>
        <div className="mt-14 mb-12 grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {managers.map((manager, index) => (
            <div
              data-aos="zoom-y-out"
              data-aos-delay="850"
              key={index}
              className="flex flex-col items-center space-y-3"
            >
              <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="h-[250px] w-full object-cover"
                    src={manager.link_image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-orange-600 dark:text-white">
                      {manager.name}
                    </h5>
                  </a>
                  <p className="mb-3 text-justify font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
