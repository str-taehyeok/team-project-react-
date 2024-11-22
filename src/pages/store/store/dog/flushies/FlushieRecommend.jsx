import React from 'react';

const FlushieRecommend = ({recommendProducts}) => {
  return (
    <div className="product-container">
        <div className="product-wrap">
            {recommendProducts}
        </div>
    </div>
  );
};

export default FlushieRecommend;