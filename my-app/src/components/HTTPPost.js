import React, { Component } from 'react'
import axois from 'axios'

export class HTTPPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            apiResponse: null,
        }
    }

    postToApi = () => {
        axois.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Hello World!',
            body: 'Working as expected',
            userId: 27,
        }).then(response => {
            this.setState({
                apiResponse: response.data,
            })
        })
    }

    render() {
        const { apiResponse } = this.state
        return (
            <div>
                <button onClick={this.postToApi}>Submit Post</button>
                {apiResponse ? (
                    <div>
                        <h1>{apiResponse.title}</h1>
                        <p>Post ID: {apiResponse.postId}</p>
                        <p>{apiResponse.body}</p>
                        <p>User ID: {apiResponse.userId}</p>
                    </div>) : (<p>Please click the button above</p>)}
            </div>
        )
    }

}

export default HTTPPost