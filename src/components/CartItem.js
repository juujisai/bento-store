import React from 'react';
import no_picture from '../images/no_picture.png'
import { Link } from 'react-router-dom'
import { IoTrashBinSharp, IoBagAddSharp, IoBagRemoveSharp } from 'react-icons/io5'

const CartItem = ({ data: { img, name, id, order, price } }) => {
  console.log(img)

  let sum = 0;

  const amount = order.map((item, i) => {
    sum += item.amount * price
    return (
      <p key={i}>{item.amount} x {item.size}</p>
    )
  }
  )

  const handleClick = (operation) => {
    console.log(operation, id, order)
  }

  return (
    <>
      <tr>
        <td><Link to={`/shop/items/${id}`}><img src={img === 'undefined' ? no_picture : img} alt={name} /></Link></td>
        <td>{name}</td>
        <td>{amount}</td>
        <td>{sum} zł</td>
      </tr>
      <tr className='line'>
        <td></td>
        <td className='icon-success' onClick={() => handleClick('add')}> <IoBagAddSharp /> </td>
        <td className='icon-danger' onClick={() => handleClick('remove')}> <IoBagRemoveSharp /> </td>
        <td onClick={() => handleClick('clearItem')}> <IoTrashBinSharp /> </td>
      </tr>
    </>
  );
}

export default CartItem;