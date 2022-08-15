import { useParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
//   console.log(params.id);

  return (
    <div>
      <h2>post detail {params.id || 1}</h2>
      <div>{JSON.stringify(params)}</div>
    </div>
  );
};

export default PostPage;
