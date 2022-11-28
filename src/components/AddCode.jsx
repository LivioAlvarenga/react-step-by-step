import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AddCode(props) {
  return (
    <div className="my-7 w-full">
      <SyntaxHighlighter
        className="rounded-xl "
        language="javascript"
        style={darcula}
        PreTag="pre"
        children={props.markdown}
      />
    </div>
  );
}
