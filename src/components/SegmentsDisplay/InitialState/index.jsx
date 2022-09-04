import {
  SegmentA,
  SegmentB,
  SegmentC,
  SegmentD,
  SegmentE,
  SegmentF,
  SegmentG,
  Display,
} from '../styles'

function SegmentsDisplay() {
  return (
    <Display className="Display">
      <SegmentA color={'var(--disabled)'}></SegmentA>
      <SegmentB color={'var(--disabled)'}></SegmentB>
      <SegmentC color={'var(--disabled)'}></SegmentC>
      <SegmentD color={'var(--disabled)'}></SegmentD>
      <SegmentE color={'var(--disabled)'}></SegmentE>
      <SegmentF color={'var(--disabled)'}></SegmentF>
      <SegmentG color={'var(--disabled)'}></SegmentG>
    </Display>
  )
}

export default SegmentsDisplay
