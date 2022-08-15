import { Link } from "react-router-dom";

const HomePage = (props) => {
  // console.log(props);
  // props.history.push("/about-us");
  return (
    <div>
      <p>This is home page</p>
      <Link to="/about-us">go to about-us</Link>
    </div>
  );
};

export default HomePage;
