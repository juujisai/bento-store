import React from 'react';
import no_picture from '../images/no_picture.png'
import { Link } from 'react-router-dom'
import { IoTrashBinSharp, IoBagAddSharp, IoBagRemoveSharp } from 'react-icons/io5'
import { connect } from 'react-redux'
import { changeCartItem } from '../redux/actions/actions'



const CartItem = ({ data: { img, name, id, order, price }, change }) => {

  let sum = 0;

  const amount = order.map((item, i) => {
    sum += (item.amount * price)
    return (
      <p key={i}>{item.amount} x {item.size}</p>
    )
  }
  )

  return (
    <>
      <tr>
        <td><Link to={`/shop/items/${id}`}><img src={img === 'undefined' ? no_picture : img} alt={name} /></Link></td>
        <td>{name}</td>
        <td>{amount}</td>
        <td>{sum.toFixed(2)} zł</td>
      </tr>
      <tr className='line'>
        <th id='cart-item-tools' colSpan='4'>
          <span className='icon-success' onClick={() => change('increase', id)}><IoBagAddSharp /></span>
          <span onClick={() => change('remove', id)}><IoTrashBinSharp /></span>
          <span className='icon-danger' onClick={() => change('decrease', id)}><IoBagRemoveSharp /></span>
        </th>


      </tr>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { change: (operator, id) => dispatch(changeCartItem(operator, id)) }
}

export default connect(null, mapDispatchToProps)(CartItem);