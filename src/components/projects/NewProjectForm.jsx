import React, {useState} from 'react'

const NewProjectForm = () => {
 
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
            >
                New Project
            </button>
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
        </>
     );
}
 
export default NewProjectForm;