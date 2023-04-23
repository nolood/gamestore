import React from 'react';
import './NavbarStyle.scss'
import LogoIcon from "../Icons/LogoIcon";
import WishListIcon from "../Icons/WishListIcon";
import DefaultUserIcon from "../Icons/DefaultUserIcon";
import {NavbarListData} from "./NavbarListData";
import NavbarItem from "./NavbarItem";


const Navbar = () => {
    return (
        <section className='section navbar'>
            <div className='container navbar__wrapper'>
                <div className='navbar__logo-wrapper'>
                    <h1>GamesBlog</h1>
                    <div className='navbar__logo'>
                        <LogoIcon/>
                    </div>
                </div>
                <nav className='navbar__list'>
                    <ul className='navbar__list-wrapper'>
                        {NavbarListData.map((item, index) =>
                            <NavbarItem key={index} title={item.title} route={item.route}/>
                        )}
                    </ul>
                </nav>
                <div className='navbar__wishlist'>
                    <div className='navbar__wishlist-icon'>
                        <WishListIcon/>
                    </div>
                    <div className='navbar__profile-icon'>
                        <DefaultUserIcon/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
