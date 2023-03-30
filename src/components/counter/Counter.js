import React, { useReducer } from "react";
import {
  CounterButtonContainerStyled,
  CounterButtonStyled,
  CounterContainerStyled,
  CounterSpanStyled,
} from "./CounterStyles";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { FiDivideCircle } from "react-icons/fi";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";
import { BiReset } from "react-icons/bi";
import {
  counterInitialState,
  counterReducer,
} from "../../reducers/countReducer";
import { TYPES } from "../../actionTypes/countActions";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const handleDecrement = () => {
    dispatch({ type: TYPES.DECREMENT })
  };

  const handleIncrement = () => {
    dispatch({ type: TYPES.INCREMENT })
  };

  const handleMultiply = () => {
    dispatch({ type: TYPES.MULTIPLY })
  };

  const handleDivide = () => {
    dispatch({ type: TYPES.DIVIDE })
  };

  const handleDecrementBy5 = () => {
    dispatch({ type: TYPES.DECREMENT_5 })
  };

  const handleIncrementBy5 = () => {
    dispatch({ type: TYPES.INCREMENT_5 })
  };

  const handleReset = () => {
    dispatch({ type: TYPES.RESET })
  };

  return (
    <CounterContainerStyled>
      <CounterButtonContainerStyled>
        <CounterButtonStyled left onClick={handleDivide}>
          <FiDivideCircle size="32px" color="white" />
        </CounterButtonStyled>

        <CounterButtonStyled left onClick={handleDecrementBy5}>
          <p>
            -<RiNumber5 size="32px" color="white" />
          </p>
        </CounterButtonStyled>

        <CounterButtonStyled left onClick={handleDecrement}>
          <AiOutlineMinusCircle size="32px" color="white" />
        </CounterButtonStyled>

        <CounterSpanStyled>{state.count}</CounterSpanStyled>

        <CounterButtonStyled right onClick={handleIncrement}>
          <AiOutlinePlusCircle size="32px" color="white" />
        </CounterButtonStyled>

        <CounterButtonStyled left onClick={handleIncrementBy5}>
          <p>
            +<RiNumber5 size="32px" color="white" />
          </p>
        </CounterButtonStyled>

        <CounterButtonStyled left onClick={handleMultiply}>
          <FaRegTimesCircle size="32px" color="white" />
        </CounterButtonStyled>
      </CounterButtonContainerStyled>

      <BiReset
        cursor="pointer"
        size="38px"
        color="#F24C4C"
        onClick={handleReset}
      />
    </CounterContainerStyled>
  );
};

export default Counter;
