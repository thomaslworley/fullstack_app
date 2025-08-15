import { useState } from 'react'
import './components/AccountLogin'
import './App.css'
import AccountLogin from './components/AccountLogin'

function App() {
  const [toggleLogin, setToggleLogin] = useState(false);

  const handleClick = () => {
    setToggleLogin(!toggleLogin);
  }

  return (
    <>
    <div className='app-container'>
      <div className='main-banner'>
        <AccountLogin toggleLogin={toggleLogin}/>
        <p className='banner-words' onClick={handleClick}>Login</p>
        </div>
    </div>
    </>
  )
}

export default App
