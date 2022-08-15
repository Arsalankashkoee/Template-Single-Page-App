import { Routes, Route } from "react-router-dom";
// import AboutUsPage from "./Pages/AboutUsPage";
// import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import routes from "./Routes";
// import Profile from "./Pages/Profile";

//1. home => /
//2. about-us => ' /about-us '

function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
          {/* <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/profile" element={<Profile />} /> */}
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
