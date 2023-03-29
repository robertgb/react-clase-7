import React, { useState } from "react";
import {
  CounterButtonStyled,
  CounterContainerStyled,
  CounterSpanStyled,
} from "./CounterStyles";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0)
  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <CounterContainerStyled>
      <CounterButtonStyled left onClick={handleDecrement}>
        <AiOutlineMinusCircle size="32px" color="white" />
      </CounterButtonStyled>

      <CounterSpanStyled>{count}</CounterSpanStyled>

      <CounterButtonStyled right onClick={handleIncrement}>
        <AiOutlinePlusCircle size="32px" color="white" />
      </CounterButtonStyled>
    </CounterContainerStyled>
  );
};

export default Counter;
