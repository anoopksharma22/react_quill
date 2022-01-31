export const toolbarOptions = [
  [{ size: ["small", false, "large", "huge"] }], /// custom dropdown
  ["bold", "italic", "underline", "strike"], // toggled buttons
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ list: "ordered" }, { list: "bullet" }],
  [{ align: [] }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  ["blockquote", "code-block"],
  ["image"],
  ["formula"],
  ["clean"], // remove formatting button

  // [{ header: [1, 2, 3, 4, false] }],
  // [{ header: 1 }, { header: 2 }], // custom button values
  // [{ direction: "rtl" }], // text direction
  // [{ font: [] }],
];

export const options = {
  debug: "info",
  placeholder: "Compose an epic...",
  theme: "snow",
  modules: {
    toolbar: toolbarOptions,
    blotFormatter: {},
    markdownShortcuts: {},
  },
};
