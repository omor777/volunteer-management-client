import { useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";

import "./style.css";

const BeAVolunteer = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { user } = useAuth();

  const handleRequestVolunteer = async (e) => {
    e.preventDefault();
    const form = e.target;
    const organizer_name = form.organizer_name.value;
    const organizer_email = form.organizer_email.value;
    const volunteer_name = form.volunteer_name.value;
    const volunteer_email = form.volunteer_email.value;

    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteer = form.volunteer.value;
    const deadline = startDate;
    const thumbnail = form.thumbnail.value;
    const status = form.status.value;

    const volunteerReqData = {
      title,
      description,
      category,
      location,
      volunteer,
      deadline,
      thumbnail,
      status,
      organizer_info: {
        organizer_name,
        organizer_email,
      },
      volunteer_info: {
        volunteer_name,
        volunteer_email,
      },
    };

    console.log(volunteerReqData);
  };
  return (
    <section className="my-16 container">
      <div className=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 max-w-5xl border border-neutral-100">
        <h2 className="text-lg font-semibold text-gray-700 text-center mb-10 mt-3 uppercase dark:text-white tracking-wide">
          Be a Volunteer
        </h2>
        <form onSubmit={handleRequestVolunteer}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="organizer_name"
              >
                Organizer Name
              </label>
              <input
                id="organizer_name"
                type="text"
                name="organizer_name"
                defaultValue={user?.displayName}
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="organizer_email"
              >
                Organizer Email
              </label>
              <input
                id="organizer_email"
                type="email"
                name="organizer_email"
                defaultValue={user?.email}
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="volunteer_name"
              >
                Volunteer Name
              </label>
              <input
                id="volunteer_name"
                type="text"
                name="volunteer_name"
                defaultValue={user?.displayName}
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="volunteer_email"
              >
                Volunteer Email
              </label>
              <input
                id="volunteer_email"
                type="email"
                name="volunteer_email"
                defaultValue={user?.email}
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="title"
              >
                Tittle
              </label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="tittle"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="description"
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                name="description"
                placeholder="description"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="category"
              >
                Category
              </label>
              <input
                id="category"
                type="text"
                name="category"
                placeholder="category"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="location"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="location"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="volunteer"
              >
                No. Of Volunteer
              </label>
              <input
                id="volunteer"
                type="number"
                name="volunteer"
                readOnly
                placeholder="No of volunteer needed"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200 block"
                htmlFor="deadline"
              >
                Deadline
              </label>
              <DatePicker
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring "
                showIcon
                readOnly
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="status"
              >
                Status
              </label>
              <input
                id="status"
                type="url"
                name="status"
                placeholder="status"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="thumbnail"
              >
                Thumbnail
              </label>
              <input
                id="thumbnail"
                type="url"
                name="thumbnail"
                placeholder="thumbnail"
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 uppercase">
              request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BeAVolunteer;
