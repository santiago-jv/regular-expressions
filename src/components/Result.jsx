import React from 'react'

const Result = ({coincidences}) => {
    return (
        <div className="mt-4 ">
            {coincidences ? <>
                <h4>Coincidencias</h4>
                <ul className="list-group list-group bg-light">
                {Array.from(coincidences).map((text,index)=>(
                    <li className="list-group-item" key={index}>{text}</li>
                ))}
                </ul>
                </>
            :
                <h4>No hay coincidencias</h4>
            }
            
        </div>
    )
}

export default Result
