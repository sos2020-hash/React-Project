import React from 'react'
import { Link } from 'react-router-dom'

const ShowBtn = ({text, path}) => {
    return (
        <>
            <Link to={path}><button>{text}</button></Link>
        </>
    )
}

export default ShowBtn
