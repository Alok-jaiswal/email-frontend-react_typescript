import React, { useRef } from "react";
import JodieEditor from "jodit-react";

export const Editor = ({ setTemplate }: any) => {
  const editor = useRef(null);
  return (
    <div className="col-md-12">
      <JodieEditor
        ref={editor}
        onChange={(content: any) => setTemplate(content)}
        value={""}
      />
    </div>
  );
};
