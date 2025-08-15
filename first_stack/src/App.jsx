import { React, useState } from 'react'
import './components/AccountLogin'
import './App.css'
import AccountLogin from './components/AccountLogin'

function App() {
  const [toggleLogin, setToggleLogin] = useState(false);

  return (
    <>
    <div className='app-container'>
      <div className='main-banner'>
        {(!toggleLogin) ? <p className='banner-words' onClick={() => setToggleLogin(true)}>Login</p> : null}
      </div>
      <div className='app-wrapper'>
        <AccountLogin
        toggleLogin={toggleLogin}/>
       </div>
    </div>
    </>
  )
}

export default App
