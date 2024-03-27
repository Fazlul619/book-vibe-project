import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utility/localstorage";
import BooksCard from "./BooksCard";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBookList, setReadBookList] = useState([]);
  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    if (books.length > 0) {
      const readBook = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setReadBookList(readBook);
    }
  }, []);
  return (
    <div>
      <div className="max-w-6xl h-28 mx-auto bg-[#1313130D] rounded-xl">
        <h1 className="font-bold text-3xl text-[#131313] flex justify-center items-center w-full h-full">
          Books
        </h1>
      </div>
      {/* Drop Down */}
      <div className=" text-center my-7 ">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-[#FFFFFF] "
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-[#131313CC] font-medium">Rating</a>
            </li>
            <li>
              <a className="text-[#131313CC] font-medium">Number of pages</a>
            </li>
            <li>
              <a className="text-[#131313CC] font-medium">Publisher year</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab */}
      <div className="max-w-6xl mx-auto mt-24">
        <div role="tablist" className="tabs tabs-lifted ">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div>
              {readBookList.map((book) => (
                <BooksCard book={book}></BooksCard>
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Book"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
