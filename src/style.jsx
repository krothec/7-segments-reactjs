import styled from 'styled-components'

export const Canvas = styled.div`
  position: relative;
`

export const Container = styled.main`
  margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36.5rem;
  height: 58.8rem;
  padding: 3rem;

  background: linear-gradient(180deg, #eeeeee 0%, #ffffff 100%);
`

export const Line = styled.div`
  margin-top: 0.8rem;
  width: 20.5rem;
  border-top: solid 0.1rem var(--light);
`

export const HeaderBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonHelp = styled.button`
  position: absolute;
  bottom: 0px;
  left: 90px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  background: var(--orange);
`
