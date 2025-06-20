import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import ArchivePage from "../pages/ArchivePage";

function ArchivesNote({ getArchivedNote }){
    const [searchParams, setSearchParams] = useSearchParams();

    function changeSearchParams(keyword) {
        setSearchParams({ keyword: keyword });
    }

    return (
        <ArchivePage
        archivedNotes={getArchivedNote()}
        onSearch={changeSearchParams}
        activeKeyword={searchParams.get("keyword")}
        />
    );
}

ArchivesNote.PropTypes = {
    getArchivedNote: PropTypes.func.isRequired,
}

export default ArchivesNote;