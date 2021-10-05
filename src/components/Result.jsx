import React from 'react'

const Result = ({textValidated}) => {
    return (
        <div className="">
            <h1>Coincidencias</h1>
            {textValidated && Array.from(textValidated).map((text,index)=>(
                <li key={index}>{text}</li>
            ))}
        </div>
    )
}

export default Result
