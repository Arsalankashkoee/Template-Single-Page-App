import { Link } from "react-router-dom";

const NotFoundPage = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <p>
        404 <br /> Page Not Found
      </p>
      <button className="bg-violet-300 py-2 px-3 rounded-lg shadow-lg text-violet-900">
        <Link to="/">go to home page</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
