import React, {useState} from 'react';
import Style from './Navbar.module.scss';
// import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Papers',
        to: '/papers',
        active: 'papers'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const basePath = location.pathname.slice(1, location.pathname.length)
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : basePath.includes("papers") ? 'papers' : ' ');
    return (
        <Box component={'nav'} width={'100%'} paddingTop={'1rem'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)}>
                            {<h3 style={{paddingBottom: '0.5rem'}}>{link.name}</h3>}
                        </Link>
                    </Box>
                ))}
                {/* <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li> */}
            </Box>
        </Box>
    )
}