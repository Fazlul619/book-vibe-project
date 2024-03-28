import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center gap-5 w-96 h-96 mx-auto">
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">
        Error 404
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">404</h3>
          <p className="py-4">Oops Page not found!</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
      <Link to="/">
        <button className="btn btn-outline btn-success">
          Back To Home Page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
