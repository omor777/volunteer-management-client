import { useEffect, useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import Title from "../../components/Title";
import VolunteerCard from "../../components/VolunteerCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import TableLayout from "./TableLayout";

const NeedVolunteer = () => {
  const axiosCommon = useAxiosCommon();
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [volunteers, setVolunteers] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [count, setCount] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosCommon.get(
          `/all-volunteers?page=${currentPage}&size=${itemsPerPage}&search=${search}`
        );
        setIsPending(false);
        setVolunteers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [search, itemsPerPage, currentPage, axiosCommon]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosCommon.get(
          `/volunteers-count?search=${search}`
        );
        setCount(data.count);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [axiosCommon, search]);

  const totalPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearch(value);
    e.target.reset();
  };

  // const handleReset = () => {
  //   setSearch("");
  // };

  const handlePagination = (p) => {
    setCurrentPage(p);
  };

  const handlePrevButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextButton = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <Title title={"Need Volunteer Post"} />
      <div>
        <h1 className=" text-[clamp(26px,4vw,42px)] font-extrabold text-gray-900 dark:text-white   text-center capitalize max-w-3xl mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
            Explore
          </span>{" "}
          Our Volunteer <br /> Opportunities
        </h1>
        <p className="text-center mt-3 max-w-2xl mx-auto text-gray-800 dark:text-gray-400">
          Join us in creating meaningful change and making a difference where it
          matters most. Browse our volunteer opportunities today and take the
          first step towards creating a brighter tomorrow
        </p>
      </div>
      <div className="flex items-center  justify-between mt-16 flex-wrap gap-y-6">
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

        <button onClick={() => setLayout((prevLayout) => !prevLayout)}>
          {layout ? (
            <TfiLayoutGrid3Alt className="text-2xl dark:text-gray-300" />
          ) : (
            <HiBars4 className="text-3xl dark:text-gray-300" />
          )}
        </button>
      </div>
      {/* all volunteer */}
      <div className="mt-12">
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
          <>
            {layout ? (
              <TableLayout volunteers={volunteers} />
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {volunteers?.map((volunteer) => {
                    return (
                      <VolunteerCard
                        key={volunteer._id}
                        volunteer={volunteer}
                      />
                    );
                  })}
                </div>
                <nav className=" flex justify-center mt-14">
                  <ul className="inline-flex -space-x-px text-base h-10">
                    <li>
                      <button
                        onClick={handlePrevButton}
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Previous
                      </button>
                    </li>

                    {pages?.map((page) => {
                      return (
                        <li key={page}>
                          <button
                            onClick={() => handlePagination(page)}
                            type="button"
                            className={`flex items-center 
                            ${
                              currentPage === page
                                ? "bg-gradient-to-tr from-pink-500 to-purple-600 text-white dark:text-white hover:text-white"
                                : ""
                            } justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                          >
                            {page}
                          </button>
                        </li>
                      );
                    })}

                    <li>
                      <button
                        onClick={handleNextButton}
                        type="button"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NeedVolunteer;
