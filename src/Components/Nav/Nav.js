import { NavLink } from 'react-router-dom';
import '../Nav/Nav.scss';

const Nav = () => {
  return (
    <nav className='main-nav'>
      <div className='nav-list'>
        <ul>
          <li>
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/suppliers' className='nav-link'>Suppliers</NavLink>
          </li>
          <li>
            <NavLink to='/vegetables' className='nav-link'>Vegetables</NavLink>
          </li>
          <li>
            <NavLink to='/leftovers' className='nav-link'>Leftovers</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav