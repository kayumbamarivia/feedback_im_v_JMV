import './nav.css'
import { FaAd, FaSearch, FaAddressBook } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { MdNotifications } from 'react-icons/md'

import logo from './images/rca.jpg'
import profile from './images/Edina.jpg'

const Navbar = ()=> {
    return (
        <div className="nav">
            <div className="navleft">
                <span className="search1-icon">
                    <FiMenu size={20}/>
                </span>
                <img src={logo} alt="logo"/>
            </div>
            <div className="navmiddle">
                <input type="text" name="search" id="search" placeholder='Search ...' />
                <div className="icon-holder">
                    <span className="search-icon">
                        <FaSearch size={25}/>
                    </span>
                </div>
            </div>
            <div className="navright">
                <span className="icon-holder">
                    <MdNotifications size={40}/>
                </span>
                <div className="personprofile">
                    <img src={profile} alt="Profile picture" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;