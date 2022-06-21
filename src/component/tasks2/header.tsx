import * as React from 'react';
import './header.css';

const Header = () => {
    return(
        <header className='header-container'>
            <div className='cont'>
                <h4 className='vision'>THE VISION</h4>
                <h1 className=''>Our <span className='goal'>goal</span>.</h1>
                <h5 className='text'>Something's wrong. We have an idea. The idea of ​​building and</h5>
                <h5 className='text-2'>buying communities.</h5>
            </div>
        </header>
    )
}
export default Header;