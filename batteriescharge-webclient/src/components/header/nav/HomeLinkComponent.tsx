import { NavLink } from 'react-router-dom';

const HomeLink = ({ key = 'home-link', onClick = () => {} }) => {
  return (
    <NavLink key={key} to='/' className='nav-link pr-4' onClick={onClick}>Home</NavLink>
  )
}

export default HomeLink;