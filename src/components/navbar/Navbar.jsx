import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    const [routes, setRoutes] = useState([
        {name: 'Home', icon: 'home', path: '/home', active: true, key: 0},
        {name: 'Notes App', icon: 'done', path: '/app', active: false, key: 1},
        {name: 'History', icon: 'history', path: '/history', active: false, key: 2}
    ])

    const location = useLocation()
    const navigate = useNavigate()

    const onClick = (path) => {
        navigate(path)
        checkRoutes(path)
    }

    const checkRoutes = (path) => {
        setRoutes((prev) => {
            return prev.map(p => {
                p.active = p.path === (path !==undefined ? path : location.pathname)
                return p
            })
        })
    }

    useEffect(()=>{
        checkRoutes()
    },[])

    return (
        <div className="navbar-outer-container ocpy">
            <div className="navbar-inner-container">
                <div className="navbar flx cntr">
                    {routes.map((route) => {
                        return (
                            <div className={`navbar-item flx cntr ${route.active ? 'active': ''}`} title={route.name}
                                onClick={()=>onClick(route.path)} key={route.key}>
                                <span className='material-symbols-outlined'>{route.icon}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar
