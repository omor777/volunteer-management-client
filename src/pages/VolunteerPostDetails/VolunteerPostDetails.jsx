import { useLoaderData } from "react-router-dom";

const VolunteerPostDetails = () => {
  const data = useLoaderData();
  const {
    title,
    thumbnail,
    description,
    deadline,
    category,
    location,
    volunteer,
  } = data || {};
  console.log(data);
  return (
    <div className="container">
      <div className="max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <figure>
          <img
            className="rounded-t-lg w-full object-cover object-center h-[380px]"
            src={thumbnail}
            alt=""
          />
        </figure>
        <div className="p-5">
          <div className="flex items-center justify-between flex-wrap mb-4">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl  text-center capitalize">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
                {title}
              </span>{" "}
            </h1>
          </div>

          {/*        
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" /> */}
          <div className="space-y-3">
            <p className="dark:text-gray-300 text-gray-700 capitalize">
              <span className="text-lg font-medium">Category:</span> {category}
            </p>
            <p className="dark:text-gray-300 text-gray-700 capitalize">
              <span className="text-lg font-medium ">Location:</span> {location}
            </p>
            <p className="dark:text-gray-300 text-gray-700 capitalize flex items-center gap-2">
              <span className="text-lg font-medium ">volunteer needed:</span>{" "}
              <span className="bg-gradient-to-br from-purple-500 to-pink-600 text-sm size-7 rounded-full grid place-items-center font-bold text-white">
                {volunteer}
              </span>
            </p>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-4">
            <span className="font-medium dark:text-gray-300">Description:</span>{" "}
            {description}
          </p>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex items-center justify-between flex-wrap">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase"
            >
              Be a volunteer
            </button>
            <p className="dark:text-white text-gray-700 text-sm font-semibold border border-pink-500 px-3 py-1 rounded-full">
              {new Date(deadline).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
VolunteerPostDetails;
export default VolunteerPostDetails;
