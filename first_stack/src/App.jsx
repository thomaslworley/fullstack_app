import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggleLogin, setToggleLogin] = useState(false)

  const handleClick = () => {
    setToggleLogin(!toggleLogin)
  }

  return (
    <>
    <div className='app-container'>
      <div className='main-banner'>
        {toggleLogin !== true ? (
        <>
        <p className='banner-words' onClick={handleClick}>Login</p>
        </> )
        : (
          <>
          <div className='login-container'>
            <div className='login-wrapper'>
              <div className='prompt'>
                Enter Username: <input></input>
              </div>
            </div>
          </div>
        </>)}
        </div>
    </div>
    </>
  )
}

export default App
