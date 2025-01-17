import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-[#131313] text-4xl text-center m-9 font-bold">
        Books
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 mx-auto max-w-6xl h-[554px]">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
