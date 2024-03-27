const getStoredReadBook = () => {
  const storedReadBook = localStorage.getItem("read-book");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};
const saveReadBook = (bookId) => {
  const storedReadBooks = getStoredReadBook();
  const exists = storedReadBooks.find((booksId) => booksId === bookId);
  if (!exists) {
    storedReadBooks.push(bookId);
    localStorage.setItem("read-book", JSON.stringify(storedReadBooks));
  }
};
export { getStoredReadBook, saveReadBook };
