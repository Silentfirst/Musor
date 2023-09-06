import {NavLink} from 'react-router-dom'

function NaviBar() {
  return (
    <nav className="navbar">
        <ul>
            <li >
                <NavLink to='home'>Home</NavLink>
            </li>
            <li>
                <NavLink to='search'>Search</NavLink>
            </li>
            <li>
                <NavLink to='profile'>Profile</NavLink>
            </li>

        </ul>
    </nav>
  )
}

export default NaviBar ;
