import React, { Fragment, useEffect, useState } from 'react'
import siteLogo from"../../assets/image/header/Site logo.svg"
import "./Header.scss"
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Search from '../../components/search';
import axios from '../../api';
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
    const [menu,setMenu] = useState(false)
    const [value,setValue] = useState("")
    const [data,setData] = useState(null)

    useEffect(()=>{
        if(!value.trim()) return
        axios
            .get(`/search?q=${value.trim()}`)
            .then(respons => setData(respons.data.products))
            .catch(error => console.error(error))
    },[value])
  return (
    <Fragment>
        <header className='header'>
            <nav className='container header__navbar'>
                <ul className={`header__list ${menu ? "header__show-list" : ""}`}>
                    <li className='header__item'>
                        <NavLink className='header__link' to={"/"}>Home</NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink className='header__link' to={"/shop"}>Shop All</NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink className='header__link' to={"/blog"}>Blog</NavLink>
                    </li>
                    <li className='header__item header__item__about'>
                        <NavLink className='header__link' to={"/about"}>About Us</NavLink>
                    </li>
                    <li onClick={()=>setMenu(false)} className={`header__item__calose ${menu ? "header__show-close" : ""}`}>
                        <IoIosCloseCircleOutline className='header__item__calose-icon'/>
                    </li>
                </ul>
                <Link className='header__logo-link' to={"/"}>
                    <img className='header__logo-img' src={siteLogo} alt="Site logo img" />
                </Link>
                <div className='header__rigth-part'>
                    <NavLink className='header__right__link' to={"/about"}>About Us</NavLink>
                    <form className='header__rigth__form'>
                        <input value={value} onChange={e => setValue(e.target.value)} className='header__search__input' type="search" placeholder='Search Product' />
                        <button className='header__search-btn'><IoSearch className='header__search-icon'/></button>
                        {
                            value.trim()
                            ?
                            <Search data={data}/>
                            :
                            <></>
                        }
                    </form>
                    <button onClick={()=>setMenu(true)} className='header__menu__btn'><GiHamburgerMenu className='header__menu'/></button>
                </div>
            </nav>
        </header>
    </Fragment>
  )
}

export default Header