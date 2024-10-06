import React, { useContext } from "react";
import noteContext from "../Context/Notes/noteContext";

function NoteItem(props) {
  const {showAlert} = props
  const Context = useContext(noteContext);
  const {deleteNote} = Context
    const {note,UpdateNotes} = props;
  return (
    <>

    <div className='col-md-3'>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description} </p>
    <p className="card-text ">{note.tag}</p>
    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); showAlert('  Note deleted','success')}}></i>
    <i className="fa-solid fa-file-pen" onClick={()=>{UpdateNotes(note); }}></i>          
  </div>
</div>
</div>
    </>
  )
}

export default NoteItem