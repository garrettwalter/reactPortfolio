import React from 'react';

function ContactLine(props) {
    return (
        <div>
            <div className="container p-0 m-0">
                <div className="row">
                    <div className="col-2 pr-0 mr-0">
                        <img id="icon" alt={props.alt} src={props.src}/>
                    </div>
                    <div className="col-10 px-0 mx-0 pb-3">
                        <a className="nav-link contactLink" href={props.href}>{props.children}</a>
                    </div>
                </div>                            
            </div>
        </div>
    );
}

export default ContactLine;