import React, {FC} from 'react';
import s from "../index.module.css";
import contact_icon from "../../../assets/image/contact_icon.png";


const AUTHOR_NAME="Леонард"
const AUTHOR_SURNAME="Казарьян"

interface IContactInfo{
    title: string;
    link: string;
}
const ContactInfo:FC<IContactInfo>=({title,link})=>{
    return(
        <div className={s.contact_style}>
            <img src={contact_icon} alt={"#"}/>
            <a href={link} target="_blank">{title}</a>

        </div>
    );

}
const Head = () => {
    return (
        <header className={s.header}>
            <div className={s.author_photo}>{AUTHOR_NAME[0]+AUTHOR_SURNAME[0]}</div>
            <div className={s.author_info}>
                <div className={s.author_name}>
                    {AUTHOR_NAME}&nbsp;{AUTHOR_SURNAME}
                </div>
                <div className={s.author_contact}>
                    <ContactInfo title={"Telegram"} link={"https://t.me/coldwarchild"}/>
                    <ContactInfo title={"GitHub"} link={"https://github.com/leonardhere"}/>
                    <ContactInfo title={"Resume"} link={"https://hh.ru/resume/d859fa59ff063af5020039ed1f716b6c7a5471"}/>
                </div>
            </div>
        </header>
    );
};

export default Head;