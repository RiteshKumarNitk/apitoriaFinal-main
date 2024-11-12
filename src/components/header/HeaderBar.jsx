import React from 'react'
import img from "../../assets/images/logo.jpg"
import "../../assets/style.css"
import { AiOutlineClose } from 'react-icons/ai'
const HeaderBar = () => {
  return (
    <div>
       <div className="bg">
      <div className="container">
        <div className="head">
          <a href="">Quick Quote |</a>
          <a href="">Government contrection |</a>
          <a href="">News</a>
        </div>
      </div>
      </div>
      <div className="container">
      <div className="section">
        <div className="logo"><img src={img} alt="" /></div>

        <ul className="nav">
          <li><a href="">Who we are</a></li>
          <li><a href="">Our bussines</a></li>
          <li><a href="">Our product</a></li>
          <li><a href="">Sustaiabilitie</a></li>
        </ul>
        <div className="key">
          <a href="" className="spacial-a">Careers </a>
          <a href="">Contact us</a>
          <a href=""><AiOutlineClose size={24} /></a>
        </div>
      </div>
    </div>
    <hr/>
    </div>
  )
}

export default HeaderBar
