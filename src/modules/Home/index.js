import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import Header from "../../components/Header";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [apiStatus, setApiStatus] = useState("inital");
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setApiStatus("loading");
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setApiStatus("success");
      } catch (error) {
        setApiStatus("error");
      }
    };
    fetchProducts();
  }, []);

  const addProductToCard = (product) => {
    
    const isProductInCard = cardList.some((item) => item.id === product.id);

    if (!isProductInCard) {
      
      setCardList([...cardList, product]);
    } else {
     
      console.log(`Product with id ${product.id} is already in the cardList.`);
    }
  };

  const removeProductFromCard = (productId) => {
    
    const updatedCardList = cardList.filter(
      (product) => product.id !== productId
    );
    setCardList(updatedCardList);
  };

  return (
    <div>
      <Header cardList={cardList} />
      <Hero />
      <div className="flex flex-col text-center w-full mt-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Products
        </h1>
      </div>

      {(apiStatus === "loading" || apiStatus === "inital") && (
        <div>Fetching product...</div>
      )}

      {apiStatus === "success" && products.length > 0 && (
        <Products products={products} handleAddToCard={addProductToCard} />
      )}
      {apiStatus === "error" && <div>Something went wrong...</div>}
    </div>
  );
};

export default Home;