import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {

  return (
    <footer>
      <div className="footer-list">
        <div className="footer-list-item regulamin">
          <h2>Regulaminy</h2>
          <div className='cont'>
            <p>Regulamin sklepu internetowego</p>
            <p>Polityka prywatności</p>
            <p>Zwroty i wymiana produktów</p>
            <p>Karty podarunkowe</p>
          </div>
        </div>
        <div className="footer-list-item contact">
          <h2>Kontakt</h2>
          <div className='cont'>
            <p>Newsletter</p>
            <p>Wyślij do nas wiadomość</p>
          </div>
        </div>
      </div>
      <div className="media">
        <ul>
          <li><a href='/'><AiFillFacebook /></a></li>
          <li><a href='/'><AiFillTwitterSquare /></a></li>
          <li><a href='/'><AiFillInstagram /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;