const getStoredWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist-book");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};
const saveWishlist = (bookId) => {
  const storedWishlists = getStoredWishlist();
  const exists = storedWishlists.find((booksId) => booksId === bookId);
  if (!exists) {
    storedWishlists.push(bookId);
    localStorage.setItem("wishlist-book", JSON.stringify(storedWishlists));
  }
};
export { getStoredWishlist, saveWishlist };
