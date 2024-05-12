import "react-tabs/style/react-tabs.css";
import MyPost from "./MyPost";
import RequestPost from "./RequestPost";

//get user info from local storage

const ManageMyPost = () => {
  //   console.log(volunteers);

  return (
    <div className="container">
      <div>
        <MyPost />
      </div>
      <div className="mt-20">
        <RequestPost />
      </div>
    </div>
  );
};

export default ManageMyPost;
