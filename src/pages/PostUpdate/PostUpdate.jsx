import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import "./style.css";

const PostUpdate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  const { data } = useQuery({
    queryKey: ["post-update"],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get(`volunteers/s/${id}`);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const navigate = useNavigate();

  const {
    _id,
    name,
    email,
    title,
    description,
    category,
    location,
    volunteer,
    deadline,
    thumbnail,
  } = data || {};

  useEffect(() => {
    setStartDate(deadline);
  }, [deadline]);

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteer = form.volunteer.value;
    const deadline = startDate;
    const thumbnail = form.thumbnail.value;

    const updateVolunteer = {
      name,
      email,
      title,
      description,
      category,
      location,
      volunteer: parseInt(volunteer),
      deadline,
      thumbnail,
    };

    // console.log(updateVolunteer);

    try {
      const { data } = await axiosCommon.put(
        `/volunteers/${_id}`,
        updateVolunteer
      );

      //   console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Your post updated!");
        navigate("/manage-my-post");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 px-4 lg:px-0 ">
      <div className="max-w-4xl px-4 pt-8 pb-4 md:p-8 mx-auto  border border-slate-300 rounded-md">
        <h1 className="mb-8 text-[clamp(30px,5vw,48px)] font-extrabold text-gray-900 dark:text-white   text-center capitalize">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
            Update
          </span>{" "}
          Post
        </h1>

        <form onSubmit={handleUpdatePost}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                readOnly
                defaultValue={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="name"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                readOnly
                defaultValue={email}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
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
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="thumbnail"
            />
          </div>
          <div className="pt-8">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center  mb-2 w-full uppercase text-sm transition-colors duration-300"
            >
              update post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostUpdate;
