import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HTTPHooks() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Hello World!',
            body: 'Working as expected',
            userId: 27,
        }).then(response => {console.log(response)})
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(Array.isArray(response.data)
                ? response.data : [response.data]);
            })
            .catch(error => {
                setError(error.message);
            })
    }, [])

    return (
        <div>
            <button onClick={postToApi}>Submit Post</button>
            <h2>Posts:</h2>
            {posts.length ? (posts.map(post => (
                <div key={post.id}>
                    <h2>{post.id}. {post.title}</h2>
                    <h4>By User ID {post.userId}</h4>
                    <p>{post.body}</p>
                    <hr />
                </div>
            ))) : (error
                ? <p>Error: {error}</p> : <h4>Loading Posts...</h4>)}
        </div>
    )

}

export default HTTPHooks