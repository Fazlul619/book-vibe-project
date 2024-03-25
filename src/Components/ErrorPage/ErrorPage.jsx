import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1>oops!!</h1>
      <Link to="/">
        <button className="btn btn-outline btn-success">
          Back To Home Page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
