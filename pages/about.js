import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLaptop, FaTwitter } from "react-icons/fa";
import { getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

function about({ topics }) {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      <Navbar topics={topics} />
      <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <h2 className="text-3xl font-semibold text-gray-700 py-2 dark:text-gray-200">
        Who are we?
        </h2>
        <p className="text-gray-600 mt-4 dark:text-indigo-200">
        We are a dynamic duo of young individuals driven by a shared mission to make a positive impact on our community. we have created this all-in-one platform to provide our readers with an optimal experience for their overall growth.
        </p>
        <p className="text-gray-600 mt-4 dark:text-indigo-200">
        Join us on this exciting journey as we navigate the intricacies of life, uncover solutions, and share our collective wisdom. Together, let's embark on a quest to create positive change and contribute to the growth and well-being of our community.
        </p>
        <div className="h-64 w-full justify-center flex">
          <img src="/about.png" className="h-64" />
        </div>

        <div className="text-center pt-8">
          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-indigo-600">
            <FaLaptop />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://surykantkasare.github.io/portfolio/"
            >
              Surykant
            </a>
          </button>

          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-indigo-600">
            <FaLaptop />
            <a
              className="twitter-follow-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/abhi9146"
            >
              Abhishek
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about