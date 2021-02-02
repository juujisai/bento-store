import React from 'react';
import { connect } from 'react-redux'
import { SWITCH_NAV_VISIBILITY } from '../redux/actions/actions'


const NavButton = ({ navOpen, dispatch }) => {
  // console.log(isMenuOpen)
  return (
    <div className={`navButton ${navOpen ? `open-menu` : null}`} onClick={() => dispatch({ type: SWITCH_NAV_VISIBILITY })} > x {navOpen ? 'yes' : 'no'}</div >
  );
}

const mapStateToProps = (state) => {
  const { navOpen } = state
  return { navOpen }
}


export default connect(mapStateToProps)(NavButton);