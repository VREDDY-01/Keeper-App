import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function AddItem(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function createNote(noteItem, index) {
    return (
      <Note
        key={index}
        id={index}
        onDelete={deleteItem}
        title={noteItem.title}
        content={noteItem.content}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddItem} />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
