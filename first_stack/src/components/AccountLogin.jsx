import { React, useRef } from 'react'
import '../App.css'

function AccountLogin ({toggleLogin}) {
    const userRef = useRef('');
    const passRef = useRef('');


    if (!toggleLogin) { return null};

    const checkAdmin = (username, password) => {
        console.log(username, password)

        try {
            return fetch('http://127.0.0.1:8000/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            .then(response => {
                if (!response.ok) {
                    return console.log(response)
                };
                return response.json()
            })

            .then(output => {console.log(output)})

            .catch(error => {console.error(error)});


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <div className='login-container'>
            <div className='login-wrapper'>
                <div className='prompt'>
                    <h5 className='input-user' id='username' onChange={() => {userRef.current = document.getElementById('username')}}>Enter Username: </h5><input className='name-input'></input>
                </div>

                <div className='prompt'>
                    <h5 className='input-pass' id='password' onChange={() => {passRef.current = document.getElementById('password')}}>Enter Password: </h5><input className='pass-input' type='password'></input>
                </div>

                <div className='prompt'>
                    <button onClick={() => checkAdmin(userRef.current, passRef.current)}>Login</button>
                </div>
            </div>
        </div>
        </>
    )
};

export default AccountLogin