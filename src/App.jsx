import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { About } from './components/about/about'
import {Navbar} from './components/navbar/nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* header */}
    <Header/>
    {/* about */}
    <About/>
    {/* navbar */}
    <Navbar/>
    </>
  )
}

export default App
