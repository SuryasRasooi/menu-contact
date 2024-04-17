import React, { useEffect } from "react";

const useOutsideAlerter = (ref, outsideAction) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event.target.classList[0]);
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.classList[0] !== "cont"
      ) {
        console.log("calling outside action");
        outsideAction();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideAlerter;
