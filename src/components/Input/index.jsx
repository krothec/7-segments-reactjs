import { InputText, SendButton, InLine } from './style'
import { Context } from '../../context/Context'
import { useState, useContext } from 'react'

function Input() {
  const context = useContext(Context)

  return (
    <InLine>
      <InputText
        type="text"
        placeholder="Digite o palpite"
        value={context.playerNumber}
        disabled={context.endGame}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            context.handlePlayerNumber()
          }
        }}
        onChange={(e) => context.setPlayerNumber(e.target.value)}
      />
      <SendButton
        onClick={() => context.handlePlayerNumber()}
        disabled={context.endGame}
      >
        <p>ENVIAR</p>
      </SendButton>
    </InLine>
  )
}

export default Input
