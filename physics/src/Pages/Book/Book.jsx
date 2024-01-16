import Author from "../../Component/Author/Author";
import "../Book/Book.scss";

const Book = () => {
  return (
    <div className="book">
      <div className="book-container">
        <img src="/book.png" alt="" />

        <div className="price">
          <h3 className="subTotal">Subtotal: 15$</h3>
          <p>
            Ready to unlock the mysteries of the universe? Click `Checkout` to
            effortlessly complete your order. We`re thrilled to send this
            fascinating physics journey straight to your door! 🚀📖 Let the
            exploration begin! 🛍️⚛️
          </p>

          <div className="total">
            <h2>Total</h2>
            <h1>$15</h1>
          </div>
          <button>Checkout</button>
        </div>
      </div>

      <Author />
    </div>
  );
};

export default Book;
