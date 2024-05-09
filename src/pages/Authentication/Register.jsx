import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { setDataToLs } from "../../utils/localStorage";

const Register = () => {
  const { user, setUser, createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   console.log(errors);

  const onSubmit = async (data) => {
    const { name, email, password, photoUrl } = data || {};
    try {
      const { user } = await createUser(email, password);

      const userInfo = {
        email: name,
        photo: photoUrl,
      };
      setDataToLs(userInfo);

      //update user profile
      await updateProfile(user, {
        displayName: name,
        photoURL: photoUrl,
      });

      setUser({ ...user, displayName: name, photoURL: photoUrl });

      toast.success("Registration successful!");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mt-20">
      <div className="flex w-full max-w-2xl mx-auto overflow-hidden bg-white rounded-md shadow-md  lg:max-w-4xl border border-gray-50">
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p
            style={{ fontSize: "25px" }}
            className="mt-3 text-center text-gray-600 mb-8 capitalize font-bold"
          >
            Register Now
          </p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                autoComplete="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                {...register("name", {
                  required: "Name is required!",
                })}
                placeholder="Name"
              />
              {errors && (
                <small className="text-error ml-1">
                  {errors?.name?.message}
                </small>
              )}
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                autoComplete="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                {...register("email", { required: "Email is required!" })}
                placeholder="@Email"
              />
              {errors && (
                <small className="text-error ml-1">
                  {errors?.email?.message}
                </small>
              )}
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="photoUrl"
              >
                PhotoUrl
              </label>
              <input
                id="photoUrl"
                placeholder="photo url"
                autoComplete="photoUlr"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="url"
                {...register("photoUrl")}
              />
              {errors && <small className="text-error ml-1">{""}</small>}
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="password"
                >
                  Password
                </label>
              </div>

              <input
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                {...register("password", {
                  validate: {
                    length: (value) => {
                      return value.length > 5
                        ? true
                        : "Password  must be at least 6 character";
                    },
                    lowercase: (v) => {
                      return (
                        /^(?=.*[a-z]).+$/.test(v) ||
                        "Password must have an lowercase letter"
                      );
                    },
                    uppercase: (v) => {
                      return (
                        /^(?=.*[A-Z]).+$/.test(v) ||
                        "Password must have an uppercase letter"
                      );
                    },
                  },
                })}
              />
              {errors && (
                <small className="text-error ml-1">
                  {errors?.password?.message}
                </small>
              )}
            </div>
            <div className="mt-6 ">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 uppercase"
              >
                register
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or login
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
