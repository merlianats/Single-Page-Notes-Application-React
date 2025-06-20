import React from "react";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";
import AddNoteButton from "../components/AddNoteButton";
import NotesList from "../components/NotesList";

class Homepage extends React.Component{
        constructor(props) {
        super(props);

        this.state = {
        filteredNotes: this.props.activeKeyword
            ? this.props.activeNotes.filter((note) =>
                note.title
                .toLowerCase()
                .includes(this.props.activeKeyword.toLowerCase()),
            )
            : [],
        };

        this.handleOnSearch = this.handleOnSearch.bind(this);
    }

    handleOnSearch(event) {
        const keyword = event.target.value;
        this.setState({
        filteredNotes: keyword
            ? this.props.activeNotes.filter((note) =>
                note.title.toLowerCase().includes(keyword.toLowerCase()),
            )
            : [],
        });
        this.props.onSearch(keyword);
    }

    render(){
        return (
            <section>
                <h2>Active Notes</h2>
                <SearchBar keyword={this.props.activeKeyword} onSearch={this.handleOnSearch} />
                <NotesList notes={this.props.activeKeyword ? this.state.filteredNotes : this.props.activeNotes} />
                <div className="homepage__action">
                    <AddNoteButton />
                </div>
            </section>
        )
    }
}

Homepage.PropTypes = {
    activeNotes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            archived: PropTypes.bool.isRequired,
        }),
    ),
    onSearch: PropTypes.func.isRequired,
    activeKeyword: PropTypes.string
}

export default Homepage;