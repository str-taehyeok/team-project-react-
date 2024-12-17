import { createContext, useEffect, useState } from "react";

const ProductContext = createContext({
  productState : { 
    products : [], 
    isUpdate : false,
  },
  productAction : { 
    setProducts : () => {},
    setIsUpdate : () => {}
  }
})

const ProductProvider = ({children}) => {

  const [ products, setProducts ] = useState([]);
  const [ isUpdate, setIsUpdate ] = useState(false);

  useEffect(() => {

    // 판매중인 상품을 전체 조회
    const getProduct = async () => {
      const response = await fetch(`http://localhost:10000/products/products`);
      const data = await response.json();
      return data;
    };

    getProduct().then(setProducts).catch(console.error);

  }, [isUpdate]);

  const value = {
    productState : { 
      products : products, 
      isUpdate : isUpdate,
    },
    productAction : { 
      setProducts : setProducts,
      setIsUpdate : setIsUpdate
    }
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductProvider, ProductContext};