import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from'@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <img className='logo' src={logo} alt="" />
                <span className="brand">Potato</span>
            </div>

        <ul className="nav-menu">
        <li><a href="#">CREATE YOUR OWN</a></li>
        <li><a href="#">SHOP CHIPS</a><FontAwesomeIcon className='chevrondown' icon={faChevronDown} /></li>
        <li><a href="#">SHOP BY CATEGORY</a><FontAwesomeIcon className='chevrondown' icon={faChevronDown} /></li>
        <li><a href="#">EXPLORE</a><FontAwesomeIcon className='chevrondown' icon={faChevronDown} /></li>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
        </ul>
        
        
         
        </nav>


    )
}

export default Navbar