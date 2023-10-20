import styles from '../styles/Main.module.css'
import '../app/globals.css';
import Headers from '../app/Header';
import React from 'react';
export default function MainPage() {
    return (
        <>
            <Headers/>
            <div className="w-full h-auto min-h-screen">
                <div className="absolute w-full h-full bg-cover bg-[url('https://genshin-impact-info.github.io/GenshinImpact_inform/images/main/background.webp')]">
                    <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/main/maintext.png" className=" w-6/12 mt-[30rem] mx-auto"></img>
                </div>
            </div>
        </>
    )
}