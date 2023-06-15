import React, {FC} from 'react';
import s from "./index.module.css"
import Head from "./Head/Head";
import InputWithLabel, {TypeEnum} from "./InputWithLabel/InputWithLabel";
import Button from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";


const Main : FC = () => {

    const navigate=useNavigate();

    return (
        <div className={s.main}>
            <Head/>
            <InputWithLabel label={"Номер телефона"} type={TypeEnum.Number} />
            <InputWithLabel label={"Email"} type={TypeEnum.Email}/>
            <div style={{height:60}}></div>
            <Button title={"Начать"} outlined={false} onClick={()=>navigate("/pages")}/>
        </div>
    );
};

export default Main;