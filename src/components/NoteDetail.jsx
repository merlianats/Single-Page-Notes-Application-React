import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser"
import { showFormattedDate } from "../utils";

function NoteDetail({ title, body, createdAt }) {
    return (
        <>
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="detail-page__body">{parse(body)}</p>
        </>
    )
}

NoteDetail.PropTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default NoteDetail;