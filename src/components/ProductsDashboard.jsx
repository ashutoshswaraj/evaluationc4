import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getproductsData, sortProducts } from "../Redux/actions";

export const Products = () => {
  // const data = useSelector((state) => state.products);
  const data = useSelector((state) => state.sortedProducts);

  const nav = useNavigate();
  // to get all products list on component mounts
  const dispatch = useDispatch();
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData());
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    // console.log(e.target.value)
    dispatch(sortProducts(e.target.value.trim()));
  };
  return (
    <div>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      {console.log(data)}
      <div className="products-list"  style={{display:"grid",gridTemplateColumns:"repeat(4,20%)",justifyContent:"space-around"}}>
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((product) => {
            return (
              <div
                
                key={product.id}
                onClick={() => nav(`/products/${product.id}`)}
              >
                <img src={product.image} alt="" height="85%" width="100%" />
                {/* display the results here */
                
                  product.title}
                  <p>{product.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};