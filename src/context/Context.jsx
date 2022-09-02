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
    setDisplay('000')
  }

  function handlePlayerNumber() {
    setPlayerNumber('')
    const playerNumberIsInt = Number.isInteger(parseFloat(playerNumber))
    if (isNaN(playerNumber) || !playerNumberIsInt) {
      setMessage('Digite apenas números inteiros.')
      setDisplay('err')
    } else {
      if (parseInt(playerNumber) > apiNumber) {
        debugger
        setMessage('É menor')
        setDisplay(playerNumber)
      } else if (parseInt(playerNumber) < apiNumber) {
        setMessage('É maior')
        setDisplay(playerNumber)
      } else if (parseInt(playerNumber) === apiNumber) {
        setMessage('Você acertou!')
        setDisplay(playerNumber)
        setEndGame(true)
      } else {
        setMessage('Ooops, isto não deveria ter acontecido!')
        setDisplay('err')
      }
    }
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
      }}
    >
      {children}
    </Context.Provider>
  )
}
