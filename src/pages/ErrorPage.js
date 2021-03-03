import React from 'react';
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>Podana strona nie istnieje</h1>
      <div className="item-buy">
        <button><Link to='/'>Idź do strony głównej</Link></button>
      </div>
    </div>
  );
}

export default ErrorPage;