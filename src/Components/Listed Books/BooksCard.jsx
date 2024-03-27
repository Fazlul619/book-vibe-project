import React from "react";

const BooksCard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    totalPages,
    category,
    tags,
    yearOfPublishing,
    publisher,
    rating,
  } = book;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <div>
          <img src={image} alt="Movie" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By:{author}</p>
          <div className=" flex flex-row">
            <span className="font-bold">Tag</span>

            {book.tags.map((tags, idx) => (
              <span key={idx}>
                <p className="text-[#23BE0A] bg-[#23BE0A0D] w-28 rounded-xl font-medium text-center ">
                  #{tags}
                </p>
              </span>
            ))}
            <div className="flex">
              <img src="https://i.ibb.co/jzBgd8S/Frame-1.png" alt="" />
              <p>Year of Publishing:{yearOfPublishing}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <img src="https://i.ibb.co/0nVqh4v/Frame-2.png" alt="" />
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex gap-2">
              <img src="https://i.ibb.co/Sdx5b3L/Frame-3.png" alt="" />
              <p>Page {totalPages}</p>
            </div>
          </div>
          <p className="border"></p>
          <div className="flex w-fit gap-3">
            <p className="text-[#328EFF] bg-[#23BE0A0D] w-fit p-1 rounded-xl font-medium text-center ">
              Category{category}
            </p>
            <p className="text-[#FFAC33] bg-[#23BE0A0D] w-fit p-1 rounded-xl font-medium text-center ">
              Rating : {rating}
            </p>
            <button className="btn btn-xs bg-[#23BE0A] text-white rounded-xl sm:btn-sm  ">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
