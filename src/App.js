import React, { Component } from 'react'
import './App.css'

import Verse from './Verse'

class App extends Component {

  constructor () {
    super()

    this.state = {
      verses: [],
      showAll: false
    }

    this.getLastVerse = this.getLastVerse.bind(this)
    this.addVerse = this.addVerse.bind(this)
    this.showAllVerses = this.showAllVerses.bind(this)
    this.clearVerses = this.clearVerses.bind(this)
    this.renderInputs = this.renderInputs.bind(this)
    this.renderAllVerses =  this.renderAllVerses.bind(this)
  }

  getLastVerse () {
    const verses = [...this.state.verses]
    return verses.pop()
  }

  addVerse (data) {
    const verses = [...this.state.verses, data]
    console.log('App.verses: ' + JSON.stringify(verses))
    this.setState({verses})
  }

  showAllVerses () {
    const showAll = !this.state.showAll
    this.setState({showAll})
  }

  clearVerses () {
    this.setState({verses: []})
  }

  renderInputs () {
    const lastVerse = this.getLastVerse()
    return (
      <div>
        <p>{lastVerse}</p>
        <Verse onAddVerse={this.addVerse} />
      </div>
    )
  }  

  renderAllVerses () {
    return this.state.verses.map((v) => <p>{v}</p> )
  }

  render() {
    const inputs = !this.state.showAll ? this.renderInputs() : this.renderAllVerses()
    const showBtnLabel = this.state.showAll ? 'Hide All Verses' : 'Show All Verses'
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exquisite Corpse</h1>
          <div className="tag">A classic writing game</div>
        </header>
        {inputs}
        <div className="controls">
          <div className="btn" onClick={this.showAllVerses}>{showBtnLabel}</div>
          <div className="btn" onClick={this.clearVerses}>CLEAR</div>
        </div>
      </div>
    );
  }
}

export default App;
