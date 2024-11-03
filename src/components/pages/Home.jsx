import Header from "../utilities/Header";
import '../styles/Font.css';
import Slogan from "../utilities/Slogan";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import menucircle from "../../assets/image/whitecircle.png";

const Home = () => {

    return (
        <div className="bg-[url('/src/assets/image/homebg.png')] overflow-hidden bg-no-repeat w-full flex-col flex justify-center items-center bg-cover bg-center h-screen">
            <Header />
            <Slogan />
            <div className={`absolute bottom-14 animate-spin hover:[animation-play-state:paused] hover:opacity-70 transition-all ease-in-out duration-200`}>
                <NavLink to={"/menu"}>
                    <img src={menucircle} className="sm:w-40 lg:w-52" alt="" />
                </NavLink>
            </div>
        </div>
    );
}

export default Home