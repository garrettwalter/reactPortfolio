import React from 'react';
import ContactLine from '../../components/Contact/ContactLine';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3 blank"></div>
                <div className="col-sm-6">
                <ContactLine alt="email icon" 
                        src="https://images.vexels.com/media/users/3/155690/isolated/preview/cfa6b24903a8af399de6c515baeb14fd-black-envelope-square-icon-by-vexels.png"
                        href="mailto:astronet@gmail.com"
                        children="astronet@gmail.com"
                        />{ContactLine}
                <ContactLine alt="phone icon" 
                        src="https://images.vexels.com/media/users/3/156971/isolated/preview/8e4a7cfef02c7b5232f55fa6c10e9cd9-simple-telephone-square-icon-by-vexels.png"
                        children="678-435-3845"
                        />{ContactLine}
                <ContactLine alt="github icon" 
                        src="https://image.flaticon.com/icons/png/512/38/38401.png"
                        href="https://github.com/garrettwalter"
                        children="GitHub: garrettwalter"
                        />{ContactLine}
                <ContactLine alt="linkedin icon" 
                        src="https://i0.wp.com/jasonbgraham.com/wp-content/uploads/2020/04/jason-b-graham-linkedin-icon-square-0073b1-featured-image.png?fit=2000%2C2000&ssl=1"
                        href="https://www.linkedin.com/in/garrett-walter-63b2b81b5/"
                        children="LinkedIN: garrettwalter"
                        />{ContactLine}
                    {/* <div className="row" id="contentRow">
                        <img id="icon" src="https://image.flaticon.com/icons/png/512/38/38401.png"/>
                        <a className="nav-link contactLink" href="https://github.com/garrettwalter">GitHub: garrettwalter</a>
                    </div>
                    <div className="row" id="contentRow">
                        <img id="icon" src="https://i0.wp.com/jasonbgraham.com/wp-content/uploads/2020/04/jason-b-graham-linkedin-icon-square-0073b1-featured-image.png?fit=2000%2C2000&ssl=1"/>
                        <a className="nav-link contactLink" href="https://www.linkedin.com/in/garrett-walter-63b2b81b5/">LinkedIn: garrettwalter</a>
                    </div>
                    <div className="row" id="contentRow">
                        <img id="icon" src="https://images.vexels.com/media/users/3/155690/isolated/preview/cfa6b24903a8af399de6c515baeb14fd-black-envelope-square-icon-by-vexels.png"/>
                        <a className="nav-link float-left" href="mailto:gtwalter150@gmail.com">gtwalter150@gmail.com</a>
                    </div>
                    <div className="row" id="contentRow">
                        <img id="icon" src="https://images.vexels.com/media/users/3/156971/isolated/preview/8e4a7cfef02c7b5232f55fa6c10e9cd9-simple-telephone-square-icon-by-vexels.png"/>
                        <p className="nav-link contactLink" type="disabled">678-435-3845</p>
                    </div>
                    <p id="contactDirections">**Click text to be directed to link</p> */}
                </div>
                <div className="col-sm-3 blank"></div>
            </div>

        </div>
    );
}

export default Contact;