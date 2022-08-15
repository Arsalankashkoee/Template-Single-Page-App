import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div>
      <p>This is about-us page</p>
      {/* <a href="/">go to home page</a> */}
      <Link to="/">go to home page</Link>
    </div>
  );
};

export default AboutUsPage;
