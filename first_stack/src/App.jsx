import { useState } from 'react'
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
                <h5 className='input-prompt'>Enter Username: </h5><input className='name-input'></input>
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
