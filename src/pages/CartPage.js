import React from 'react';
import { connect } from 'react-redux'

const CartPage = ({ cart }) => {


  return (
    <div className='cartpage'>
      <h1>Koszyk</h1>
      <table className="cart">

      </table>
    </div>
  );
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

export default connect(mapStateToProps)(CartPage);