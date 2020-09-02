import React from 'react'
const Login = () => {
    const onChange = e =>{
        console.log('redux')
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log in</h1>
                <form >
                    <div className="campo-form">
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email"
                            id='email'
                            placeholder='Insert your email'
                            onChange={onChange}
                            autoComplete='off'
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id='password'
                            placeholder='Insert yout password'
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block'
                               value='Log in' 
                        />

                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;