import React, { useState } from 'react';

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const liClass = isInCart ? 'in-cart' : 'not-in-cart';
  const buttonClass = isInCart ? 'remove' : 'add';
  const buttonText = isInCart ? 'Remove From Cart' : 'Add to Cart';

  function handleClick() {
    setIsInCart(!isInCart);
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className='category'>{category}</span>
      <button onClick={handleClick} className={buttonClass}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
