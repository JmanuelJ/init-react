import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink 
              className={({isActivate}) => `nav-link ${isActivate ? 'active' : ''}`}
              to='/'>
                Home
              </NavLink>
              <NavLink 
              className={({isActivate}) => `nav-link ${isActivate ? 'active' : ''}`}
              to='/about'>
                About
              </NavLink>
              <NavLink 
              className={({isActivate}) => `nav-link ${isActivate ? 'active' : ''}`}
              to='/Login'>
                Login
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
