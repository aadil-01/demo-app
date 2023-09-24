import Navbar from '../navbar/Navbar'
import './Screen.scss'

const Screen = ({component}) => {
    return (
        <div className="screen ocpy">
            <div className='ocpy nav'><Navbar /></div>
            <div className='ocpy comp'>{component}</div>
        </div>
    )
}

export default Screen
