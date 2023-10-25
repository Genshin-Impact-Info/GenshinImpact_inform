import styles from '../styles/Main.module.css'
import '../app/globals.css';
import Headers from '../app/Header';
import React, { useState, useEffect } from 'react';
import Firstloadpage from '../pages/components/loading/Firstloadpage';
export default function MainPage() {
    const [loadpage, setLoadpage] = useState(true);
    useEffect(() => {
        const delay = 3000; // 3초 (단위: 밀리초)
        const timer = setTimeout(() => {
            setLoadpage(false);
        }, delay);
    })
    return (
        <>
            <Headers />
            {
                loadpage ?
                    <Firstloadpage />
                    :
                    <div className="w-full h-auto min-h-screen">
                        <div className="absolute w-full h-full bg-cover bg-[url('https://genshin-impact-info.github.io/GenshinImpact_inform/images/main/background.webp')]">
                            <img src="https://genshin-impact-info.github.io/GenshinImpact_inform/images/main/maintext.png" className=" w-6/12 mt-[30rem] mx-auto"></img>
                        </div>
                    </div>
            }
        </>
    )
}