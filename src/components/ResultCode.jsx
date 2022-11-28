import React from "react";

export default function ResultCode(props) {
  return (
    <div className="my-7 w-full rounded-xl bg-dark p-3">
      <p className="mb-5 font-bold">Result:</p>
      <div className="w-[90%] m-auto">{props.element}</div>
    </div>
  );
}
