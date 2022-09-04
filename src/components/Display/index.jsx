import { Content, Message, ButtonNewGame, DisplayBox } from './style'
import { Context } from '../../context/Context'
import { useContext } from 'react'
import { ArrowClockwise } from 'phosphor-react'
import SegmentsDisplay from '../SegmentsDisplay'
import InitialState from '../SegmentsDisplay/InitialState'

function Display() {
  const context = useContext(Context)
  const { display, handleSetNewGame, numbersMap, colorMessage, message } =
    context
  const arrayDisplay = display && Array.from(display)

  return (
    <Content>
      <Message color={colorMessage}>{message}</Message>
      <DisplayBox>
        {!arrayDisplay && <InitialState />}
        {arrayDisplay &&
          arrayDisplay.map((numDisp) =>
            numbersMap.map((numMap) => {
              if (numDisp * 1 === Object.keys(numMap) * 1) {
                return <SegmentsDisplay props={Object.values(numMap)} />
              } else return false
            })
          )}
      </DisplayBox>
      {context.endGame && (
        <ButtonNewGame onClick={() => handleSetNewGame()}>
          <ArrowClockwise
            weight="bold"
            size={20}
            style={{ marginRight: '4px' }}
          />
          NOVA PARTIDA
        </ButtonNewGame>
      )}
    </Content>
  )
}

export default Display
