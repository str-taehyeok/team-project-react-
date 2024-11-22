import React from 'react';

const FlushieSpecial = ({specialProducts}) => {
  return (
    <div className="special-price">
        <div className="special-price-wrap">
            {specialProducts}
        </div>
    </div>
  );
};

export default FlushieSpecial;