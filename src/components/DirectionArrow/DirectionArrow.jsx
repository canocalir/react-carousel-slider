import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import { Arrow } from '../styled'

const DirectionArrow = ({type}) => {
    
    const conditionalArrow = () => {
        if(type === 'prev') return <BsFillArrowLeftCircleFill/>
        if(type === 'next') return <BsFillArrowRightCircleFill/>
    }

  return (
    <Arrow>
    {conditionalArrow()}
    </Arrow>
  )
}

export default DirectionArrow