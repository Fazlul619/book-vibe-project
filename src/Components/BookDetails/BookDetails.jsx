import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoredReadBook, saveReadBook } from "../../Utility/localstorage";
import { saveWishlist } from "../../Utility/locatstorageWishlist";

const BookDetails = () => {
  const books = useLoaderData();
  const storedBookIds = getStoredReadBook();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);
  const refresh = () => {
    window.setTimeout(function () {
      window.location.reload();
    }, 3000);
  };
  const handleRead = () => {
    const existingBook = storedBookIds.find((bookId) => bookId === idInt);
    if (existingBook) {
      toast.warning("Already");
    } else {
      saveReadBook(idInt);
      toast.success("Book add successfully in Read Books");
      refresh();
    }
  };
  const handleWish = () => {
    const existingBookInReadList = storedBookIds.find(
      (bookId) => bookId === idInt
    );
    if (existingBookInReadList) {
      toast.warning("You can't add");
    } else {
      saveWishlist(idInt);
      toast("Book add successfully in Wishlist Book");
    }
  };
  return (
    <div>
      <div className="card  lg:card-side shadow-xl max-w-6xl mx-auto mt-28">
        <div className="md:w-96 h-[460px]">
          <img
            className="w-full h-full bg-[#F3F3F3] rounded-xl mx-auto p-4"
            src={book.image}
            alt="Album"
          />
        </div>

        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p className="font-medium">By : {book.author}</p>
          <div>
            <p className="border w-2/3"></p>
          </div>
          <div>
            <p className="font-medium">{book.category}</p>
          </div>
          <div>
            <p className="border w-2/3"></p>
          </div>
          <p>
            <span className="font-bold">Review: </span>
            <span className="font-normal">{book.review}</span>
          </p>

          <div className=" flex flex-row">
            <span className="font-bold">Tag</span>

            {book.tags.map((tags, idx) => (
              <span key={idx}>
                <p className="text-[#23BE0A] bg-[#23BE0A0D] w-28 rounded-xl font-medium text-center ">
                  #{tags}
                </p>
              </span>
            ))}
          </div>
          <div>
            <p>
              <span className="text-[#131313B3] font-medium">
                Number of Pages:
              </span>
              <span className="font-semibold mx-4">{book.totalPages}</span>
            </p>
            <p>
              <span className="text-[#131313B3] font-medium">Publisher:</span>
              <span className="font-semibold mx-20">{book.author}</span>
            </p>
            <p>
              <span className="text-[#131313B3] font-medium">
                Year of Publishing:
              </span>
              <span className="font-semibold mx-4">
                {book.yearOfPublishing}
              </span>
            </p>
            <p>
              <span className="text-[#131313B3] font-medium">Rating:</span>
              <span className="font-semibold mx-24">{book.rating}</span>
            </p>
          </div>

          <div className="card-actions justify-stat">
            <button onClick={handleRead} className="btn btn-outline">
              Read
            </button>
            <button onClick={handleWish} className="btn btn-info">
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
