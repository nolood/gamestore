import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

interface NavbarItemProps {
    title: string,
    route: string,
}

const NavbarItem: FC<NavbarItemProps> = ({title, route}) => {

    const navigate = useNavigate()

    return (
        <li onClick={() => navigate(route)} className='navbar__list-item'>
            <span>{title}</span>
        </li>
    );
};

export default NavbarItem;
