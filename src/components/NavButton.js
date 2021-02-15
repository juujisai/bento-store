import React from 'react';
import { connect } from 'react-redux'
import { SWITCH_NAV_VISIBILITY } from '../redux/actions/actions'
import logo from '../images/header/logo.png'

const NavButton = ({ navOpen, switchVisible }) => {
  // console.log(isMenuOpen)

  const [scrollValue, setScrollValue] = React.useState(0)

  window.addEventListener('scroll', (e) => {
    setScrollValue(window.scrollY)
  })



  return (
    <div className={`navButton ${scrollValue > window.innerHeight / 2 && !navOpen ? 'change-nav-color' : null}`}  >
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className={`menu-bars ${navOpen ? `open-menu` : null}`} onClick={() => switchVisible()}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>

      </div>
    </div >
  );
}

const mapStateToProps = (state) => {
  const { navOpen } = state
  return { navOpen }
}

const mapDispatchToProps = (dispatch) => {
  return { switchVisible: () => dispatch({ type: SWITCH_NAV_VISIBILITY }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);