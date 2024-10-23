import {NavLink} from 'react-router-dom';
import { FaEllipsisVertical } from "react-icons/fa6";
import { useEffect, useState } from 'react';

export const Header = () => {

    const [click, setClick] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    
    const closeMenu = () => {
        if(width <= 500){
            return <NavLink to="#" className="navlink" onClick={handleVertical}>Close menu</NavLink>
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        if (width >= 500) {
            setClick(true);
        } else {
            setClick(false);
        }
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    const handleVertical = () => {
        setClick(!click) 
    }

    return (
        <div className='container'>
            <div className="left">
                <img src="logo.jpg" alt="logo" />
                <h1><span>Sun</span><p className='speed'>Speed</p></h1>
            </div>
            <div className="right">
                <div className={`nav-btn ${click ? "disflex" : "disnone"}`}>
                    {closeMenu()}
                    <NavLink to='/' className="navlink" onClick={width <= 500 ? handleVertical : undefined}>Home</NavLink>
                    <NavLink to='/country' className="navlink" onClick={width <= 500 ? handleVertical : undefined}>Countries</NavLink>
                    <NavLink to='/tops' className="navlink" onClick={width <= 500 ? handleVertical : undefined}>Tops</NavLink>
                    <NavLink to='#' className="navlink" onClick={width <= 500 ? handleVertical : undefined}>About</NavLink>
                </div>
                <div className='vertical-ellipse' onClick={handleVertical}>
                <FaEllipsisVertical/>
            </div>
            </div>
        </div>
    )
}