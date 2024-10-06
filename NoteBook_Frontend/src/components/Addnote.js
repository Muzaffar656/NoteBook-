import React,{useContext,useState} from "react";
import noteContext from "../Context/Notes/noteContext";

function Addnote() {
 
const [note, setNote] = useState({title : "",description : "",tag : ""})

const Context = useContext(noteContext);
const { addnote } = Context;
  
const handleClick = (e) => {
    e.preventDefault();
    addnote(note.title,note.description,note.tag)
    setNote({title : "",description : "",tag : ""})
};

const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
};
return (
    <>
      <h1>Add Note</h1>
      <form>

        <div className="mb-3">
          <label htmlFor="title" className="form-label"> Title </label>
          <input type="text" className="form-control"  value={note.title} id="title" name="title" aria-describedby="emailHelp" onChange={onChange}
           minLength={5} required/>
        </div>

        {/* <div className="mb-3">
          <label htmlhtmlFor="description" className="form-label"> Description </label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
        </div> */}

        <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Descritption</label>
  <textarea className="form-control"  type="text" value={note.description} name="description" onChange={onChange} id="description" rows="3"  minLength={5} required></textarea>
</div>




        <div className="mb-3">
          <label htmlFor="tag" className="form-label"> tag </label>
          <input type="text" className="form-control" id="tag" value={note.tag} name="tag" onChange={onChange} />
        </div>

       

        <button disabled={note.title.length <5 || note.description.length<5} onClick={handleClick} type="submit" className="btn btn-primary"> Add Note </button>
      </form>
    </>
  );
}

export default Addnote;
