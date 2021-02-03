import React from 'react';
import menuData from '../data/menuData'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const NavElements = ({ navOpen }) => {




  const nav = menuData.map(item => (
    <li className="navi-li" key={item.id} style={navOpen ? { top: `${item.id * .15 * window.innerHeight + 70}px` } : { top: `-200px` }}>
      <NavLink
        to={item.path}
      >
        {item.title}
      </NavLink>
    </li>
  ))

  return (
    <ul className={`navi ${navOpen ? null : 'hidden'}`}>
      {nav}
    </ul>
  );
}

const mapStateToProps = ({ navOpen }) => {
  return { navOpen }
}

export default connect(mapStateToProps)(NavElements);