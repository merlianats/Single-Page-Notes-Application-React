import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser"
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";

function NoteItem({ id, title, body, createdAt }){
    return (
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="note-item__body">{parse(body)}</div>
        </article>
    )
}

NoteItem.PropTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteItem;