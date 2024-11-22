import React from 'react';

const FlushieBest = ({betsProducts}) => {
  return (
    <div className="best-products">
    <div className="box">
            <span className="box-title">강아지 BEST 상품</span>
        </div>
        <div className="product-container">
            <div className="best-product-wrap">
                {betsProducts}
            </div>
        </div>
    </div>
  );
};

export default FlushieBest;