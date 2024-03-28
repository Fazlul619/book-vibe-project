import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../Utility/localstorage";
import BooksCard from "./BooksCard";
import { getStoredWishlist } from "../../Utility/locatstorageWishlist";
import WishBookCard from "./WishBookCard";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBookList, setReadBookList] = useState([]);
  const [wishBookList, setWishBookList] = useState([]);
  const [displayReadBookList, setDisplayReadBookList] = useState([]);
  const handleReadBookFilter = (filter) => {
    if (filter === "Rating") {
      const sortedBooks = [...readBookList].sort((a, b) => b.rating - a.rating);
      setDisplayReadBookList(sortedBooks);
    } else if (filter === "Number of Pages") {
      const sortedBooks = [...readBookList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setDisplayReadBookList(sortedBooks);
    } else if (filter === "Publisher year") {
      const sortedBooks = [...readBookList].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setDisplayReadBookList(sortedBooks);
    }
  };
  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    console.log(storedBookIds);
    if (books.length > 0) {
      const readBook = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setReadBookList(readBook);
      setDisplayReadBookList(readBook);
    }
  }, [books]);
  useEffect(() => {
    const storedWishListIds = getStoredWishlist();
    if (books.length > 0) {
      const wishBook = books.filter((wishBooks) =>
        storedWishListIds.includes(wishBooks.bookId)
      );
      setWishBookList(wishBook);
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
            <li onClick={() => handleReadBookFilter("Rating")}>
              <a className="text-[#131313CC] font-medium">Rating</a>
            </li>
            <li onClick={() => handleReadBookFilter("Number of Pages")}>
              <a className="text-[#131313CC] font-medium">Number of pages</a>
            </li>
            <li onClick={() => handleReadBookFilter("Publisher year")}>
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
            <div className="">
              {displayReadBookList.map((book) => (
                <BooksCard key={book.id} book={book}></BooksCard>
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
          >
            <div>
              {wishBookList.map((wishBook) => (
                <WishBookCard key={books.id} wishBook={wishBook}></WishBookCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
