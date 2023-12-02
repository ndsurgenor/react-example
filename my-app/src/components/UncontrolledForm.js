import React, { Component } from 'react'

export class UncontrolledForm extends Component {

    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.selectCategory = React.createRef();
        this.textComments = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Please complete the form below</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input id="id-name" name="name" type="text" ref={this.inputName} />
                    </div>
                    <div>
                        <label htmlFor="id-category">Category</label>
                        <select id="id-category" name="category" ref={this.selectCategory}>
                            <option value="website">Website</option>
                            <option value="website">Order</option>
                            <option value="website">General</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea id="id-comments" name="comments" ref={this.textComments} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default UncontrolledForm