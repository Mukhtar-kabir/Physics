import Author from "../../Component/Author/Author";
import "../Book/Book.scss";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const [payNow, setPayNow] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const totalAmt = 2000;

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const config = {
    public_key: "FLWPUBK_TEST-214a5708be8939d9a86cac2171d1205f-X",
    tx_ref: Date.now(),
    amount: totalAmt,
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
    text: "Place Order",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
        setFormSubmitted(false);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Log out");
  };

  const handleCheckout = () => {
    setPayNow(true);
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

  const isFormValid = () => {
    // Check if all fields in the formData are not empty
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    config.customer = {
      ...config.customer,
      ...formData, // Merge form data with existing customer info
    };

    const hiddenFields = Object.entries(formData).map(([key, value]) => (
      <input key={key} type="hidden" name={key} value={value} />
    ));

    if (isFormValid()) {
      console.log("Form data submitted:", formData);
      // Clear the form fields after successful submission
      setFormData({
        name: "",
        email: "",
        address: "",
      });
      handleCloseCheckoutModal();
      setFormSubmitted(true);
    } else {
      console.log("Please fill in all the required fields");
    }

    return (
      <div>
        {/* ... other form elements */}

        <FlutterWaveButton {...fwConfig} className="pay">
          {hiddenFields}
        </FlutterWaveButton>
      </div>
    );
  };

  return (
    <div className="book">
      <div className="book-container">
        <img src="/book.png" alt="" />

        <div className="price">
          <h3 className="subTotal">Subtotal: NGN 2000</h3>
          <p>
            Ready to unlock the mysteries of the universe? Click `Checkout` to
            effortlessly complete your order. We`re thrilled to send this
            fascinating physics journey straight to your door! 🚀📖 Let the
            exploration begin! 🛍️⚛️
          </p>
          <div className="total">
            <h2>Total</h2>
            <h1>NGN 2000</h1>
          </div>
          {/* <FlutterWaveButton {...fwConfig} className="pay" /> */}
          {/* {userInfo ? (
            <div className="payment">
              <FlutterWaveButton {...fwConfig} className="pay" />
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          ) : (
            <button onClick={handleCheckout}>Checkout</button>
          )} */}
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
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
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
          {/* Conditionally render payment options based on form submission */}
          {formSubmitted ? (
            <div className="payment">
              <FlutterWaveButton {...fwConfig} className="pay" />
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          ) : (
            <button onClick={handleCheckout}>Checkout</button>
          )}

          {/* {!formSubmitted && <button onClick={handleCheckout}>Checkout</button>} */}
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
