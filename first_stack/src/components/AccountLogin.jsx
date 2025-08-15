import { useState } from 'react'
import '../App.css'

function AccountLogin ({toggleLogin}) {
    if (toggleLogin) {
        <>
            <div className='login-container'>
                <div className='login-wrapper'>
                    <div className='prompt'>
                    <h5 className='input-prompt'>Enter Username: </h5><input className='name-input'></input>
                    </div>
                </div>
            </div>
        </>
    }

}

export default AccountLogin