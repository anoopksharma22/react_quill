import React, { useCallback, useState } from "react";
import "./create_note.css";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import BlotFormatter from "quill-blot-formatter";
import { options } from "./editor_options";
import "katex";
import katex from "katex";
import "katex/dist/katex.min.css";

const CreateNote = () => {
  const [quill, setQuill] = useState();
  const wraperRef = useCallback((wraper) => {
    if (wraper == null) return;
    wraper.innerHTML = "";
    window.katex = katex;
    const editor = document.createElement("div");
    wraper.append(editor);
    Quill.register("modules/blotFormatter", BlotFormatter);
    const q = new Quill(editor, options);
    setQuill(q);
  }, []);

  const saveContent = () => {
    console.log(quill.getContents());
  };
  return (
    <>
      <div id="container" ref={wraperRef}></div>
      <button onClick={saveContent}>SaveContent</button>
    </>
  );
};

export default CreateNote;
