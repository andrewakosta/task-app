import React, {useState, useContext} from 'react'
import ContextProject from '../../context/projects/ContexProject'


const NewProjectForm = () => {
    
    //Get state fof form 
   
    const ContextProyect_ = useContext(ContextProject)

   
    const  {form, showForm} = ContextProyect_
  
    const [project, saveProject] = useState({
        name:''
    })

    const {name} = project

    const handleInput = e => {
        saveProject({
            ...project,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault()

    }

    return ( 
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={()=> showForm()}
            >
                New Project
            </button>
            {
                form 
            ?
                <form 
                className='formulario-nuevo-proyecto'
                onSubmit={handleSubmit}
                >
                <input 
                    type="text"
                    className='input-text'
                    placeholder='Name of Project'
                    name='name'
                    value={name}
                    onChange={handleInput}
                />
                <input 
                    type="submit"
                    className='btn btn-primario btn-block'
                    value='Add Project'
                />

            </form>
            : 
                null
            }
        </>
     );
}
 
export default NewProjectForm;