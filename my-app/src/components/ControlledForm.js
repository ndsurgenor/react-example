import React, { Component } from 'react'

export class ControlledForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: 'Website',
            comments: '',
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Please complete the form below</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            id="id-name"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Category</label>
                        <select
                            id="id-category"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleCategoryChange}>
                            <option value="website">Website</option>
                            <option value="website">Order</option>
                            <option value="website">General</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                            id="id-comments"
                            name="comments"
                            value={this.state.comments}
                            onChange={this.handleCommentsChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default ControlledForm