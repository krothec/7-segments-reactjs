import { Content, Message, ButtonNewGame, DisplayBox } from './style'
import { Context } from '../../context/Context'
import { useContext } from 'react'
import { ArrowClockwise } from 'phosphor-react'
import SegmentsDisplay from '../SegmentsDisplay'

function Display() {
  const context = useContext(Context)
  const { display, handleSetNewGame, numbersMap } = context
  const arrayDisplay = display && Array.from(display)

  return (
    <Content>
      <Message>{context.message}</Message>

      <DisplayBox>
        {numbersMap.map(
          (nMap, idx) =>
            arrayDisplay &&
            arrayDisplay.map((nDisp) => {
              if (nDisp * 1 === Object.keys(nMap) * 1) {
                return <SegmentsDisplay props={Object.values(nMap)} key={idx} />
              }
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
