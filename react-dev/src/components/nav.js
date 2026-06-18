import './nav.css';

function Nav() {
    return (
        <nav className="nav"> 
            <ul className="nav-list">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function NavMobile() {
    return (
        <nav className="nav-mobile">
            <ul className="nav-list-mobile">
                <li className="nav-item-mobile"><a href="#">Home</a></li>
                <li className="nav-item-mobile"><a href="#">About</a></li>
                <li className="nav-item-mobile"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;