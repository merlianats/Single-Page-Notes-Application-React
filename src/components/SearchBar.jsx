import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, onSearch }){
    return (
        <section>
            <input 
                type="text" 
                placeholder="Search for notes ..."
                value={keyword || ""}
                onChange={onSearch} />
        </section>
    )
}

SearchBar.PropTypes = {
    keyword: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
}

export default SearchBar;