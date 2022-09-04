import styled from 'styled-components'

export const InputText = styled.input`
  border: 0.1rem solid var(--light);
  border-radius: 0.4rem;
  height: 4.2rem;
  margin-right: 1rem;
  width: 24.5rem;
  padding: 1.2rem;
  outline: 0.1rem solid var(--light);
  border: none;

  :focus-visible {
    outline: 0.1rem solid var(--orange);
  }

  :disabled {
    outline: 0.1rem solid var(--disabled);
  }
`
export const SendButton = styled.button`
  width: 7rem;
  height: 4.2rem;
  color: var(--white);
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4rem;

  background: linear-gradient(180deg, #ef6c00 0%, #c0661c 100%);
  border-radius: 0.4rem;
  border: none;

  :disabled {
    background: var(--disabled);
  }
`
export const InLine = styled.div`
  display: flex;
`
