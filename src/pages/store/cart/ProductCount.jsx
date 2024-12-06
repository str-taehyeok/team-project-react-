import React, { useState } from 'react';

const ProductCount = ({products}) => {

  const [product, setProduct] = useState(product.ProductCount)
  const increase = () => {
    setProduct(product + 1)
  }

  return (
    <div>
      <p>{product.productCount}</p>
      <button>-</button><span></span><button>+</button>
    </div>
  );
};

export default ProductCount;