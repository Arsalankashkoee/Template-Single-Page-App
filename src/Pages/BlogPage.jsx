import { Link } from "react-router-dom";

const items = [
  { name: "blog-1", to: "/blogs/1" },
  { name: "blog-2", to: "/blogs/2" },
  { name: "blog-3", to: "/blogs/3" },
];

const BlogPage = () => {
  return (
    <div>
      <h2>blog page</h2>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Link to={{ pathname: item.to, search: "sort=name" }}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default BlogPage;
