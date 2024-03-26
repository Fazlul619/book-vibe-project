const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating } = book;
  return (
    <div>
      <div className="card w-96 border-2  border-[#13131326]">
        <div className=" w-80  p-6 bg-[#F3F3F3] rounded-xl mx-auto mt-7">
          <img className="rounded-xl w-32 h-40 mx-auto" src={image} alt="" />
        </div>
        <div className="card-body flex flex-row">
          <h1 className="text-xl font-semibold"></h1>

          {tags.map((tags, idx) => (
            <span key={idx}>
              <p className="text-[#23BE0A] bg-[#23BE0A0D] w-28 rounded-xl font-medium text-center ">
                {tags}
              </p>
            </span>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p className="text-[#131313CC] font-medium ">By : {author}</p>
          <p className="border-dashed border mt-2  "></p>
        </div>

        <div className="card-body flex justify-between flex-row">
          <p className="text-[#131313CC] font-medium">{category}</p>
          <div className="flex gap-2">
            <p className="text-[#131313CC] font-medium">{rating}</p>
            <img
              className=""
              src="https://i.ibb.co/hCLXHJP/Frame-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
