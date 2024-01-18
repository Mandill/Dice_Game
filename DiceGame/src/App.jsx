import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Game from './components/Game'

function App() {
  const [userStatus, setUserStatus] = useState(false)
  const toggleGamePlay = () =>
  {
    setUserStatus((prev)=>!prev)
  } 
  return (
    <>
    {userStatus?<Game/>:<Hero toogle={toggleGamePlay}/>}
    </>
  )
}

export default App
