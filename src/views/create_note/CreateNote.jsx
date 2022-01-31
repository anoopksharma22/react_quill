import React, { useCallback } from "react";
import "./create_note.css";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import BlotFormatter from "quill-blot-formatter";

const CreateNote = () => {
  const wraperRef = useCallback((wraper) => {
    if (wraper == null) return;
    wraper.innerHTML = "";
    const toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["image", "video"],

      ["clean"], // remove formatting button
    ];
    var options = {
      debug: "info",
      placeholder: "Compose an epic...",
      theme: "snow",
      modules: {
        toolbar: toolbarOptions,
        blotFormatter: {},
      },
    };
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
