import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import ArchiveButton from "../components/ArchiveButton";
import UnArchiveButton from "../components/UnArchiveButton";
import DeleteButton from "../components/DeleteButton";

function DetailPage({
    getNote,
    handleArchiveNote,
    handleUnarchiveNote,
    handleDeleteNote,
}) {
  const { noteId } = useParams();
  const note = getNote(noteId);
  const navigate = useNavigate();

  return note ? (
    <section className="detail-page">
      <NoteDetail
        title={note.title}
        createdAt={note.createdAt}
        body={note.body}
      />
      <div className="detail-page__action">
        {note.archived ? (
          <UnArchiveButton
            handleOnClick={() => {
              handleUnarchiveNote(noteId);
              navigate("/archives");
            }}
          />
        ) : (
          <ArchiveButton
            handleOnClick={() => {
              handleArchiveNote(noteId);
              navigate("/");
            }}
          />
        )}
        <DeleteButton
          handleOnClick={() => {
            handleDeleteNote(noteId);
            note.archived ? navigate("/archives") : navigate("/");
          }}
        />
      </div>
    </section>
  ) : (
    <NotFoundPage />
  );
}

DetailPage.propTypes = {
  getNote: PropTypes.func.isRequired,
  handleArchiveNote: PropTypes.func.isRequired,
  handleUnarchiveNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default DetailPage;