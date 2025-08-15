import { React } from 'react'
import '../App.css'

function AccountLogin ({toggleLogin}) {
    if (!toggleLogin) { return null};

    const checkAdmin = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            fetch('http://127.0.0.1:8000/authenticate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            .then(response => {
                if (!response.ok) {
                    return console.error(response)
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
                    <h5 className='input-user' id='username'>Enter Username: </h5><input className='name-input'></input>
                </div>

                <div className='prompt'>
                    <h5 className='input-pass' id='password'>Enter Password: </h5><input className='pass-input'></input>
                </div>

                <div className='prompt'>
                    <button onClick={() => checkAdmin()}>Login</button>
                </div>
            </div>
        </div>
        </>
    )
};

export default AccountLogin