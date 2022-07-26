import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from './jdi/users.json'
import CardUsers from './components/CardUsers'
import colors from "./utils/colors"

function App() {

console.log(colors)

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let userRandom = getRandomElement(users)
  let colorRandom = getRandomElement(colors)
  
  const [randomUser, setRandomUser] = useState(userRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

  const obStyle ={
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    userRandom = getRandomElement(users)
    colorRandom = getRandomElement(colors)

    setRandomUser(userRandom)
    setRandomColors(colorRandom)
  }

  return (
    <div className="App" style={obStyle}>
      <CardUsers 
      randomUser={randomUser} 
      randomColors={randomColors} 
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
