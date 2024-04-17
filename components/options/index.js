import React, { useEffect, useState, useContext } from "react";
import { Component, Item } from "./index.styled";
import { FaCheck } from "react-icons/fa";
import { Context } from "../../context/FormContext";

const Options = ({
  handleChange,
  isMultiple,
  options,
  index,
  resolverType,
}) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    if (isMultiple) {
      if (formData[resolverType]) setState(formData[resolverType]);
    }
  }, []);
  const { formData } = useContext(Context);
  const multipleCheck = (option) => {
    if (state.includes(option)) {
      setState(state.filter((item) => item !== option));
    } else {
      setState([...state, option]);
    }
  };
  const singleCheck = (option) => {
    setState(option);
  };
  const handleCheck = (option) => {
    if (isMultiple) {
      multipleCheck(option);
    } else {
      singleCheck(option);
    }
  };

  useEffect(() => {
    handleChange(state);
  }, [state]);

  return (
    <Component>
      {options.map((option) => (
        <Item
          onClick={() => handleCheck(option)}
          active={isMultiple ? state.includes(option) : state === option}
        >
          <span className="text">{option}</span>
          {isMultiple ? (
            <>
              {state.includes(option) ? (
                <span className="check">
                  <FaCheck />
                </span>
              ) : null}
            </>
          ) : (
            <>
              {state === option ? (
                <span className="check">
                  <FaCheck />
                </span>
              ) : null}
            </>
          )}
        </Item>
      ))}
    </Component>
  );
};

export default Options;
