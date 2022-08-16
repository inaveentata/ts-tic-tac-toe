import React from "react";

type SquareTypes = {
  value: null | string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
    payload: any;
    type: string;
  };
};


const Square = ({ value, onClick }: SquareTypes) => {
  return (
    <button className="square-btn" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
