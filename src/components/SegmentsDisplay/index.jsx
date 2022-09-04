import { Context } from '../../context/Context'
import { useContext } from 'react'
import {
  SegmentA,
  SegmentB,
  SegmentC,
  SegmentD,
  SegmentE,
  SegmentF,
  SegmentG,
  Display,
} from './styles'

function SegmentsDisplay(mapNumber) {
  const context = useContext(Context)
  const { colorDisplay } = context

  return (
    <Display className="Display">
      <SegmentA
        color={
          mapNumber && mapNumber.props[0][0] === 1
            ? `${colorDisplay}`
            : 'var(--disabled)}'
        }
      ></SegmentA>
      <SegmentB
        color={
          mapNumber && mapNumber.props[0][1] === 1
            ? `${colorDisplay}`
            : 'var(--disabled)}'
        }
      ></SegmentB>
      <SegmentC
        color={
          mapNumber && mapNumber.props[0][2] === 1
            ? `${colorDisplay}`
            : 'var(--disabled)}'
        }
      ></SegmentC>
      <SegmentD
        color={
          mapNumber && mapNumber.props[0][3] === 1
            ? `${colorDisplay}`
            : 'var(--disabled)}'
        }
      ></SegmentD>
      <SegmentE
        color={
          mapNumber && mapNumber.props[0][4] === 1
            ? `${colorDisplay}`
            : 'var(--disabled)}'
        }
      ></SegmentE>
      <SegmentF
        color={
          mapNumber && mapNumber.props[0][5] === 1
            ? `${colorDisplay}`
            : 'var(--disabled)}'
        }
      ></SegmentF>
      <SegmentG
        color={
          mapNumber && mapNumber.props[0][6] === 1
            ? `${colorDisplay}`
            : 'var(--disabled)}'
        }
      ></SegmentG>
    </Display>
  )
}

export default SegmentsDisplay
