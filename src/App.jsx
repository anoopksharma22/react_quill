import React, { useState } from "react";
import "./app.css";
import { CreateNote } from "./views";
import { firebaseDb } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const App = () => {
  const [editor, setEditor] = useState([{}]);

  function addEditor() {
    setEditor([...editor, {}]);
  }
  function sendData(data, id) {
    const newEditor = [...editor];
    newEditor[id] = data;
    setEditor(newEditor);
    console.log(id, data);
  }

  const saveContent = async () => {
    try {
      const docRef = await addDoc(collection(firebaseDb, "Notes"), {
        content: JSON.stringify(editor),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  function deleteStep(e) {
    const newInventory = editor.filter((item, id) => e !== id);
    return setEditor([...newInventory]);
  }

  return (
    <>
      {editor.map((cont, index) => {
        return (
          <CreateNote
            onSendData={sendData}
            editorId={index}
            key={index}
            onDeleteStep={deleteStep}
          ></CreateNote>
        );
      })}
      <button onClick={addEditor}>Add Editor</button>
      <button onClick={saveContent}>LogNote</button>
    </>
  );
};

export default App;
