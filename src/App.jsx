import React from 'react';
import { getAllNotes } from './utils/local-data';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomepageApp from './components/HomepageApp';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      notes: getAllNotes(),
    }

    this.getActiveNotes = this.getActiveNotes.bind(this);
    this.getNote = this.getNote.bind(this);
  }

  getActiveNotes(){
    return this.state.notes.filter((note) => !note.archived);
  }

  getNote(noteId){
    return this.state.notes.find((note) => note.id === noteId);
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <main>
          <Routes>
            {/*Route Path Homepage*/}
            <Route path='/' element={<HomepageApp getActiveNotes={this.getActiveNotes} />} />
          </Routes>
        </main>
      </div>
    )
  }
}

export default App;
