import styled from 'styled-components'
export const Display = styled.div`
  position: relative;
  width: 8rem;
  height: 13rem;
`

export const SegmentA = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  left: 3.4rem;
  top: -1rem;
  transform: rotate(90deg);
`

export const SegmentB = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  top: 1.5rem;
  left: 6.4rem;
`

export const SegmentC = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  top: 6.3rem;
  left: 6.4rem;
`
export const SegmentD = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;

  top: 8.6rem;
  left: 3.4rem;

  transform: rotate(90deg);
`
export const SegmentE = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  top: 6.3rem;
  left: 0.4rem;
`
export const SegmentF = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  /* background: var(--disabled); */
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;

  top: 1.5rem;
  left: 0.4rem;
`
export const SegmentG = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  top: 3.9rem;
  left: 3.4rem;
  transform: rotate(90deg);
`
