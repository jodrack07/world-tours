import { useState } from 'react';

export default function Tour({ id, name, image, info, price, onRemoveTour }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='tour'>
      <img src={image} alt={name} />
      <div className='text-content'>
        <div className='name-price'>
          <p>{name}</p>
          <p className='price'>${price}</p>
        </div>
        <p className='info'>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <span
            onClick={() => setShowMore(!showMore)}
            className='show-more-less'
          >
            {showMore ? 'Show less' : 'Show more'}
          </span>
        </p>
      </div>
      <button onClick={() => onRemoveTour(id)} className='btn btn-danger'>Not Interested</button>
    </div>
  );
}
