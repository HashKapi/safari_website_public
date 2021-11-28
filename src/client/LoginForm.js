import { useState } from 'react';
import {Link} from 'react-router-dom'
import  Axios  from 'axios';

const LoginForm = ({
                        toggleForm, 
                        setToggleForm,
                        openForm, 
                        loginStatus, 
                        setLoginStatus, 
                        setUsername, 
                        email, 
                        password,
                        setEmail,
                        setPassword 
                    }
) => {
    
    const [loginMessage, setLoginMessage] = useState('')
    const loginUser = (e) => {
        e.preventDefault()
        Axios.post('your fetch route', {
            email: email,
            password: password
        }).then(res => {
            setLoginStatus(res.data.loginStatus)
            setLoginMessage(res.data.loginMessage)
            setUsername(res.data.username)
        }).catch(error => console.log(error))
    }

    return (
        <div className={`login-form-container ${toggleForm && !loginStatus ? 'active' : ''}`}>
            <i className="fas fa-times" id='form-close' onClick={openForm}></i>

            <form onSubmit={e => loginUser(e)}>
                <h3>login</h3>
                <input 
                    type="email" 
                    className='box'
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    placeholder='enter your email'
                />
                <input 
                    type="password" 
                    className='box'
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    placeholder='enter your password'
                />
                <button className="btn" type='submit'>login now</button>
                <p>{loginMessage}</p>
                <input type="checkbox" id='remember'/>
                <label htmlFor='remember'>remember me</label>
                <p>forget password? <a href="#home">click here</a></p>
                <p>don't have an account? <Link to="/register" onClick={() => setToggleForm(false)}>register now</Link></p>
            </form>
        </div>
     );
}
 
export default LoginForm;