import { FaCalendarMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteer }) => {
  const { title, thumbnail, category, description, deadline } = volunteer || {};
//   console.log(thumbnail);
//   console.log(volunteer);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure>
        <img
          referrerPolicy="no-referrer"
          className="rounded-t-lg"
          src={
            "https://i.ibb.co/mCwfJXD/towfiqu-barbhuiya-w8p9c-QDLX7-I-unsplash.jpg"
          }
          alt=""
        />
      </figure>

      <div className="p-5 flex flex-col justify-between h-[320px]">
        <div>
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-4 text-gray-800 flex items-center gap-2 dark:text-gray-300">
            <span className="font-medium">Deadline:</span>

            {new Date(deadline).toLocaleDateString()}
            <span className="size-7  bg-violet-200/60 rounded-full flex items-center justify-center">
              <FaCalendarMinus className="text-primary" />
            </span>
          </p>
          <p className="mb-4 text-gray-800 flex items-center gap-2 dark:text-gray-300">
            <span className="font-medium">Category:</span> {category}
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description.length < 140
              ? description
              : description.substring(0, 140) + "..."}
          </p>
        </div>
        <div>
          <Link className="text-white inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            View Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
