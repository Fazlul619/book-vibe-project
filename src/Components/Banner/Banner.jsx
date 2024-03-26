const Banner = () => {
  return (
    <div>
      <div className="hero  bg-[#1313130D] rounded-xl max-w-6xl mx-auto h-[554px] px-32">
        <div className="hero-content flex-col   lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/5MFtXvD/pngwing-1.png"
            className="max-w-sm rounded-lg  "
          />
          <div>
            <h1 className="text-5xl font-bold text-[#131313] mb-16">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-xs bg-[#23BE0A] text-white sm:btn-sm md:btn-md lg:btn-lg">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
