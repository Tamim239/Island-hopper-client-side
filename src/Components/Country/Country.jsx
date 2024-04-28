import { Link } from "react-router-dom";

export const Country = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 ">
      <Link to="/countryCard/Bangladesh">
        <section className="p-2">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-2 space-y-2 rounded-md shadow-2xl lg:h-full lg:p-2 dark:bg-gray-50 dark:text-gray-800">
              <img
                src="https://iili.io/JUO6cHQ.jpg"
                alt=""
                className="w-32 h-32 rounded-full dark:bg-gray-500"
              />
              <h1 className="text-xl font-bold">Bangladesh</h1>
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                A densely populated country in South Asia, known for its lush
                greenery, vibrant culture, and the worlds largest river delta,
                the Sundarbans.
              </blockquote>
            </div>
          </div>
        </section>
      </Link>
      <Link to="/countryCard/Thailand">
        <section className="p-2">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-2 space-y-2 rounded-md shadow-2xl lg:h-full lg:p-2 dark:bg-gray-50 dark:text-gray-800">
              <img
                src="https://iili.io/JUOinZ7.jpg"
                alt=""
                className="w-32 h-32 rounded-full dark:bg-gray-500"
              />
              <h1 className="text-xl font-bold">Thailand</h1>
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                A popular tourist destination in Southeast Asia, famous for its
                rich history, stunning beaches, ancient temples, and vibrant
                street food culture.
              </blockquote>
            </div>
          </div>
        </section>
      </Link>
      <Link to="/countryCard/Cambodia">
        <section className="p-2">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-2 space-y-2 rounded-md shadow-2xl lg:h-full lg:p-2 dark:bg-gray-50 dark:text-gray-800">
              <img
                src="https://iili.io/JUOiHCX.jpg"
                alt=""
                className="w-32 h-32 rounded-full dark:bg-gray-500"
              />
              <h1 className="text-xl font-bold">Cambodia</h1>
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                A country known for its rich history, including the magnificent
                Angkor Wat temple complex, as well as its lush landscapes and
                warm hospitality.
              </blockquote>
            </div>
          </div>
        </section>
      </Link>
      <Link to="/countryCard/Vietnam">
        <section className="p-2">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-2 space-y-2 rounded-md shadow-2xl lg:h-full lg:p-2 dark:bg-gray-50 dark:text-gray-800">
              <img
                src="https://iili.io/JUOPNEu.jpg"
                alt=""
                className="w-32 h-32 rounded-full dark:bg-gray-500"
              />
              <h1 className="text-xl font-bold">Vietnam</h1>
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                A Southeast Asian country known for its picturesque landscapes,
                rich history, delicious cuisine, and resilient people.
              </blockquote>
            </div>
          </div>
        </section>
      </Link>
      <Link to="/countryCard/Malaysia">
        <section className="p-2">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-2 space-y-2 rounded-md shadow-2xl lg:h-full lg:p-2 dark:bg-gray-50 dark:text-gray-800">
              <img
                src="https://iili.io/JUO6y0b.jpg"
                alt=""
                className="w-32 h-32 rounded-full dark:bg-gray-500"
              />
              <h1 className="text-xl font-bold">Malaysia</h1>
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                A diverse country known for its multicultural society, stunning
                natural landscapes, bustling cities, and delicious cuisine.
              </blockquote>
            </div>
          </div>
        </section>
      </Link>
      <Link to="/countryCard/Indonesia">
        <section className="p-2">
          <div className="container max-w-xl mx-auto">
            <div className="flex flex-col items-center w-full p-2 space-y-2 rounded-md shadow-2xl lg:h-full lg:p-2 dark:bg-gray-50 dark:text-gray-800">
              <img
                src="https://iili.io/JUO68xt.jpg"
                alt=""
                className="w-32 h-32 rounded-full dark:bg-gray-500"
              />
              <h1 className="text-xl font-bold">Indonesia</h1>
              <blockquote className="max-w-lg text-lg italic font-medium text-center">
                The worlds largest archipelago nation, comprising thousands of
                islands, known for its diverse cultures, stunning beaches, and
                rich biodiversity.
              </blockquote>
            </div>
          </div>
        </section>
      </Link>
    </div>
  );
};
