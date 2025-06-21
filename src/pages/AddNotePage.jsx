import React from "react";
import SaveButton from "../components/SaveButton";
import PropTypes from "prop-types";

class AddNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleTitleToChange = this.handleTitleToChange.bind(this);
    this.handleBodyToChange = this.handleBodyToChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleTitleToChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleBodyToChange(event) {
    this.setState({
      body: event.target.innerHTML,
    });
  }

  handleSave() {
    const { title, body } = this.state;

    if (title.trim() === "" || body.trim() === "") {
      alert("Judul dan isi catatan tidak boleh kosong!");
      return;
    }

    this.props.handleNewNote({ title, body });
    this.props.navigate("/"); // Redirect ke homepage setelah simpan
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleTitleToChange}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Fill in Note"
            contentEditable
            onInput={this.handleBodyToChange}
          />
        </div>
        <div className="add-new-page__action">
          <SaveButton handleOnClick={this.handleSave} />
        </div>
      </section>
    );
  }
}

AddNotePage.propTypes = {
  handleNewNote: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default AddNotePage;
