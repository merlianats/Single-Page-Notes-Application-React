import React from 'react';
import { getAllNotes } from './utils/local-data';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import HomepageApp from './components/HomepageApp';
import DetailPage from './pages/DetailPage';
import ArchivesNote from './components/ArchivesNote';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/404Page';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };

    this.getActiveNotes = this.getActiveNotes.bind(this);
    this.getNote = this.getNote.bind(this);
    this.handleArchiveNote = this.handleArchiveNote.bind(this);
    this.handleUnarchiveNote = this.handleUnarchiveNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.getArchivedNote = this.getArchivedNote.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);
  }

  handleArchiveNote(noteId) {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === noteId ? { ...note, archived: true } : note
      ),
    });
  }

  handleUnarchiveNote(noteId) {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === noteId ? { ...note, archived: false } : note
      ),
    });
  }

  handleDeleteNote(noteId) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
  }

  handleNewNote(newNote) {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: `notes-${+new Date()}`,
          title: newNote.title || '(untitled)',
          body: newNote.body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    });
  }

  getActiveNotes() {
    return this.state.notes.filter((note) => !note.archived);
  }

  getNote(noteId) {
    return this.state.notes.find((note) => note.id === noteId);
  }

  getArchivedNote() {
    return this.state.notes.filter((note) => note.archived);
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomepageApp getActiveNotes={this.getActiveNotes} />} />
            <Route
              path="/notes/:noteId"
              element={
                <DetailPage
                  getNote={this.getNote}
                  handleArchiveNote={this.handleArchiveNote}
                  handleUnarchiveNote={this.handleUnarchiveNote}
                  handleDeleteNote={this.handleDeleteNote}
                />
              }
            />
            <Route path="/archives" element={<ArchivesNote getArchivedNote={this.getArchivedNote} />} />
            <Route path="/notes/new" element={<AddNoteWrapper handleNewNote={this.handleNewNote} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

function AddNoteWrapper({ handleNewNote }) {
  const navigate = useNavigate();

  return <AddNotePage handleNewNote={handleNewNote} navigate={navigate} />;
}

export default App;
