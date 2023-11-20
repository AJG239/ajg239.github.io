
function ListaNotas({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}){
   
    /*
    La clase se divide en dos partes el encabezado con el botton ADD que cada vez que se pulsa genera una nota
    Y la Nota, que va mirando nota a nota y las creas activandolas si no existian, además tiene un boton DELETE que las elimina de forma dinámica

    {note.body && note.body.substr(0, 100) + "..."} esta parte de código nos permite reescribir en la parte de la nota lo que el usuario vaya escribiendo, con el texto limite de hasta 100 caractere
   
    {new Date(note.lastModified).toLocaleDateString("es-ES",{hour: "2-digit", minute: "2-digit" })} funcion de Java que nos permite poner la hora y los minutos dependiendo de la region

    */

   return(
        <div className="ListaNotas">
            <div className="ListaNotas_Encabezado">
                <h1>Notes</h1>
                <button onClick={onAddNote}>ADD</button>
            </div>

            <div className="Notas">
                {notes.map((note) => (
                    <div className={`nota ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                    
                        <div className="titulo">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>DELETE</button>
                        </div>
 
                        <div>
                            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                            <small className="nota-info">Last modified [{new Date(note.lastModified).toLocaleDateString("es-ES",{hour: "2-digit", minute: "2-digit" })}]</small>
                        </div>

                    </div>
                ))}
            </div>
        </div>);
}

export default ListaNotas;