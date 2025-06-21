import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SaveButton({ handleOnClick }) {
    const navigate = useNavigate();

    return (
        <Link to={"/"}>
            <button className="action" type="button" title="Save" onClick={() => {handleOnClick(); navigate("/")}}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M4 12.6111L8.92308 17.5L20 6.5"
                        stroke="#2B3467"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </Link>
    );
}

export default SaveButton;
