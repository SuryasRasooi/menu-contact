import React, { useRef, useState } from "react";
import { ModalStyles } from "./index.styled";
import { useOutsideAlerter } from "../../hooks";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const modalVariant = {
  hidden: {
    scale: 0.3,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

function emailValidator(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default function Modal({ animate, setAnimate }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setAnimate(!animate));
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (emailValidator(email)) {
      try {
        await addDoc(collection(db, "submissions"), { email });
        toast("You Details have been successfully submitted. Thank you!", {
          type: "success",
          position: "top-right",
          duration: 3000,
        });
        setLoading(false);
      } catch (e) {
        console.error("Error adding document: ", e);
        toast("You Details could not be submitted. Please try again!", {
          type: "error",
          position: "top-right",
          duration: 3000,
        });
      }
    } else {
      toast("incorrect email format", {
        type: "error",
        duration: 3000,
        position: "top-right",
      });
    }
  };
  return (
    <AnimatePresence>
      {animate && (
        <ModalStyles
          variants={modalVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="safari-transform"
          transition={{
            type: "spring",
            ease: "easeIn",
            duration: 1,
          }}
          ref={wrapperRef}
        >
          <div className="text-block">Secure your spot</div>
          <p className="paragraph">
            We will be in touch with you for our
            <br />
            upcoming launch.
          </p>
          <div className="form-block">
            <form>
              <input
                type="email"
                className="text-field"
                autoFocus="true"
                name="email"
                placeholder="Your E-Mail"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="submit-button w-button"
                onClick={(e) => submitForm(e)}
              >
                {loading ? (
                  <svg
                    className="loader-svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                  >
                    <circle className="spinner_VpEe" cx="12" cy="12" r="0" />
                    <circle
                      className="spinner_VpEe spinner_eahp"
                      cx="12"
                      cy="12"
                      r="0"
                    />
                    <circle
                      className="spinner_VpEe spinner_f7Y2"
                      cx="12"
                      cy="12"
                      r="0"
                    />
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </ModalStyles>
      )}
    </AnimatePresence>
  );
}
