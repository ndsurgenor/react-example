import React from 'react'
import Book from './Book'

function RenderingLists() {

    const bookList = [
        'To Kill A Mockingbird',
        'The Great Gatsby',
        'Catch-22'
    ]

    const bookDetails = [
        {
            title: 'To Kill A Mockingbird',
            author: 'Harper Lee',
            pages: 281
        },
        {
            title: 'The Great Gatsby',
            author: 'F Scott Fitzgerald',
            pages: 218
        },
        {
            title: 'Catch-22',
            author: 'Jospeh Heller',
            pages: 334
        },
    ]

    return (
        <div>
            {bookList.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr />
            {bookDetails.map(book => {
                return <Book key={book.title} book={book}/>
            })}
        </div>
    )

}

export default RenderingLists