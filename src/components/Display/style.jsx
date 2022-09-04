import styled from 'styled-components'

export const Content = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Message = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  letter-spacing: -0.1rem;
  height: 2rem;
  position: absolute;
  top: 17.4rem;
  color: ${(props) => props.color};
`
export const ButtonNewGame = styled.button`
  width: 13rem;
  height: 4.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 45rem;

  background: linear-gradient(180deg, #434854 0%, #9e9e9e 100%);
  border: none;
  border-radius: 0.4rem;
  color: var(--white);
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4rem;
`

export const DisplayBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
`
