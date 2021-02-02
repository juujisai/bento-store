import React from 'react';
import { connect } from 'react-redux'
import { SWITCH_NAV_VISIBILITY } from '../redux/actions/actions'


const NavButton = ({ navOpen, switchVisible }) => {
  // console.log(isMenuOpen)
  return (
    <div className={`navButton ${navOpen ? `open-menu` : null}`} onClick={() => switchVisible()} > x {navOpen ? 'yes' : 'no'}</div >
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