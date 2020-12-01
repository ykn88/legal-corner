import React from 'react'
import Link from 'next/link'

const Unauthorized = () => {
    return (
        <div>
            <h1>You are not authorized to view this page</h1>
            <Link href='/'>
                <a>Go back to home</a>
            </Link>
        </div>
    )
}

export default Unauthorized
