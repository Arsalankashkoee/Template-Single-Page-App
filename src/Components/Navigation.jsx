import { NavLink, useParams } from "react-router-dom";

const Navigation = () => {
  const params = useParams();
  console.log(params);

  return (
    <nav className="bg-violet-200 rounded-lg shadow-lg p-3">
      <ul className="flex items-center justify-center gap-5  ">
        <li className="py-1 px-3 rounded-lg">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "text-violet-700" : null
            }
          >
            home
          </NavLink>
        </li>
        <li className="py-1 px-3 rounded-lg">
          <NavLink
            to="/about-us"
            className={(navData) =>
              navData.isActive ? "text-violet-700" : null
            }
          >
            about-us
          </NavLink>
        </li>
        <li className="py-1 px-3 rounded-lg">
          <NavLink
            to="/profile"
            className={(navData) =>
              navData.isActive ? "text-violet-700" : null
            }
          >
            profile
          </NavLink>
        </li>
        <li className="py-1 px-3 rounded-lg">
          <NavLink
            to="/blogs"
            className={(navData) =>
              navData.isActive ? "text-violet-700" : null
            }
          >
            blog
          </NavLink>
        </li>
        <li className="py-1 px-3 rounded-lg">
          <NavLink
            to="/posts"
            className={(navData) =>
              navData.isActive ? "text-violet-700" : null
            }
          >
            posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
