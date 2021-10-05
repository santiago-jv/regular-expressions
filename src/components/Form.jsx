import React, { useState } from 'react'

const Form = ({setTextValidated}) => {
    const [formData, setFormData] = useState({
        text:'',
        regularExpression:''
    });
    const [error, setError] = useState(null)

    const handleInputs = (event) => {
        setError(null)
        setFormData( {
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    const validateRegExp = (event) => {
        event.preventDefault()
        try {
            const regExpression = new RegExp(formData.regularExpression, 'g')
            setTextValidated(formData.text.match(regExpression))
        }
        catch(error) {
            setError("Expresión regular inválida. " + error.message )
        }
    }
    
    return (
        <div className="form-container">
            <form onSubmit={validateRegExp}>
                <label htmlFor="text">Texto:</label>
                <input id="text" name="text" type="text" defaultValue={formData.text} onChange={handleInputs}/>
                <label htmlFor="regularExpression">Expresión regular:</label>
                <input id="regularExpression" name="regularExpression" type="text" defaultValue={formData.regularExpression} onChange={handleInputs}/>
                <p>{error && error}</p>	
                <button>Aplicar validación</button>
            </form>
        </div>
    )
}

export default Form
