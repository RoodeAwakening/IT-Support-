import React from "react";

function ButtonLarge({ text, buttonLargeOnClick }) {
  return (
    <div>
      <button onClick={buttonLargeOnClick}>{text}</button>
    </div>
  );
}

export default ButtonLarge;
