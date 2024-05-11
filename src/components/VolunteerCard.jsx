import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteer }) => {
  const { _id, title, thumbnail, category, description, deadline } =
    volunteer || {};
  //   console.log(thumbnail);
  //   console.log(volunteer);
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure className="relative">
        <img
          referrerPolicy="no-referrer"
          className="rounded-t-lg"
          src={thumbnail}
          alt=""
        />
        <span className=" absolute text-gray-100 text-xs tracking-wide font-medium  bottom-3 left-3 rounded bg-gradient-to-tr from-purple-500 to-pink-500 px-2 py-1.5 shadow-md">
          {category}
        </span>
      </figure>

      <div className="p-5 flex flex-col justify-between h-[286px]">
        <div>
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 text-gray-800 flex items-center gap-2 dark:text-gray-300">
            <span className="font-medium">Deadline:</span>

            <span className="text-sm">
              {new Date(deadline).toLocaleDateString()}
            </span>
          </p>

          <p className=" mt-4 font-normal text-gray-700 dark:text-gray-400">
            {description.length < 140
              ? description
              : description.substring(0, 140) + "..."}
          </p>
        </div>
        <div className="">
          <Link
            to={`/volunteer-post-details/${_id}`}
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 w-full block text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
