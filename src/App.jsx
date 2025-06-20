import React from 'react';
import { getAllNotes } from './utils/local-data';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomepageApp from './components/HomepageApp';
import DetailPage from './pages/DetailPage';
import ArchivesNote from './components/ArchivesNote';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      notes: getAllNotes(),
    }

    this.getActiveNotes = this.getActiveNotes.bind(this);
    this.getNote = this.getNote.bind(this);
    this.handleArchiveNote = this.handleArchiveNote.bind(this);
    this.handleUnarchiveNote = this.handleUnarchiveNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.getArchivedNote = this.getArchivedNote.bind(this);
  }

  handleArchiveNote(noteId) {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === noteId) {
          return { ...note, archived: true };
        }
        return note;
      }),
    });
  }

  handleUnarchiveNote(noteId) {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === noteId) {
          return { ...note, archived: false };
        }
        return note;
      }),
    });
  }

  handleDeleteNote(noteId) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
  }

  
  getActiveNotes(){
    return this.state.notes.filter((note) => !note.archived);
  }

  getNote(noteId){
    return this.state.notes.find((note) => note.id === noteId);
  }

  getArchivedNote() {
    return this.state.notes.filter((note) => note.archived);
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <main>
          <Routes>
            {/*Route Path Homepage*/}
            <Route path='/' element={<HomepageApp getActiveNotes={this.getActiveNotes} />} />
            {/*Route Path Detail Page*/}
            <Route 
              path='/notes/:noteId' 
              element={
                <DetailPage
                  getNote={this.getNote}
                  handleArchiveNote={this.handleArchiveNote}
                  handleUnarchiveNote={this.handleUnarchiveNote}
                  handleDeleteNote={this.handleDeleteNote} />
              } 
            />
            {/*Route Path Arcived Page*/}
            <Route path='/archives' element={<ArchivesNote getArchivedNote={this.getArchivedNote} />} />
          </Routes>
        </main>
      </div>
    )
  }
}

export default App;
