import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const getAllnote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add note
  const addnote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json()
    setNotes(notes.concat(note));
    
  };

  // Delete note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
    
    });
    const Json = response.json();
    setNotes(Json)
    const NewNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(NewNotes);
  };

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const Json = await response.json();
    setNotes(Json)
  
    let newNote = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
  
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break
      }
    }
    setNotes(newNote)
  };

  return (
    <NoteContext.Provider
      value={{ notes, addnote, deleteNote, editNote, getAllnote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;