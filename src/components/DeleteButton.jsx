import React from "react";
import PropTypes from "prop-types";

function DeleteButton({ handleOnClick }){
    return (
        <button className="action" type="button" title="Delete" onClick={handleOnClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 1024 1024"
                fill="#2B3467"
            >
                <path
                    fill="#2B3467"
                    d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
                />
            </svg>
        </button>
    )
}

DeleteButton.PropTypes = {
    handleOnClick: PropTypes.func.isRequired
}

export default DeleteButton;