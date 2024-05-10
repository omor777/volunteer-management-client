import { useQuery } from "@tanstack/react-query";
import VolunteerCard from "../../components/VolunteerCard";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const NeedVolunteer = () => {
  const axiosCommon = useAxiosCommon();

  const {
    data: volunteers,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["volunteers"],
    queryFn: async () => {
      try {
        const { data } = await axiosCommon.get("/volunteers");
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="container">
      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-violet-500">
            Better Data
          </span>{" "}
          Scalable AI
        </h1>

        <p className="max-w-2xl mx-auto text-center">
          Discover meaningful ways to make a difference in your community by
          exploring our Need Volunteer page. Browse through a variety of
          volunteer opportunities
        </p>
      </div>
      {/* all volunteer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {volunteers?.map((volunteer) => {
          return <VolunteerCard key={volunteer._id} volunteer={volunteer} />;
        })}
      </div>
    </div>
  );
};

export default NeedVolunteer;
