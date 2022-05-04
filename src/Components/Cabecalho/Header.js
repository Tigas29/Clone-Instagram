import './Header.css';
import React from "react";
import logo from '../../img/logo.png';
import perfil from "../../img/perfil.png";
import { AiOutlineSearch, AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { IconContext } from 'react-icons'
export function Teste() {
    return (
        <>
            <header className="cabecalho">
                <nav>
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="input-text">
                        <IconContext.Provider value={{ color: '#8e8e8e' }}>
                            <AiOutlineSearch />
                        </IconContext.Provider>
                        <input type="text" className="barra" placeholder="Pesquisar" />
                    </div>
                    <div className="icons">
                        <IconContext.Provider value={{ size: '26px' }}>
                            <div><AiFillHome /></div>
                            <div> <RiMessengerLine /></div>
                            <div> <BsPlusSquare /></div>
                            <div><MdOutlineExplore /></div>
                            <div><AiOutlineHeart /></div>
                        </IconContext.Provider>
                        <img className="img-user" src={perfil}></img>
                    </div>
                </nav>
            </header>
        </>
    );
}

