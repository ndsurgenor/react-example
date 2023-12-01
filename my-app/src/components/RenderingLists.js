import React from 'react'

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
                return <h2>{book}</h2>
            })}
            <hr />
            {bookDetails.map(book => {
                return (
                    <div>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>)

            })}
        </div>
    )

}

export default RenderingLists