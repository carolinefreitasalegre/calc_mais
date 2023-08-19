import React from "react";
import { GoButton } from "./style";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function ButtonGo({ text }) {
  return (
    <GoButton>
      {text}
      <AiOutlineDoubleRight className="arrow" />
    </GoButton>
  );
}
