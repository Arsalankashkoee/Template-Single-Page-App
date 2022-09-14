import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Download from "../Components/Download";

const Profile = () => {
  return (
    <div>
      <p className="mt-3">this is profile page</p>
      <aside className="bg-gray-200 rounded-lg shadow-lg p-2 my-5">
        <ul className="flex items-center gap-x-7">
          <li>
            {/* <Link to="/profile/dashboard">Dashboard</Link> */}
            <NavLink
              to="/profile/dashboard"
              className={(navData) =>
                navData.isActive ? "text-blue-500" : null
              }
            >
              Dashboard
            </NavLink>
          </li>
          
          <li>
            {/* <Link to="/profile/download">Download</Link> */}
            <NavLink
              to="/profile/download"
              className={(navData) =>
                navData.isActive ? "text-blue-500" : null
              }
            >
              Download
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* can use Outlet component and transfer this routes to between profile components as child */}
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="download" element={<Download />} />
      </Routes>
    </div>
  );
};

export default Profile;
