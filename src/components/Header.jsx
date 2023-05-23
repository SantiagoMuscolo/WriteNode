import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';


export const Header = () => {
    
    return (
        <header>
            <Link to="/" className='logo'>
                <img src={Logo} alt="WriteNode Logo" />
                <span>WriteNode</span>
            </Link>
            <nav className='nav'>
                <NavLink to='/' className='link'>Home</NavLink>
                        <NavLink to='/create' className='link'>Create</NavLink>
            </nav>
        </header>
    )
}
