import React from 'react'
import {
    FaDribbbleSquare,
    FaDailymotion,
    FaElementor,
    FaDev,
} from "react-icons/fa";


var content = 'The Typemaster keyboard boaststop-notch build and practicaldesign . it offers a wide variety'


export const Footer = () => {
    const footer_content = [
        {
            icon: <FaDribbbleSquare/>,
            title: <h4 className='head-text low'>HIGHLY <br/> COMPTAIBLEE</h4>,
            content:content
        },
        {
            icon: <FaDailymotion/>,
            title:  <h4 className='head-text low'>WIRELESS <br/> WITH BLUETOOTH</h4>,
            content:content
        },
        {
            icon: <FaElementor/>,
            title:  <h4 className='head-text low'>HIGH CAPACITY <br/> BATTAREY</h4>,
            content:content
        },
        {
            icon: <FaDev/>,
            title:  <h4 className='head-text low'>RGB BACKLIST <br/> MODES</h4>,
            content:content
        },
        
    ]
    return (
        <div className='main-foot-container'>
            {footer_content.map((single) => {
                return (
                    <div className='footer-container'>
                        <div className='icon-stage hig'>
                            {single.icon}
                        </div>
                        {single.title}
                        <p className='content-text'>{single.content}</p>
                    </div>
                )
            })}
        </div>
  )
}
