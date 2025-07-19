import React from "react";
import Square from "./Square";

export default function Board({ squares, onClick }) {
  return (
    <div className="grid grid-cols-3 gap-2 w-fit mx-auto">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}
