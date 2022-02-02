import React, { useCallback } from "react";
import "./create_note.css";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import BlotFormatter from "quill-blot-formatter";
import { options } from "./editor_options";
import "katex";
import katex from "katex";
import "katex/dist/katex.min.css";
import MarkdownShortcuts from "quill-markdown-shortcuts";

const CreateNote = ({ editorId, onSendData, onDeleteStep }) => {
  // const [quill, setQuill] = useState();
  const wraperRef = useCallback((wraper) => {
    if (wraper == null) return;
    wraper.innerHTML = "";
    window.katex = katex;
    const editor = document.createElement("div");
    wraper.append(editor);
    Quill.register("modules/blotFormatter", BlotFormatter);
    Quill.register("modules/markdownShortcuts", MarkdownShortcuts);
    const q = new Quill(editor, options);
    // setQuill(q);
    q.on("text-change", () => {
      const content = q.getContents();
      console.log(editorId);
      onSendData(content, editorId);
    });
  }, []);

  function sendDelete() {
    console.log("In create note " + editorId.toString());
    onDeleteStep(editorId);
  }

  return (
    <>
      <div id="container" ref={wraperRef}></div>
      <button onClick={sendDelete}>Delete Step</button>
    </>
  );
};

export default CreateNote;
