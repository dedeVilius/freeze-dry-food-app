import { Link, NavLink } from 'react-router-dom';
import '../Nav/Nav.scss';
import logo from '../../assets/img/logo.svg';

const Nav = () => {
  return (
    <nav className='main-nav'>
      <div className='brand-logo'>
        <Link to='/'><img src={logo} alt='Brand logo'></img></Link>
      </div>
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