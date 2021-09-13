import React,{useState} from 'react'

const DateTime = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    return (
        <>
          {currentDate.toLocaleDateString()} 
        </>
    )
}

export default DateTime
