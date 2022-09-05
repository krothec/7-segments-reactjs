import { useEffect } from 'react'
import { createContext, useState } from 'react'
import axios from 'axios'
import json from '../assets/numbers.json'
export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const numbersJson = json
  const [playerNumber, setPlayerNumber] = useState('')
  const [apiNumber, setApiNumber] = useState(0)
  const [display, setDisplay] = useState()
  const [message, setMessage] = useState('')
  const [endGame, setEndGame] = useState(false)
  const [colorMessage, setColorMessage] = useState()
  const [colorDisplay, setColorDisplay] = useState()
  const [numbersMap] = useState(numbersJson)

  useEffect(() => {
    handleNewGame()
  }, [])

  function handleNewGame() {
    axios
      .get(
        'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300'
      )
      .then((response) => setApiNumber(response.data.value))
  }

  function handleSetNewGame() {
    setEndGame(false)
    setMessage('')
    handleNewGame()
    setDisplay()
    setColorDisplay('')
    setColorMessage('')
  }

  function handlePlayerNumber() {
    setPlayerNumber('')
    const playerNumberIsInt = Number.isInteger(parseFloat(playerNumber))
    if (isNaN(playerNumber) || !playerNumberIsInt) {
      setMessage('ERRO')
      setDisplay('502')
      setColorMessage('var(--red)')
      setColorDisplay('var(--red)')
      setEndGame(true)
      return
    }
    if (parseInt(playerNumber) > apiNumber) {
      setMessage('É menor')
      setDisplay(playerNumber)
      setColorMessage('var(--orange)')
      setColorDisplay('var(--dark)')
      return
    }
    if (parseInt(playerNumber) < apiNumber) {
      setMessage('É maior')
      setDisplay(playerNumber)
      setColorMessage('var(--orange)')
      setColorDisplay('var(--dark)')
      return
    }
    if (parseInt(playerNumber) === apiNumber) {
      setMessage('Você acertou!')
      setDisplay(playerNumber)
      setColorMessage('var(--green)')
      setColorDisplay('var(--green)')
      setEndGame(true)
      return
    }

    setMessage('ERRO')
    setDisplay('err')
    setColorMessage('var(--red)')
    setColorDisplay('var(--red)')
  }

  return (
    <Context.Provider
      value={{
        playerNumber,
        apiNumber,
        setPlayerNumber,
        handlePlayerNumber,
        message,
        display,
        handleSetNewGame,
        endGame,
        numbersMap,
        colorMessage,
        colorDisplay,
      }}
    >
      {children}
    </Context.Provider>
  )
}
