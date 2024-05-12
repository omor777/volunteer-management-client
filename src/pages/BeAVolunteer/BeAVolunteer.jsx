import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";

import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import "./style.css";

const BeAVolunteer = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const data = useLoaderData();
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();

  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["single-volunteer"],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get(`volunteers/s/${id}`);

        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  // console.log(error);

  const {
    _id,
    name,
    email,
    deadline,
    category,
    title,
    description,
    thumbnail,
    location,
    volunteer,
  } = data || {};

  useEffect(() => {
    setStartDate(deadline);
  }, [deadline]);

  console.log(email);

  const handleRequestVolunteer = async (e) => {
    e.preventDefault();
    const form = e.target;
    const organizer_name = form.organizer_name.value;
    const organizer_email = form.organizer_email.value;

    const volunteer_name = form.volunteer_name.value;
    const volunteer_email = form.volunteer_email.value;

    // validation
    if (organizer_email === volunteer_email) {
      return toast.error("Action not permitted!");
    }

    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteer = parseInt(form.volunteer.value);
    const deadline = startDate;
    const thumbnail = form.thumbnail.value;
    const suggestion = form.suggestion.value;

    const volunteerReqData = {
      postId: _id,
      title,
      description,
      category,
      location,
      volunteer,
      deadline,
      thumbnail,
      suggestion,
      organizer_info: {
        organizer_name,
        organizer_email,
      },
      volunteer_info: {
        volunteer_name,
        volunteer_email,
      },
      status: "requested",
    };

    // console.log(volunteerReqData);

    try {
      const { data } = await axiosCommon.post("/requests", volunteerReqData);

      console.log(data);
      if (data.insertedId) {
        toast.success("Request successful");
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error(error?.response?.data);
      }
      console.error(error);
    }
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div>
          <svg
            aria-hidden="true"
            className="inline w-8  h-8 md:h-14 md:w-14 text-gray-200 animate-spin dark:text-gray-600 fill-pink-500"
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
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-800 px-4 lg:px-0 ">
      <div className="max-w-4xl px-4 pt-8 pb-4 md:p-8 mx-auto  border border-slate-300 rounded-md">
        <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl  text-center capitalize">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
            Be a
          </span>{" "}
          volunteer
        </h1>

        <form onSubmit={handleRequestVolunteer}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="w-full">
              <label
                htmlFor="organizer_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Organizer Name
              </label>
              <input
                type="text"
                name="organizer_name"
                id="organizer_name"
                readOnly
                defaultValue={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="name"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="organizer_email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Organizer Email
              </label>
              <input
                type="email"
                name="organizer_email"
                id="organizer_email"
                readOnly
                defaultValue={email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="@email"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="volunteer_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Volunteer Name
              </label>
              <input
                type="email"
                name="volunteer_name"
                id="volunteer_name"
                readOnly
                defaultValue={user?.displayName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="@email"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="volunteer_email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Volunteer Email
              </label>
              <input
                type="email"
                name="volunteer_email"
                id="volunteer_email"
                readOnly
                defaultValue={user?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="@email"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={title}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="title"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                defaultValue={description}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="description"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                defaultValue={category}
                name="category"
                disabled
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white disabled:dark:bg-gray-700 disabled:dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              >
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social-Service">Social Service</option>
                <option value="Animal-Welfare">Animal Welfare</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                defaultValue={location}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="location"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="volunteer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                No. Of Volunteer
              </label>
              <input
                type="number"
                name="volunteer"
                id="volunteer"
                defaultValue={volunteer}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="No of volunteer needed"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="volunteer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Deadline
              </label>
              <DatePicker
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                readOnly
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="suggestion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Suggestion
              </label>
              <input
                type="text"
                name="suggestion"
                id="suggestion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="suggestion here"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="thumbnail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Thumbnail
              </label>
              <input
                type="url"
                name="thumbnail"
                id="thumbnail"
                defaultValue={thumbnail}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="thumbnail"
              />
            </div>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center  mb-2 w-full uppercase text-sm transition-colors duration-300"
            >
              request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BeAVolunteer;
