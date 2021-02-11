import React from 'react';
import menuData from '../data/menuData'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { SWITCH_NAV_VISIBILITY } from '../redux/actions/actions'


const NavElements = ({ navOpen, switchVisible }) => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  const nav = menuData.map(item => (
    <li className="navi-li" key={item.id} style={navOpen ? { top: `${item.id * .15 * window.innerHeight + 70}px` } : { top: `-200px` }}>
      <NavLink
        to={item.path}
        onClick={() => {
          handleClick()
          switchVisible()
        }}
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

const mapDispatchToProps = (dispatch) => {
  return { switchVisible: () => dispatch({ type: SWITCH_NAV_VISIBILITY }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavElements);