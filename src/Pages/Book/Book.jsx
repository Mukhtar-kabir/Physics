import Author from "../../Component/Author/Author";
import "../Book/Book.scss";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { addUser, removeUser } from "../../redux/physicsSlice";

const Book = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payNow, setPayNow] = useState(false);
  const [payToIGATA, setShowToIGATA] = useState(false);
  const userInfo = useSelector((state) => state.physics.userInfo);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
          })
        );
        console.log("User information:", user);

        setPayNow(false);

        // setTimeout(() => {
        //   navigate("/book");
        // }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
        // dispatch(resetCart());
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Log out");
  };

  const handleCheckout = () => {
    setPayNow(true);
    // if (userInfo) {
    //   setPayNow(true);
    // } else {
    //   // toast.error("Please sign in to checkout!");
    //   console.log("Please sigin to checkout!");
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseCheckoutModal = () => {
    // Close the checkout modal
    setPayNow(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic, e.g., make an API call, process the data
    console.log("Form data submitted:", formData);
    handleCloseCheckoutModal();
  };

  const config = {
    public_key: "FLWPUBK_TEST-3b34569f576cd8ed398883ca2e196bf9-X",
    tx_ref: Date.now(),
    amount: "NGN 2000",
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userInfo ? userInfo.email : "",
      phone_number: userInfo ? userInfo.phone_number : "",
      name: userInfo ? userInfo.name : "",
      address: userInfo ? userInfo.address : "",
    },
    customizations: {
      title: "IGATA",
      description: "Payment for Physics",
      // logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      logo: "/book.png",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay to IGATA",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

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
          {/* <FlutterWaveButton {...fwConfig} className="pay" /> */}
          {userInfo ? (
            <div className="payment">
              <FlutterWaveButton {...fwConfig} className="pay" />
              <button onClick={handleSignOut}>Cancel & Sign Out</button>
            </div>
          ) : (
            <button onClick={handleCheckout}>Checkout</button>
          )}

          {payNow && (
            <div
              className="overlay active"
              onClick={handleCloseCheckoutModal}
            ></div>
          )}

          {payNow && (
            <div className="checkout-modal">
              <form onSubmit={handleFormSubmit}>
                <h3>Sign Up</h3>

                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                ></textarea>

                <div className="google" onClick={handleGoogleLogin}>
                  <div>
                    <img src="/googleIcon.png" alt="" />
                    <span>Sign in with Google</span>
                  </div>
                  {/* <button onClick={handleSignOut}>Sign Out</button> */}
                </div>

                <button type="submit">Proceed</button>
                {/* <button type="button" onClick={handleCloseCheckoutModal}>
                  Close Checkout
                </button> */}
              </form>
            </div>
          )}
        </div>
      </div>

      <Author />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Book;
