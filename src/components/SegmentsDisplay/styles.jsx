import styled from 'styled-components'
export const Display = styled.div`
  position: relative;
  width: 8rem;
  height: 13rem;
`

export const SegmentA = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  //background: var(--disabled);
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  left: 34px;
  top: -10px;
  transform: rotate(90deg);
`

export const SegmentB = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  /* background: var(--disabled); */
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  top: 15px;
  left: 64px;
`

export const SegmentC = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  /* background: var(--disabled); */
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  top: 63px;
  left: 64px;
`
export const SegmentD = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  /* background: var(--disabled); */
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;

  top: 86px;
  left: 34px;

  transform: rotate(90deg);
`
export const SegmentE = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  /* background: var(--disabled); */
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  top: 63px;
  left: 4px;
`
export const SegmentF = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  /* background: var(--disabled); */
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;

  top: 15px;
  left: 4px;
`
export const SegmentG = styled.div`
  width: 1.174rem;
  height: 4.697rem;
  /* background: var(--disabled); */
  background: ${(props) => props.color};
  color: var(--disabled);

  position: absolute;
  top: 39px;
  left: 34px;
  transform: rotate(90deg);
`
