import styles from '../styles/Header.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import React from 'react';

export const Header: React.FC = () => {
    const router = useRouter();
    return (
        <div className="flex fixed items-center w-full h-20 bg-white z-40 text-black">
            <img className="w-32 ml-52 cursor-pointer" src='https://genshin-impact-info.github.io/GenshinImpact_inform/images/logo.png' onClick={() => router.push("/")}></img>
            <ul className="flex ml-20">
                <li className="w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group" onClick={() => router.push("/components/Character")}>Character<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span></li>
                <li className="w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group">Weapons<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span></li>
                <li className="w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group" onClick={() => router.push("/components/Artifacts")}>Artifacts<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span></li>
                <li className="w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group">Boss<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span></li>
                <li className="w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group">God<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span></li>
                <li className="w-1/2 ml-16 text-lg cursor-pointer items-center transition duration-300 group">Universe<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span></li>
            </ul>
        </div>
    );
}

export default Header;