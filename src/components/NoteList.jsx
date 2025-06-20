import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NotesList({ notes, emptyNotes}){
    if(notes && notes.length > 0){
        return (
            <section className="notes-list">
                {notes.map((note, index) => (
                    <NoteItem 
                    key={index}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    createdAt={note.createdAt}/>
                ))}
            </section>
        )
    } else {
        <section className="notes-list-empty">
            <p>{emptyNotes || "Tidak Ada Catatan"}</p>
        </section>
    }
}

NotesList.PropTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
        }),
    ),
    emptyNotes: PropTypes.string,
}

export default NotesList;