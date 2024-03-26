import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-[#131313] text-4xl text-center mt-9 font-bold">
        Books:{books.length}
      </h1>
    </div>
  );
};

export default Books;
