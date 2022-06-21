import * as React from 'react';
import './navbar.css';

const NavBar = () => {
    return(
        <nav className="navbar-container fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="https://google.com">
                        <img className="gb_xc"
                            src="data:image/svg+xml,%3csvg width='100%25' height='100%25' viewBox='0 0 241 145' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e %3cpath d='M166.64%2c0L92.55%2c60.86L92.55%2c144.08L240.73%2c144.08L240.73%2c60.86L166.64%2c0Z' style='fill:rgb(76%2c154%2c173)%3bfill-rule:nonzero%3b'/%3e %3cpath d='M74.2%2c0L0.11%2c60.86L0.11%2c144.08L148.29%2c144.08L148.29%2c60.86L74.2%2c0Z' style='fill:rgb(137%2c174%2c39)%3bfill-rule:nonzero%3b'/%3e %3cpath d='M148.29%2c144.08L148.29%2c60.78L148.38%2c60.78L148.34%2c60.75L148.4%2c60.7L148.29%2c60.7L148.29%2c60.62L148.29%2c60.66L120.47%2c37.88L92.71%2c60.66L92.65%2c60.62L92.65%2c60.7L92.55%2c60.7L92.6%2c60.75L92.56%2c60.78L92.65%2c60.78L92.65%2c60.66L92.65%2c144.08L148.29%2c144.08Z' style='fill:rgb(112%2c112%2c132)%3bfill-rule:nonzero%3b'/%3e%3c/svg%3e"
                            srcSet="data:image/svg+xml,%3csvg width='100%25' height='100%25' viewBox='0 0 241 145' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e %3cpath d='M166.64%2c0L92.55%2c60.86L92.55%2c144.08L240.73%2c144.08L240.73%2c60.86L166.64%2c0Z' style='fill:rgb(76%2c154%2c173)%3bfill-rule:nonzero%3b'/%3e %3cpath d='M74.2%2c0L0.11%2c60.86L0.11%2c144.08L148.29%2c144.08L148.29%2c60.86L74.2%2c0Z' style='fill:rgb(137%2c174%2c39)%3bfill-rule:nonzero%3b'/%3e %3cpath d='M148.29%2c144.08L148.29%2c60.78L148.38%2c60.78L148.34%2c60.75L148.4%2c60.7L148.29%2c60.7L148.29%2c60.62L148.29%2c60.66L120.47%2c37.88L92.71%2c60.66L92.65%2c60.62L92.65%2c60.7L92.55%2c60.7L92.6%2c60.75L92.56%2c60.78L92.65%2c60.78L92.65%2c60.66L92.65%2c144.08L148.29%2c144.08Z' style='fill:rgb(112%2c112%2c132)%3bfill-rule:nonzero%3b'/%3e%3c/svg%3e"
                            alt="logo" aria-hidden="true" data-iml="1243.5999999940395"
                            data-atf="true" />
                    </a>
                </div>
                <div className="navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="https://buy.com" style={{fontSize: 15}}>Buy</a>
                        </li>
                        <li>
                            <a href="https://projects.com" style={{fontSize: 15}}>Projects</a>
                        </li>
                        <li>
                            <a href="https://search.com" style={{fontSize: 15}}>Search Find</a>
                        </li>
                        <li>
                            <a href="https://signup.com" className='signup'>MY SPACE</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;