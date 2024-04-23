/* eslint-disable @next/next/no-img-element */
export default function Testimonials() {
  const listPartner = [
    {
      image:
        "https://res.cloudinary.com/di6go353l/image/upload/v1711281011/lrhfxmsnw8mjxkuljyxu.png",
    },
    {
      image:
        "https://res.cloudinary.com/di6go353l/image/upload/v1711281010/rdtpoicxhe5ww6efceql.png",
    },
    {
      image:
        "https://res.cloudinary.com/di6go353l/image/upload/v1711281009/cogwzf6iprjlu0hn0qaz.png",
    },
    {
      image:
        "https://res.cloudinary.com/di6go353l/image/upload/v1711281009/evwxcfmp2bolzs06acfp.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/di6go353l/image/upload/v1711281007/n73qglr5vemxhux6m0w1.jpg",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 mx-auto mb-32">
      <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
        <h2
          data-aos="zoom-y-out"
          className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200"
        >
          Ils nous font confiance, et vous ?
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
        {listPartner.map((item, index) => (
          <div
          key={index}
            data-aos="zoom-y-out"
            data-aos-delay="350"
            className="p-4 md:p-7 bg-gray-100 dark:bg-white rounded-lg dark:bg-slate-800"
          >
            <img className="h-24 w-auto object-contain" src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
