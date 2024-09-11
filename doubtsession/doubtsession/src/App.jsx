import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCase1 from './components/Usecase1'
import UseCase2 from './components/UseCase2'
import UseCase3 from './components/UseCase3'
import Usecase4 from './components/UseCase4'
import UseCase5 from './components/Usecase5'

function App() {

  return (
    <div className='container'>
      <h3>Hello world</h3>
      <UseCase1 />
      <UseCase2 />
      <UseCase3 />
      <Usecase4 />
      <UseCase5 />
    </div>
  )
}

export default App
