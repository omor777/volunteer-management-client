import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import VolunteerCard from "../../components/VolunteerCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const NeedVolunteer = () => {
  const axiosCommon = useAxiosCommon();
  const [search, setSearch] = useState("");
  const { data: volunteers, isPending } = useQuery({
    queryKey: ["volunteers", search],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get(
          `/all-volunteers?search=${search}`
        );
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearch(value);
    e.target.reset();
  };

  const handleReset = () => {
    setSearch("");
  };

  return (
    <div className="container">
      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-500">
            Better Data
          </span>{" "}
          Scalable AI
        </h1>

        <p className="max-w-2xl mx-auto text-center dark:text-gray-400">
          Discover meaningful ways to make a difference in your community by
          exploring our Need Volunteer page. Browse through a variety of
          volunteer opportunities
        </p>
      </div>
      <div className="flex items-center  justify-between mt-10 flex-wrap gap-y-6">
        <form onSubmit={handleSearch} className="w-full sm:max-w-sm">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              name="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
              placeholder="Search Mockups, Logos..."
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-tr from-purple-600 to-pink-500  focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>

        <button
          type="button"
          onClick={handleReset}
          className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 mx-auto sm:mx-0"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
            Reset
          </span>
        </button>
      </div>
      {/* all volunteer */}
      <div className="mt-10">
        {isPending ? (
          <div className="flex justify-center mt-20">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 md:w-14 md:h-14 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {volunteers?.map((volunteer) => {
              return (
                <VolunteerCard key={volunteer._id} volunteer={volunteer} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NeedVolunteer;
