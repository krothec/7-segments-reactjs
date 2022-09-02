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
import { Context } from '../../context/Context'
import { useContext } from 'react'

function SegmentsDisplay(mapNumber) {
  console.log('mapNumber', mapNumber)
  return (
    <Display className="Display">
      <SegmentA
        color={mapNumber && mapNumber.props[0][0] === 1 ? 'black' : '#DDDDDD'}
      ></SegmentA>
      <SegmentB
        color={mapNumber && mapNumber.props[0][1] === 1 ? 'black' : '#DDDDDD'}
      ></SegmentB>
      <SegmentC
        color={mapNumber && mapNumber.props[0][2] === 1 ? 'black' : '#DDDDDD'}
      ></SegmentC>
      <SegmentD
        color={mapNumber && mapNumber.props[0][3] === 1 ? 'black' : '#DDDDDD'}
      ></SegmentD>
      <SegmentE
        color={mapNumber && mapNumber.props[0][4] === 1 ? 'black' : '#DDDDDD'}
      ></SegmentE>
      <SegmentF
        color={mapNumber && mapNumber.props[0][5] === 1 ? 'black' : '#DDDDDD'}
      ></SegmentF>
      <SegmentG
        color={mapNumber && mapNumber.props[0][6] === 1 ? 'black' : '#DDDDDD'}
      ></SegmentG>
    </Display>
  )
}

export default SegmentsDisplay
