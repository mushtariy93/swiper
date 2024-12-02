import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import Modal from "./Modal";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/products");
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const openModal = (url) => {
    setOpen(true);
    setImageUrl(url);
  };
  const product_items = data?.map((item) => (
    <div
    onClick={() => openModal(item.image)}
      key={item.id}
      className="item cursor-pointer p-3 shadow-xl flex flex-col gap-3 justify-center items-center"
    >
      <div className="images">
        <img
          className="w-full h-44 object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>
      <h2 className="font-bold text-2xl"> {item.category} </h2>
      <h2 className="font-medium text-center"> {item.title} </h2>
      <p> {item.price} USD</p>
      <p className="flex gap-1">
        {[...Array(Math.floor(item.rating.rate))].map((_, index) => (
          <FaStar key={index} className="text-[gold]" />
        ))}
        {item.rating.rate % 1 >= 0.5 && (
          <FaStarHalfAlt key="half-star" className="text-[gold]" />
        )}
      </p>
      <button className="text-white py-2 px-4 rounded-lg bg-green-500 hover:opacity-60">Buy Now</button>
    </div>
  ));

  return (
    <div className="section">
      <div className="container">
        {open && <Modal imageUrl={imageUrl} setOpen={setOpen}/>} 
        <h1 className=" text-center mb-4 text-2xl">Products</h1>

        {loading ? (
          <p className="text-center font-medium">Loading ...</p>
        ) : (
          <div className="items grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {product_items}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
