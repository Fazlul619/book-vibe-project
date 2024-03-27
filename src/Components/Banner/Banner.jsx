import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero  bg-[#1313130D] rounded-xl max-w-6xl mx-auto  px-32 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/5MFtXvD/pngwing-1.png"
            className="max-w-sm rounded-lg  "
          />
          <div>
            <h1 className="text-5xl font-bold text-[#131313] mb-16">
              Books to freshen up your bookshelf
            </h1>
            <Link to="/listedBooks">
              <button className="btn btn-xs bg-[#23BE0A] text-white sm:btn-sm md:btn-md lg:btn-lg">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
