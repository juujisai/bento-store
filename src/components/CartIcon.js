import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CartIcon = ({ cart }) => {
  return (
    <div className='cart-icon' >
      <FiShoppingCart />
      <span className='cart-length'>{cart.length}</span>
      <Link to='/cart' />
    </div>
  );
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

export default connect(mapStateToProps)(CartIcon);