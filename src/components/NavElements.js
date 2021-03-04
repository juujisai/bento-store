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
  const [scrollValue, setScrollValue] = React.useState(0)
  const [wWidth, setWWidth] = React.useState(0)
  window.addEventListener('scroll', (e) => {
    setWWidth(window.innerWidth)
    setScrollValue(window.scrollY)
  })


  const nav = menuData.map(item => (
    // <li className="navi-li" key={item.id} style={navOpen ? { top: `${item.id * .15 * window.innerHeight + 70}px` } : { top: `-200px` }}>
    <li
      className={`navi-li ${navOpen ? 'navOpen' : null}`}
      key={item.id}>
      <NavLink
        to={item.path}
        exact
        onClick={() => {
          handleClick()
          switchVisible()
        }}
        className={navOpen ? 'navOpen' : null}
        id={wWidth >= 1024 && scrollValue > window.innerHeight / 2 ? 'change-color' : null}
        style={{ transitionDelay: `${item.id * 0.25}s` }}
      >
        {item.title}
      </NavLink>
    </li>
  ))

  return (
    <ul className={`navi ${navOpen ? null : 'hidden'}`}
    // id={wWidth >= 1024 && scrollValue > window.innerHeight / 2 ? 'change-color' : null}
    >
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