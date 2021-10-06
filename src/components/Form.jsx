import React, { useState } from 'react'
import { initialState } from '../constants';


const Form = ({setTextValidated}) => {
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState(null)
    
    const handleInputs = (event) => {
        setError(null)
        setFormData( {
            ...formData,
            [event.target.name]:event.target.value
        })
    }
    const fieldsAreEmpty = ()=> {
        return formData.regularExpression === "" || formData.text === ""
    }
    const validateRegExp = (event) => {
        event.preventDefault()
        
        if(!fieldsAreEmpty()){      
            try {
                const regExpression = new RegExp(formData.regularExpression,'g')
                console.log(formData.text.match(regExpression));
                setTextValidated(formData.text.match(regExpression))
            }
            catch(error) {
                setError("Expresión regular inválida. " + error.message )
            }
        }
        else{
            setError("Debes llenar los campos primero.")
        }
    }
    const cleanFields = ()=> setFormData(initialState)
    
    return (
        <div className="form-container">
            <form onSubmit={validateRegExp}>
                <label htmlFor="text">Texto:</label>
                <input className="controls" id="text" name="text" type="text" value={formData.text} onChange={handleInputs}/>
                <label htmlFor="regularExpression">Expresión regular:</label>
                <input id="regularExpression" name="regularExpression" type="text" value={formData.regularExpression} onChange={handleInputs}/>
                <p>{error && error}</p>	
                <button>Aplicar validación</button>
            </form>
            <button onClick={cleanFields}>Limpiar campos</button>
        </div>
    )
}

export default Form
