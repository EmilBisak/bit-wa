import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
    const title = props.myTitle
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="../../../../public/index.html" className="brand-logo center">{title}</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;

Header.propTypes = {
    myTitle: PropTypes.string.isRequired
};

Header.defaultProps = {
    myTitle:'React Users'
};