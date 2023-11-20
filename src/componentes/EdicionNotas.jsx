
function EdicionNotas({activeNote, onEditNote}){

    const onEditField = (key, value) =>{
        onEditNote({
            ...activeNote, //Separa todos los valores de activeNote
            [key]: value , //Para cada valor de Key se el asigna su valor
            lastModified: Date.now()
        })
    };

    //Si no hay ninguna nota seleccionada aparece
    if(!activeNote) return <div className="no_active_note">No note selected</div>

    return(
        <div className="edicionNotas">

            <div className="edicionNotas_Edit">
                <input type="text" id="title" value={activeNote.title} 
                    onChange={(event) => onEditField("title", event.target.value)} 
                    autoFocus>
                </input>
            
                <textarea id="body" placeholder="Escribe aqui" 
                    value={activeNote.body} 
                    onChange={(event) => onEditField("body", event.target.value)}/>

            </div>

            <div className="edicionNotas_Preview">
                <h1 className="edicionNotas_Titulo_Preview">{activeNote.title}</h1>
                <div className="edicionNotas_Nota_Preview">{activeNote.body}</div>
            </div>
        </div>
    );
}

export default EdicionNotas;