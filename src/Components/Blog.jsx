import { Link, useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const Blog = () => {
  const { id } = useParams();
  //   console.log(id);

  const location = useLocation();

  let navigate = useNavigate();

  // queryString
  const parsed = queryString.parse(location.search);
  console.log(parsed);

  return (
    <div>
      <p>blog detail - {id}</p>
      <button className="bg-violet-300 py-2 px-3 rounded-lg shadow-lg text-violet-900">
        {/* <Link to="/blogs">go to blog page</Link> */}
        <Link to={`/blogs/${parseInt(id) + 1}`}>go to next blog page</Link>
      </button>

      <div>Path is : {location.pathname}</div>
      <div>Search is : {location.search}</div>

      <button
        className="bg-violet-300 py-2 px-3 rounded-lg shadow-lg text-violet-900"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default Blog;
