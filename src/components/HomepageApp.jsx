import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import Homepage from "../pages/Homepage";

function HomepageApp({ getActiveNotes }){
    const [searchParams, setSearchParams] = useSearchParams();

    function changeSearchParams(keyword) {
        setSearchParams({ keyword: keyword });
    }

  return (
    <Homepage activeNotes={getActiveNotes()} onSearch={changeSearchParams} activeKeyword={searchParams.get("keyword")}/>
  )
}

export default HomepageApp;