import React from 'react';
import { Link } from 'react-router-dom'



const CheckoutPage = () => {

  React.useEffect(() => {
    const svg = [document.querySelector('.checkout-svg svg path'), document.querySelector('.checkout-svg svg circle')]
    let svgLength = []

    for (let i = 0; i < svg.length; i++) {
      svgLength = [...svgLength, svg[i].getTotalLength()]
    }
    svg.forEach((item, id) => item.style.strokeDasharray = svgLength[id])
    svg.forEach((item, id) => item.style.strokeDashoffset = svgLength[id])
    svg.forEach((item, id) => item.style.animation = `svgAnimate 2s ease both .5s`)

  }, [])



  return (
    <div className='checkout-page'>
      <div className="checkout-svg">
        <svg width="211" height="200" viewBox="0 0 211 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" stroke="#25DE21" strokeWidth="10" />
          <path d="M46 100L87.5 153.5C88 124.5 113.2 62.4 210 46" stroke="#039500" strokeWidth="10" />
        </svg>
      </div>
      <h2>Przedmioty zakupione!</h2>
      <div className="item-buy">
        <button ><Link to='/new'>Idź do nowości</Link></button>
      </div>
    </div>
  );
}

export default CheckoutPage;