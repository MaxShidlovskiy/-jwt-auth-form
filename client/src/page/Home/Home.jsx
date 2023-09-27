import Header from "../../components/Header/Header";
import style from './style.module.scss';
import useAuth from "../../hook/useAuth";
import { useState } from "react";

export default function Home() {
    const {token} = useAuth();
    
    return (
        <>
            <Header />
            <div className={style.container}>
            </div>
            <h3>вы вошли как пользователь</h3>
        </>
    )
}