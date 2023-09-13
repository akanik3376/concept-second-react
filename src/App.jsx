import { useState } from 'react'
import './App.css'
import Haird from './Components/Haird/Haird'
import Players from './Components/Players/Players'

function App() {

  const [addHair, setAddHair] = useState([]);

  const HandelHairBtn = (player) => {
    const addNewHair = [...addHair, player]
    setAddHair(addNewHair)
  }


  return (
    <>

      <h1 className='text-center'>Vite + React</h1>
      <div className='container flex mx-auto'>
        <Players HandelHairBtn={HandelHairBtn}></Players>
        <Haird addHair={addHair}></Haird>
      </div>
    </>
  )
}

export default App
