import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

export default function addpost({ topics }) {
  return (
        <div className=" min-h-screen relative bg-white dark:bg-gray-900">
          <Navbar topics={topics} />
          <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <form method="POST" action="action.php">
                    <div className="mb-4">
                            <label className="text-xl text-gray-600">Topic Name</label>
                            <input type="text" className="border-2 border-gray-300 p-2 w-full" name="topic" id="topic" value="" required/>
                        </div>

                        <div className="mb-4">
                            <label className="text-xl text-gray-600">Title</label>
                            <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" id="title" value="" required/>
                        </div>

                        <div className="mb-4">
                            <label className="text-xl text-gray-600">Description</label>
                            <input type="text" className="border-2 border-gray-300 p-2 w-full" name="description" id="description" placeholder="(Optional)"/>
                        </div>

                        <div className="flex p-1 gap-5 ">
                            <select className="border-2 border-gray-300 border-r p-2" name="action">
                                <option>Save and Publish</option>
                                <option>Save Draft</option>
                            </select>
                            <button role="submit" className="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Submit</button>
                        </div>
                    </form>
                </div>
              </div>
          </div>
       </div>
          <Footer />
        </div>
      );
}
