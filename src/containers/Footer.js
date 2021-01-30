import React from 'react';

function Footer(props) {
    return (
        <footer className="footer sticky-bottom">
            <nav className="navbar-expand">
            <ul className="navbar-nav justify-content-evenly">
            <li className="nav-item">
                        <img 
                        id="icon" 
                        src="https://images.vexels.com/media/users/3/155690/isolated/preview/cfa6b24903a8af399de6c515baeb14fd-black-envelope-square-icon-by-vexels.png"
                        href="mailto:astronet@gmail.com"/>
                    </li>
            <li className="nav-item">
                        <img id="icon" 
                        src="https://i0.wp.com/jasonbgraham.com/wp-content/uploads/2020/04/jason-b-graham-linkedin-icon-square-0073b1-featured-image.png?fit=2000%2C2000&ssl=1"
                        href="https://www.linkedin.com/in/garrett-walter-63b2b81b5"/>
                    </li>
            <li className="nav-item">
                        <img id="icon" 
                        src="https://image.flaticon.com/icons/png/512/38/38401.png"
                        href="https://github.com/garrettwalter"/>
                    </li>
            </ul>
            </nav>
        </footer>
    );
}

export default Footer;