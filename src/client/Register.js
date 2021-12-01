import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";

const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [userRegistered, setUserRegistered] = useState(false)

    const submitUser = (e) => {
        e.preventDefault()
        Axios.post('your fetch route', {
            username: name,
            email: email,
            password: password
        }).then(res => {
            if (res.data) {
                setUserRegistered(true) 
            }
            setTimeout(() => navigate('/#home'), 3000)
        }).catch(error => console.log(error))
    }

    // Starting up db on website load
    useEffect(() => {
        Axios.get('your route')
            .then(res => console.log('CONNECTED TO DATABASE'))
                .catch(err => console.log(err))
    },[])

    return ( 
        <section className='register'>
            <h1 className="heading">
                <span>r</span>
                <span>e</span>
                <span>g</span>
                <span>i</span>
                <span>s</span>
                <span>t</span>
                <span>e</span>
                <span>r</span>
            </h1>
            <form onSubmit={e => submitUser(e)}>
                <div className="inputBox">
                    <h3>Username:</h3>
                    <input 
                        type="text"
                        value={name}
                        required
                        onChange={e => setName(e.target.value)}  
                        placeholder='username...'
                    />
                </div>

                <div className="inputBox">
                    <h3>Email:</h3>
                    <input 
                        type="email"
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}  
                        placeholder='email...'
                    />
                </div>
                
                <div className="inputBox">
                    <h3>password:</h3>
                    <input 
                        type="password"
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}  
                        placeholder='password...'
                    />
                </div>
                <button type='submit' className="btn">Register</button>
                {userRegistered &&
                    <div className="inputBox">
                        <h3>Hello, {name}! You are registered!:)</h3>
                    </div>
                }
            </form>
        </section>
     );
}
 
export default Register;