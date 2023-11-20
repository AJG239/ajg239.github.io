import { useEffect, useState } from 'react';
import './App.css';
import EdicionNotas from './componentes/EdicionNotas';
import ListaNotas from './componentes/ListaNotas';
import uuid from "react-uuid";

function App() {

  //Miramos si existe en el localStorage del browser y si existe algo lo introducimos
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  } ,[notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(), //Genera un id para la nota
      title: "Untitle Note",
      body: "",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes])
  };

  const onDeleteNote = (idToDelete) =>{
    setNotes(notes.filter((note) => note.id !== idToDelete));
   
  };

  const getActiveNote = () =>{
    return notes.find((note) => note.id === activeNote);
  };

  const onEditNote = (updateNote) =>{
    const updateNoteArray = notes.map((note) => {
      if(note.id === activeNote){
        return updateNote;
      }

      return note;
    });

    setNotes(updateNoteArray);
  };
  
  return (
    <div className='App'>

      <ListaNotas notes={notes} onAddNote={onAddNote} 
                  onDeleteNote={onDeleteNote} activeNote={activeNote} 
                  setActiveNote ={setActiveNote}/>

      <EdicionNotas activeNote={getActiveNote()} onEditNote={onEditNote}/>

    </div>);
}

export default App;
