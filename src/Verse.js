import React, { Component } from 'react'
import './Verse.css'

class Verse extends Component {

	constructor (props) {
		super(props)

		this.state = {
			data: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit (evt) {
		evt.preventDefault()
		const data = this.state.data

		if (data.length > 0) {
			this.props.onAddVerse(data)
			this.setState({data: ''})
		} else {

		}
	}

	handleChange (evt) {
		const data = evt.target.value
		this.setState({data})
	}

	render() {
		return (
			<div className="verse">
				<textarea placeholder="Enter your verse ..." onChange={this.handleChange} value={this.state.data} /><br />
				<div className="btn submit" onClick={this.handleSubmit}>GO</div>
			</div>
		);
	}
}

export default Verse