import React, { useCallback } from "react";
import "./create_note.css";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import BlotFormatter from "quill-blot-formatter";
import { options } from "./editor_options";
import "katex";
import katex from "katex";
import "katex/dist/katex.min.css";

const CreateNote = () => {
  const wraperRef = useCallback((wraper) => {
    if (wraper == null) return;
    wraper.innerHTML = "";
    window.katex = katex;
    const editor = document.createElement("div");
    wraper.append(editor);
    Quill.register("modules/blotFormatter", BlotFormatter);
    new Quill(editor, options);
  }, []);

  return (
    <>
      <div id="container" ref={wraperRef}></div>
    </>
  );
};

export default CreateNote;
