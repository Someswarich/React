import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from "./components/counter"
import {Message} from "./components/namedexport"

function App() {
  return(
    <div>
      <Count/>
      <Message/>
    </div>
  )
}

export default App
