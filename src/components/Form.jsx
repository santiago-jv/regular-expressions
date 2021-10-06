import React, { useState } from 'react'
import { initialState } from '../constants';


const Form = ({setCoincidences}) => {
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState(null)
    
    const handleInputs = (event) => {
        
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
        setError(null)  
        
        if(!fieldsAreEmpty()){ 
               
            try {
                const regExpression = new RegExp(formData.regularExpression,'g')
                
                setCoincidences(formData.text.match(regExpression))
            }
            catch(error) {
                setError("Expresión regular inválida. " + error.message )
            }
        }
        else{
            setError("Debes llenar los campos primero.")
        }
    }
    const cleanFields = ()=> {
        setFormData(initialState)
    }
    
    return (
        <div className="form-container mt-4">
            <form onSubmit={validateRegExp} id="liveAlertPlaceholder">
                <div class=" row">
                    <div class="col">
                        <label className="mb-2" htmlFor="text">Ingrese Texto:</label>
                        <input className="form-control" id="text" name="text" type="text" value={formData.text} onChange={handleInputs}/>
                    </div>
                    <div class="col">
                        <label className="mb-2" htmlFor="regularExpression">Expresión regular:</label>
                        <input id="regularExpression" className="form-control" name="regularExpression" type="text" value={formData.regularExpression} onChange={handleInputs}/>
                        
                    </div>
                </div>

                    {error &&   <div className="alert w-50 my-3 alert-danger d-flex align-items-center" role="alert">
                                    {error}
                                </div>
                    }
                   
                <div className="row container">
                    <div className="col-md-3">
                        <button className="btn btn-primary mt-3 mr-5 " >
                        <i class="fas fa-check-circle "></i>
                            Aplicar Validación</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-danger mt-3 " onClick={cleanFields}>
                        <i class="fas fa-times-circle"></i> Limpiar Campos</button>

                    </div>
                </div>



                
            </form>
           
        </div>
    )
}

export default Form
